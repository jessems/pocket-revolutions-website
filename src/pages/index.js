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
        `}>Digital products done right</div>
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
          Your users will love what you build next
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
        `}> Portfolio </h1>
        <PortfolioCard 
          title="Replacing customer support with a package-tracker-style status app" 
          appName="My Axova"
          description="Axova AG wanted to reduce the amount of support phone calls that were coming into the office. We created an app that functions as a packet tracker for the solar installation process."
          industry="Energy Sector"
          formFactor="Mobile App"
          userType="Business to Client"
          tags={['Product Design', 'Product Development', 'Other']}
          />
          <PortfolioCard 
          title="Digitalising an age-old cold testing method" 
          appName="Pingcoin"
          description="Axova AG wanted to reduce the amount of support phone calls that were coming into the office. We created an app that functions as a packet tracker for the solar installation process."
          industry="Energy Sector"
          formFactor="Mobile App"
          userType="Business to Consumer"
          tags={['Product Design', 'Product Development', 'Other']}
          />
        {allMdx.edges
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
        ))}
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
        <Link to="/blog" aria-label="Visit blog page">
          View all articles
        </Link>
        <hr />
        <h1>Digital Revolutions as a Service </h1>
        Bla
        <h1>Our Services</h1>
        Bla
        <h1>Our Partners</h1>
        Bla
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
