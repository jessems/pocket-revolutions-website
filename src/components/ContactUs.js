import React from 'react'
import { css } from '@emotion/core'
import styled from 'styled-components'
import Container from 'components/Container'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

`;
const Col = styled.div`
  flex: 1;
  display: flex;
  flex-direction: col;
  justify-content: center;
  margin-top: 64px;
  margin-bottom: 64px;
  padding-left: 64px;
  padding-right: 64px;
`;

const Input = styled.input`
  mix-blend-mode: lighten;
  opacity: 0.8;
  width: 100%;
  height: 60px;
`


const Submit = styled.button`
  margin-top: 16px;
  width: 100%;
  height: 60px;
  background: rgba(0,0,0,0);
  border: 2px solid #E88EFF;
  color: #E88EFF;
  &:hover {
    background: #E88EFF;
    color: #431086;
  }
`

const Select = styled.select`
    mix-blend-mode: lighten;
    opacity: 0.8;
    width: 100%;
    height: 60px;
    margin: 5px 0px 0px 0px;
`
  

class ContactUs extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", company: "", budget: "", email: "", submitted: false};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }

    handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...this.state })
        })
            .then(() => {
                alert(JSON.stringify(this.state));
            })
            .catch(error => alert(error));

        e.preventDefault();
        this.setState({submitted: true});
    };

    handleChange = e => this.setState({ [e.target.name]: e.target.value });
    
    render() {

        const { name, company, budget, email, submitted } = this.state;

        return (
      <section css={css`
      background: rgb(41,1,107);
      background: linear-gradient(90deg, rgba(41,1,107,1) 0%, rgba(105,23,169,1) 100%);
      color: #fff;
      `}>
        <Container css={css`
        padding: 0;
        height: 100%;
        `}>
          <div css={css`
          background: linear-gradient(90deg, #431086 -0.99%, #621BA5 100.99%);
          box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.25);
        `}>
            <Row>
              <Col>
                <div css={css`
                `}>
                  <span css={css`
                    text-transform: uppercase;
                    color: #9685DA;
                    line-height: 120%;
                    font-size: 14px;
                  `}>Get in touch</span>
                  <h3 css={css`
                    font-weight: 500;
                    font-size: 28px;
                    line-height: 131.5%;
                    color: #FAEBFF;
                    margin-top: 0;
                    margin-bottom: 16px;
                  `}>Ready to start a revolution?</h3>
                  <p css={css`
                    font-weight: 300;
                    font-size: 20px;
                    line-height: 150%;
                    color: #E6E0FF;
                  `}>Get in touch with us here and we wil surely get back to you.</p>
                </div>
              </Col>
              <Col css={css`min-height: 350px;`}>{!submitted ? (
                <form name="contact" onSubmit={this.handleSubmit}>
                  <Input type="text" placeholder="Your name" name="name" value={name} onChange={this.handleChange}/>
                  <Input type="text" placeholder="Company name" name="company" value={company} onChange={this.handleChange}/>
                  <Select name="budget" value={budget} onChange={this.handleChange}>
                    <option value="" disabled selected hidden>Select your budget</option>
                    <option value="10k20k">CHF 10'000 –– CHF 20'000</option>
                    <option value="20k50k">CHF 20'001 –– CHF 50'000</option>
                    <option value="50k100k">CHF 50'001 –– CHF 100'000</option>
                    <option value="100k200k">CHF 100'001 –– CHF 200'000</option>
                    <option value="200k500k">CHF 200'001 –– CHF 500'000</option>
                    <option value="500kplus">Over CHF 500'001</option>
                  </Select>
                  <Input type="text" placeholder="Email" name="email" value={email} onChange={this.handleChange}/>
                  <Submit type="submit">SEND</Submit>
                </form>
                ) : (
                    <div css={css`height: 350px; display: flex; flex-direction: column; justify-content: center; text-align: center;`}>
                        <div>
                            <p css={css`
                                font-weight: 300;
                                font-size: 20px;
                                line-height: 150%;
                                color: #E6E0FF;
                            `}>Thank you for submitting your interest.</p>
                                                        <p css={css`
                                font-weight: 300;
                                font-size: 20px;
                                line-height: 150%;
                                color: #E6E0FF;
                            `}>We will get back to you shortly.</p>
                        </div>
                      
                    </div>
                )
                }
              </Col>
            </Row>
          </div>
          
        </Container>
      </section>
        )
    }
}

export default ContactUs