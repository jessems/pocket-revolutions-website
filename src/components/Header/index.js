import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { jsx, css } from '@emotion/core'
import { useTheme } from '../Theming'
import { bpMaxSM } from '../../lib/breakpoints'
import MobileMenu from './MobileMenu'
import Links from './Links'
import Container from '../Container'

const Header = ({ siteTitle }) => {
  const theme = useTheme()
  return (
    <header
      css={css`
        width: 100%;
        flex-shrink: 0;
        background: none;
        padding: 20px 0;
        background-image: linear-gradient(to right, #C7017F, #153D8A)
      `}
    >
      <Container noVerticalPadding>
        <nav
          css={css`
            width: 100%;
            display: flex;
            justify-content: center;
            ${bpMaxSM} {
              justify-content: space-between;
            }
            align-items: center;
          `}
        >
          <div
            css={css`
              font-size: 16px;
              line-height: 1.25;
              display: flex;
              width: 100%;
              align-items: space-between;
              a {
                text-decoration: none;
                color: ${theme.colors.white};
              }
              .active {
                // display: none;
                // visibility: hidden;
              }
            `}
          >
            <div
              css={css`
                display: flex;
                width: 100%;
                align-items: center;
                justify-content: space-between;
                
                ${bpMaxSM} {
                  display: none;
                }
              `}
            >
              <Links />
            </div>
            <MobileMenu>
              <Links />
            </MobileMenu>
          </div>
        </nav>
      </Container>
    </header>
  )
}

const ConnectedHeader = props => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Header siteTitle={data.site.siteMetadata.title} {...props} />
    )}
  />
)

export default ConnectedHeader
