import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'
import SubscribeForm from './Forms/Subscribe'
import { Twitter, LinkedIn } from './Social'
import Container from './Container'
import PocketRevolutionsLogo from './assets/PocketRevolutions_NEG.svg'
import Link from 'components/Link'

const Footer = ({ author, noSubscribeForm }) => (
  <footer css={css`
    background: #F8F4F9;
  `}>
    <Container
      css={css`
        padding-top: 32px;
        ${bpMaxSM} {
          padding-top: 0;
        }
      `}
    >
      
      <div
        css={css`
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
        `}
      >
        <div
          css={css`
            font-size: 90%;
            opacity: 0.7;
          `}
        >
        <PocketRevolutionsLogo css={css`
        margin-left: -8px;
        width: 144px;
        & path {
          fill: #7F399D!important; 
        }
        & polygon {
          fill: #7F399D!important; 
        }
        & rect.cls-2 {
          fill: #7F399D!important; 
        }
        `}/>
        <div css={css`font-size: 12px; margin-bottom: 16px;`}>
          From idea to app
        </div>
        <div>
          <ul css={css`list-style: none;`}>
            <li>Hardstrasse 42</li>
            <li>4133 Pratteln</li>
            <li>Switzerland</li>
            <li>+41 (0) 76 253 71 30</li>
          </ul>
        </div>
          
          <Twitter />
          <LinkedIn />
          <div css={css`padding-top: 16px;`}>
            {`Pocket Revolutions AG \u00A9 ${new Date().getFullYear()}`}
          </div>
        </div>
        <div>
          <ul css={css`list-style: none; font-size: 16.2px;`}>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/methods">Methods</Link></li>
            <li><Link to="/methods">Learn</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/blog">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <ul css={css`list-style: none; font-size: 16.2px;`}>
            <li><Link>Design & Development</Link></li>
            <li><Link>User Research</Link></li>
            <li><Link>Product Strategy</Link></li>
            <li><Link>Product Design</Link></li>
            <li><Link>Software Development</Link></li>
          </ul>
          <ul css={css`list-style: none; font-size: 16.2px;`}>
            <li><Link>Terms & Conditions</Link></li>
            <li><Link>Impressum</Link></li>
          </ul>
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer
