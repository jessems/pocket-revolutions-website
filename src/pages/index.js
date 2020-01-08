import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from 'components/Layout'
import Link from 'components/Link'
import { useTheme } from 'components/Theming'
import Container from 'components/Container'
import PortfolioCard from 'components/PortfolioCard'
import { rhythm } from '../lib/typography'

const Hero = () => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        min-height: 300px;
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
        <div css={css`
          color: rgba(255, 255, 255, 0.5);
          max-width: ${rhythm(15)};
        `}>Product design & development consultancy</div>
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
          Helping you build apps that make an impact
        </h1>
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

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
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
        
        <h1 css={css`
          font-size: 30px;
          font-weight: 300;
          display: inline-block;
          &:after {
            content: ""; 
            display: block; 
            float: left;
            margin: 0 auto;
            width: 50%; 
            padding-top: 8px; 
            border-bottom: 3px solid #C7017F; 
        }
        `}> Portfolio </h1>
        <PortfolioCard 
          title="Replacing customer support with a package-tracker-style status app" 
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
          />
          <PortfolioCard 
          title="Digitalising an age-old cold testing method" 
          appName="Pingcoin"
          description="Many experienced coin collectors are able to strike a coin to make it emit a sound and determine if the coin is authentic or not.
          By digitalising this process, Pingcoin  enhances the accuracy of the method and brings its ability to anyone with a smartphone."
          industry="Numismatics"
          formFactor="Mobile App"
          userType="Business to Consumer"
          tags={['Product Design', 'Product Development', 'Other']}
          borderColor="#F3E6FB"
          backgroundColor="#F8F5FA"
          titleColor="#493289"
          moreLinkColor="#726A8B"
          />
        {/* {allMdx.edges
          .filter(obj => {
            console.log(obj.node)
            return obj.node.frontmatter.contentType === 'portfolioPiece' ? obj : null
            
          }
          )
          .map(({ node: post }) => (
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
        ))} */}
        
        {/* <Link to="/blog" aria-label="Visit blog page">
          View all articles
        </Link> */}
        <hr />
        <h1>What we do</h1>
        <p>If you want to build an app, you typically have several options. If you've got an in-house team you can develop the app internally. If you don't, you can work with an external agency.</p>
        
        <p>We are primarily interested in helping you achieve your business outcomes. If software is the right tool for that, then by all means, let's build it.
        But sometimes software isn't the right tool. </p>

        <p>Apps can be wonderful, sexy and even life-changing. Who doesn't rely on the magic of an app like Google Maps these days.</p>

        <p>But software development is a risky endeavour for any business.</p>

        <p>
        <ul>
              <li>There is the financial risk involved in financing the development of the application –– a price tag that often remains unknown until late in the project.</li>
              <li>There is the market risk for B2C and B2B apps –– whether or not they will get traction and prove valuable to users</li>
              <li>There are business risks –– whether the app will be able to sustain itself</li>
              <li> There are technical risks -- </li>
              <li>There are usability risks</li>
        </ul>
        
        
       
        </p>
        
        <p>It should come as not suprise that to successfully navigate these risks you need a partner that understands these domains.</p>




        <h1>Our Services</h1>
        Bla
        <h1>Our Partners</h1>
        Bla
        <h1> Posts </h1>
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
      # limit: 3
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
