import React from 'react'
import { Link } from 'gatsby'
import { useTheme } from '../Theming'
import ThemeToggler from './ThemeToggler'

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
      <Link to="/learn" activeClassName="active" aria-label="View blog page">
        Learn
      </Link>
      <Link to="/about" activeClassName="active" aria-label="View blog page">
        About
      </Link>
      <Link to="/contact" activeClassName="active" aria-label="View blog page">
        Contact
      </Link>

      <ThemeToggler
        css={{}}
        toggleTheme={theme.toggleTheme}
        themeName={theme.themeName}
      />
    </React.Fragment>
  )
}
