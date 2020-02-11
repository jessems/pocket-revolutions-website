import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import PortfolioCard from 'components/PortfolioCard'
import SmallAsymmetricallyRoundedCard from 'components/SmallAsymmetricallyRoundedCard'
import ServiceGrid from 'components/ServiceGrid'
import Title from 'components/Title'
import { rhythm } from '../lib/typography'
import AxovaBackground from 'components/axova-background.svg'
import PingcoinBackground from 'components/pingcoin-background.svg'
import HeroImage from 'components/hero-image.png'
import ContactUs from 'components/ContactUs'
import { bpMaxSM, bpMinLG } from '../lib/breakpoints'
import HeroBackground from 'components/assets/hero_background.svg'


const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        min-height: 360px;
        padding: 20px 0 30px 0;
        display: flex;
        ${bpMaxSM} {
        }
      `}
    >
      <Container
        css={css`
          z-index: 2;
          
        `}
      >
        
        <div css={css`
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    ${bpMaxSM} {
                      justify-content: center;
                    }
        `}>
          <div css={css`
            ${bpMaxSM} {
              text-align: center;
            }
          `}>

            <h1
              css={css`
                color: ${theme.colors.white};
                font-family: 'Cairo', 'sans-serif';
                font-weight: 600;
                position: relative;
                z-index: 5;
                line-height: 1.5;
                font-size: 32px;
                margin: 0;
                max-width: ${rhythm(15)};
              `}
            >
              From idea to app
            </h1>
            <h2 css={css`
                color: ${theme.colors.white};
                font-weight: 200;
                position: relative;
                font-family: 'Lato';
                font-size: 24px;
                z-index: 5;
                line-height: 1.5;
                margin: 0;
                max-width: ${rhythm(15)};
              `}>
            Helping you achieve the impact you were dreaming of
            </h2>
          </div>
          <div css={css`
          flex: 0.9;
          ${bpMaxSM} {
            display: none;
          }
          `}>
            <img src={HeroImage} css={css`
            margin-top: -64px;
            
            `}/>
          </div>
        </div>
      </Container>
      <div css={css`
        position: absolute;
        justify-content: center;
        align-items: center;
        left: 0;
        top: -1800px;
        overflow-x: hidden;
        overflow-y: hidden;
        display: flex;
        width: 100%;
        z-index: 1;
        ${bpMaxSM} {
          top: -1900px;
        }
      `}>
      <HeroBackground css={css`
          width: auto;
          flex-basis: auto;
          flex-grow: 0;
          flex-shrink: 0;
        `}/>
      </div>
      
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  )
}

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
  font-family: 'Lato';
`

const SubHeading = styled.h2`
  font-family: 'Cairo', 'sans-serif';
  font-weight: 600; 
  color: #153D8A; 
  font-size: 24px;
  margin: 0;
  margin-top: 16px;
  margin-bottom: 32px;
`

const Paragraph = styled.p`
  font-size: 18px;
  font-family: 'Lato';
  font-weight: 400;
`



