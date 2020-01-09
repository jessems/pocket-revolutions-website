import React from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'
import PocketRevolutionsLogo from '../assets/PocketRevolutions_NEG.svg'

export default () => {
  const theme = useTheme()
  // const StyledLinked = styled(props => <Link {...props} />)`
  //   opacity: 0.9;
  // `
  const StyledLink = styled(Link)`
    opacity: 0.9;
  `
  return (
    <React.Fragment>
      <StyledLink to="/services" activeClassName="active" aria-label="View blog page" css={css`margin-left: 0; margin-right: 16px;`}>
        Services
      </StyledLink>
      <StyledLink to="/portfolio" activeClassName="active" aria-label="View blog page" css={css`margin-left: 16px; margin-right: 16px;`}>
        Portfolio
      </StyledLink>
      <StyledLink to="/methods" activeClassName="active" aria-label="View blog page" css={css`margin-left: 16px; margin-right: 16px;`}>
        Methods
      </StyledLink>
      <StyledLink to="/" aria-label="Home">
        <PocketRevolutionsLogo css={css`
        width: 144px;
        & path {
          fill: #EC96DC!important; 
        }
        & polygon {
          fill: #EC96DC!important; 
        }
        & rect.cls-2 {
          fill: #EC96DC!important; 
        }
        margin-left: 32px; 
        margin-right: 32px
        `}/>
      </StyledLink> 
      <StyledLink to="/learn" activeClassName="active" aria-label="View blog page" css={css`margin-left: 16px; margin-right: 16px;`}>
        Learn
      </StyledLink>
      <StyledLink to="/about" activeClassName="active" aria-label="View blog page" css={css`margin-left: 16px; margin-right: 16px;`}>
        About
      </StyledLink>
      <StyledLink to="/contact" activeClassName="active" aria-label="View blog page" css={css`margin-left: 16px; margin-right: 16px;`}>
        Contact
      </StyledLink>

      {/* <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      /> */}
    </React.Fragment>
  )
}
