import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'
import PocketRevolutionsLogo from '../assets/PocketRevolutions_NEG.svg'

export default () => {
  const theme = useTheme()
  return (
    <React.Fragment>
      <Link to="/services" activeClassName="active" aria-label="View blog page">
        Services
      </Link>
      <Link to="/portfolio" activeClassName="active" aria-label="View blog page">
        Portfolio
      </Link>
      <Link to="/methods" activeClassName="active" aria-label="View blog page">
        Methods
      </Link>
      <Link to="/" aria-label="Home">
        <PocketRevolutionsLogo css={css`
        width: 144px;
        & path {
          fill: #EC96DC!important; 
        }
        & polygon {
          fill: #EC96DC!important; 
        }
        & rect {
          fill: #EC96DC!important; 
        }
        margin-left: 32px; 
        margin-right: 32px
        `}/>
      </Link> 
      <Link to="/learn" activeClassName="active" aria-label="View blog page">
        Learn
      </Link>
      <Link to="/about" activeClassName="active" aria-label="View blog page">
        About
      </Link>
      <Link to="/contact" activeClassName="active" aria-label="View blog page">
        Contact
      </Link>

      {/* <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      /> */}
    </React.Fragment>
  )
}