export default function Index({ data: { site, allMdx }, location }) {
  const theme = useTheme()
  let backgroundMapping = {
    axova: `url(${AxovaBackground})`,
    pingcoin: `url(${PingcoinBackground})`
  }
  return (
    <Layout site={site} location={location}>
      <Hero />
      <Container
        css={css`
          padding-bottom: 0;
          ${bpMinLG} {
            padding-top: 0;
          }
        `}
      >
        

        <Title text="Portfolio" id="portfolio" css={css`
          ${bpMinLG} {
            margin-top: 0;
          }
        `}/>
        <PortfolioCard 
          title="Reducing phone support with a self-serve tracker app" 
          appName="My Axova"
          description="Axova AG wanted to reduce the amount of support phone calls that were coming into the office. We created an app that functions as a packet tracker for the solar installation process."
          industry="Energy Sector"
          formFactor="Mobile App"
          userType="Business to Client"
          tags={['Product Design', 'Product Development', 'Digitalization', 'Product Strategy']}
          borderColor="rgba(13, 94, 33, 0.05);"
          backgroundColor="#F7FCF7"
          titleColor="#0E6123"
          moreLinkColor="#648D6E"
          imageName="axova"
          backgroundUrl={backgroundMapping['axova']}
          />
          <PortfolioCard 
          title="Digitalising the ping test — an age-old method of catching counterfeit coins" 
          appName="Pingcoin"
          description="Experienced coin collectors are often able to determine if a coin is authentic gold or silver by listening to the sound it produces upon a gentle strike.
          Pingcoin brings this analog method into the digital realm, and in doing so enhances its accuracy and equips anyone with a smartphone with a counterfeit detection device."
          industry="Numismatics"
          formFactor="Mobile App"
          userType="Business to Consumer"
          tags={['Product Design', 'Product Development', 'Other']}
          borderColor="#F3E6FB"
          backgroundColor="#F8F5FA"
          titleColor="#493289"
          moreLinkColor="#726A8B"
          imageName="pingcoin"
          backgroundUrl={backgroundMapping['pingcoin']}
          />
      
        
        <Title text="What we do" id="whatwedo"/>
        <div css={
          css`
            display: flex; 
            font-weight: 400; 
            justify-content: flex-start;
            font-family: 'Lato';
          `}>
          <div css={css`
            flex-basis: 66%;
            padding-right: 16px;
            ${bpMaxSM} {
              flex-basis: 100%;
            }
          `}>
            <SubHeading>Helping you go from idea to a successful app</SubHeading>

            <Paragraph>If you're reading this then chances are you have an idea you want to turn into a software application.</Paragraph>

            <Paragraph>That's fantastic and we here at Pocket Revolutions are excited for you. </Paragraph>
              
            <Paragraph>Innovation starts with an idea and we want to help bring about a world where it's easier to turn those ideas into successful applications.</Paragraph>

            <SubHeading>The risks involved with creating apps</SubHeading>

            <Paragraph>That being said, going from idea to app, comes with certain challenges. We believe the most helpful way to think of those challenges is to think of them in terms of risks. </Paragraph>
            
            <Paragraph>Successful digital products tend to be Valuable, Viable, Feasible and Usable. The qualities are essential to success and, as such, also represent 4 distinct types of risks.</Paragraph>

            <Paragraph>Any product team developing a product assumes (implicitly or explicitly) it will somehow mitigate these four risks.</Paragraph>

            <Paragraph>If they fail, the product fails. It's that simple.</Paragraph>

            <SubHeading>High-Precision Thinking & Methodical De-Risking</SubHeading>

            <Paragraph>Our approach hinges on being being honest and explicit about the risks involved in the project. We do this by externalizing our thinking and identifying our assumptions. We make our risks explicit. </Paragraph>
            
            <Paragraph>After making the risks explicit, we try to methodically de-risk them by coming up with hypotheses and running experiments designed to validate or invalidate those hypotheses.</Paragraph>

            <Paragraph>This way we are able to methodically de-risk our product initiative. </Paragraph>
            
          </div>
          <div css={css`
            flex-basis: 33%;
            padding-left: 32px;
            ${bpMaxSM} {
              display: none;
            }
          `}>
            <SmallAsymmetricallyRoundedCard 
            title="How we work" 
            text="Making sure the right things get built (Lean) and making sure it gets built right (Agile)"
            color="#ff9900"
            />
            <SmallAsymmetricallyRoundedCard 
            title="Past work" 
            text="Let our portfolio of past client projects speak for itself"
            color="#DB00FF"
            />
            <SmallAsymmetricallyRoundedCard 
            title="What we offer" 
            text="Full-service digital transformation & specific competencies"
            color="#00C2FF"
            />
          </div>
        </div>



        <Title text="Our Services" id="services"/>
        <div css={css`
        `}>
          <ServiceGrid />

        </div>
        
        <section css={css`margin-bottom: 128px;`}>
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
                  fontFamily: 'Cairo',
                  marginBottom: rhythm(0.3),
                  marginTop: 0,
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
        </section>
      </Container>
      <ContactUs id="contact"/>
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
      filter: { frontmatter: { published: { ne: false }, contentType: { eq: "post" } } }
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
