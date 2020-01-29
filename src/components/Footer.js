import React from 'react'
import { css } from '@emotion/core'
import { bpMaxSM, bpMaxMD, bpMaxXS } from '../lib/breakpoints'
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
          
        }
      `}
    >
      
      <div
        id="footer-content"
        css={css`
          display: flex;
          flex-flow: row wrap;
          align-items: flex-start;
          justify-content: space-evenly;
          ${bpMaxMD} {
            justify-content: space-between;
          }
          ${bpMaxXS} {
            justify-content: space-evenly;
          }
        `}
      >
        <div
        id="impressum"
          css={css`
            order: 1;
            font-size: 90%;
            opacity: 0.7;
            min-width: 14rem;
            ${bpMaxMD} {
              order: 1;
            }
            ${bpMaxSM} {
              order: 1;
            }
            ${bpMaxXS} {
              order: 2;
            }
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
        <div css={css`
          font-size: 12px; 
          margin-bottom: 16px;
        `}>
          From idea to app
        </div>
        <div>
          <ul css={css`list-style: none;`}>
            <li>Hardstrasse 42</li>
            <li>4133 Pratteln</li>
            <li>Switzerland</li>
            <li>+41 (0) 61 826 11 00</li>
          </ul>
        </div>
          
          <Twitter />
          <LinkedIn />
          <div css={css`padding-top: 16px;`}>
            {`Pocket Revolutions AG \u00A9 ${new Date().getFullYear()}`}
          </div>
        </div>
        <div css={css`
          min-width: 14rem;
          text-align: center;
          order: 2;
          ${bpMaxMD} {
            text-align: center;
            order: 2;
          }
          ${bpMaxSM} {
            text-align: center;
            order: 2;
          }
          ${bpMaxXS} {
            order: 1;
          }
        `}>
          <h4 css={css`margin-top: 0; font-size: 20px; color: #737373;`}>Quick Links</h4>
          <ul css={css`list-style: none; font-size: 16.2px; font-weight: 600;`}>
            <li><Link to="/#services">Services</Link></li>
            <li><Link to="/#portfolio">Portfolio</Link></li>
            <li><Link to="/#services">Methods</Link></li>
            <li><Link to="/learn">Learn</Link></li>
            <li><Link to="/#whatwedo">About</Link></li>
            <li><Link to="/#contact">Contact</Link></li>
          </ul>
        </div>
        <div css={css`
          min-width: 14rem;
          text-align: center;
          order: 3;
          ${bpMaxSM} {
            display: none;
          }
        `}>
          <h4 css={css`margin-top: 0; font-size: 20px; color: #737373;`}>Our services</h4>
          <ul css={css`list-style: none; font-size: 16.2px;`}>
            <li><Link>Design & Development</Link></li>
            <li><Link>User Research</Link></li>
            <li><Link>Product Strategy</Link></li>
            <li><Link>Product Design</Link></li>
            <li><Link>Software Development</Link></li>
          </ul>
          <hr css={css`margin: 16px`}/>
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
