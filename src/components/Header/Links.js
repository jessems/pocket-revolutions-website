import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
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
    position: relative;
    padding-bottom: 8px;

    &:before,
    &:after {
        content: '';
        position: absolute;
        bottom: 2px;
        left: 0; right: 0;
        height: 2px;
        background-color: #EC96DC;
    }
    &:before {
        opacity: 0;
        transform: translateY(-8px);
        transition: transform 0s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s;
    }
    &:after {
        opacity: 0;
        transform: translateY(8px/2);
        transition: transform .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .2s;
    }
    &:hover,
    &:focus {
        color: #EC96DC;
        text-decoration: none!important;
        &:before,
        &:after {
            opacity: 1;
            transform: translateY(0);
        }
        &:before {
            transition: transform .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity .2s;
        }
        &:after {
            transition: transform 0s .2s cubic-bezier(0.175, 0.885, 0.320, 1.275), opacity 0s .2s;
        }
    }
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
      <Link to="/" aria-label="Home">
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
      </Link> 
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
