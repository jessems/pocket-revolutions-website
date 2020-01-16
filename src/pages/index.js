import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import PortfolioCard from 'components/PortfolioCard'
import ServiceGrid from 'components/ServiceGrid'
import Title from 'components/Title'
import { rhythm } from '../lib/typography'


const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        min-height: 360px;
        // background: ${theme.colors.primary};
        background-image: linear-gradient(to right, #C7017F, #153D8A);
        padding: 20px 0 30px 0;
        display: flex;
        clip-path: ellipse(100% 120% at 60% -20%);
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
          
        `}
      >

        <h1
          css={css`
            color: ${theme.colors.white};
            font-weight: 500;
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
          `}
        >
          From idea to app
        </h1>
        <h2 css={css`
            color: ${theme.colors.white};
            font-weight: 300;
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
          `}>
        Helping you achieve the impact you were dreaming of
        </h2>
      </Container>
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  )
}

const ContactUs = () => {
  let Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

  `
  let Col = styled.div`
    flex: 1;
    display: flex;
    flex-direction: col;
    justify-content: center;
    margin-top: 64px;
    margin-bottom: 64px;
    padding-left: 64px;
    padding-right: 64px;
  `

  let Input = styled.input`
    mix-blend-mode: lighten;
    opacity: 0.8;
    width: 100%;
    height: 60px;
  `

  let Submit = styled.button`
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
                min-height: 100px;
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
            <Col>
              <form name="contact" method="POST" data-netlify="true">
                <Input type="text" placeholder="Your name"/>
                <Input type="text" placeholder="Company name"/>
                <select name="budget" css={css`
                      mix-blend-mode: lighten;
                      opacity: 0.8;
                      width: 100%;
                      height: 60px;
                      margin: 5px 0px 0px 0px;
                `}>
                  <option value="" disabled selected hidden>Select your budget</option>
                  <option value="10k20k">CHF 10'000 –– CHF 20'000</option>
                  <option value="20k50k">CHF 20'001 –– CHF 50'000</option>
                  <option value="50k100k">CHF 50'001 –– CHF 100'000</option>
                  <option value="100k200k">CHF 100'001 –– CHF 200'000</option>
                  <option value="200k500k">CHF 200'001 –– CHF 500'000</option>
                  <option value="500kplus">Over CHF 500'001</option>
                </select>
                <Input type="text" placeholder="Email"/>
                <Submit type="submit">SEND</Submit>
              </form>
            </Col>
          </Row>
        </div>
        
      </Container>
    </section>
  )
}

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`

const SubHeading = styled.h2`
  font-weight: 500; 
  color: #153D8A; 
  font-size: 24px;
  margin: 0;
  margin-bottom: 32px;
`



export default function Index({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        

        <Title text="Portfolio" />
        <PortfolioCard 
          title="Reducing phone support with a self-serve tracker app" 
          appName="My Axova"
          description="Axova AG wanted to reduce the amount of support phone calls that were coming into the office. We created an app that functions as a packet tracker for the solar installation process."
          industry="Energy Sector"
          formFactor="Mobile App"
          userType="Business to Client"
          tags={['Product Design', 'Product Development', 'Other']}
          borderColor="rgba(13, 94, 33, 0.05);"
          backgroundColor="#F7FCF7"
          titleColor="#0E6123"
          moreLinkColor="#648D6E"
          imageName="axova"
          />
          <PortfolioCard 
          title="Digitalising the ping test –– an age-old method of catching counterfeit coins" 
          appName="Pingcoin"
          description="Experienced coin collectors are often able to determine if a coin is authentic gold or silver by listening to the sound it produces upon a gentle strike.
          Pingcoin brings this analog method into the digital realm, and in doing so enhances its accuracy and protects anyone with a smartphone from getting fooled by a counterfeit coin."
          industry="Numismatics"
          formFactor="Mobile App"
          userType="Business to Consumer"
          tags={['Product Design', 'Product Development', 'Other']}
          borderColor="#F3E6FB"
          backgroundColor="#F8F5FA"
          titleColor="#493289"
          moreLinkColor="#726A8B"
          imageName="pingcoin"
          />
      
        
        <Title text="What we do" />
        <div css={css`display: flex; font-weight: 300;`}>
          <div css={css`width: 66%;`}>
            <SubHeading>Helping you to go from an idea to a successful application</SubHeading>

            <p>If you want to build an app, you typically have several options. If you've got an in-house team you can develop the app internally. If you don't, you can work with an external agency.</p>
            
            <p>We are primarily interested in helping you achieve your business outcomes. If software is the right tool for that, then by all means, let's build it.
            But sometimes software isn't the right tool. </p>

            <p>Apps can be wonderful, sexy and even life-changing. Who doesn't rely on the magic of an app like Google Maps these days.</p>


            <SubHeading>Reduce the risks involved in developing a digital product</SubHeading>
            <p>But software development is a risky endeavour for any business.</p>

            
            <ul>
                  <li>There is the financial risk involved in financing the development of the application –– a price tag that often remains unknown until late in the project.</li>
                  <li>There is the market risk for B2C and B2B apps –– whether or not they will get traction and prove valuable to users</li>
                  <li>There are business risks –– whether the app will be able to sustain itself</li>
                  <li> There are technical risks -- </li>
                  <li>There are usability risks</li>
            </ul>

            <SubHeading>Quality</SubHeading>
            
            
            <p>It should come as not suprise that to successfully navigate these risks you need a partner that understands these domains.</p>
          </div>
          <div>

          </div>
        </div>



        <Title text="Our Services" />
        <div css={css`
        `}>
          <ServiceGrid />

        </div>

        <Title text="Posts" />
        {allMdx.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
            `}
          >
            <h2
              css={css({
                marginBottom: rhythm(0.3),
                transition: 'all 150ms ease',
                ':hover': {
                  color: theme.colors.primary,
                },
              })}
            >
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {post.frontmatter.title}
              </Link>
            </h2>
            <Description>
              {post.excerpt}{' '}
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                Read Article →
              </Link>
            </Description>
          </div>
        ))}
      </Container>
      <ContactUs />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
            contentType
          }
        }
      }
    }
  }
`
