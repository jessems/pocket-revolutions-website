import React, { Component } from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/core'
import iphone from './iphone.png'
import IndustryIcon from './assets/business-24px.svg'
import FormFactorIcon from './assets/phonelink-24px.svg'
import UserTypeIcon from './assets/supervised_user_circle-24px.svg'

class PortfolioCard extends Component {
  tagsColorMapping = {
    'Product Design': { color: '#7f0909', 'background-color': '#ffc8c8' },
    'Product Development': { color: '#091d7f', 'background-color': '#c8d1ff' },
    Other: 'brown',
  }
  render() {
    return (
      <div
        css={css`
          width: 960px;
          margin: 64px auto;
          border: 1px solid ${this.props.borderColor};
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
          background: ${this.props.backgroundColor};
          border-radius: 20px;
          padding: 20px;
          padding-top: 64px;
          padding-left: 64px;
          display: flex;
          flex-direction: row;
          }
        `}
      >
        <div
          css={css`
            flex: 50%;
          `}
        >
          <h2
            css={css`
              font-size: 24px;
              font-weight: 500;
              color: ${this.props.titleColor};
              margin: 0;
              line-height: 28px;
            `}
          >
            {this.props.title}
          </h2>
          <span
            css={css`
              text-transform: uppercase;
              font-size: 12px;
              font-weight: 500;
              color: #969696;
            `}
          >
            My Axova
          </span>
          <p
            css={css`
              margin-top: 16px;
              font-size: 18px;
              font-weight: 300;
              color: #353535;
            `}
          >
            {this.props.description}
          </p>
          <div>
            <Link
              to="/axova"
              css={css`
                font-weight: bold;
                color: ${this.props.moreLinkColor};
                border-bottom: solid 2px ${this.props.moreLinkColor};
                text-decoration: none;
                &:hover {
                  text-decoration: none;
                  color: #c7017f;
                  border-bottom: solid 2px #c7017f;
                }
              `}
            >
              Full case study
            </Link>
          </div>
        </div>
        <div
          css={css`
            flex: 20%;
            padding-left: 16px;
            padding-right: 16px;
          `}
        >
          <ul
            css={css`
              padding-top: 40px;
              list-style: none;
            `}
          >
            <li
              css={css`
                font-size: 14px;
                font-weight: 500;
                color: rgba(123, 123, 123, 0.9);
                display: flex;
                align-items: flex-start;
              `}
            >
              <IndustryIcon
                css={css`
                  margin-right: 16px;
                  fill: rgba(123, 123, 123, 0.9);
                `}
              />
              Energy Sector
            </li>
            <li
              css={css`
                font-size: 14px;
                font-weight: 500;
                color: rgba(123, 123, 123, 0.9);
                display: flex;
                align-items: flex-start;
              `}
            >
              <FormFactorIcon
                css={css`
                  margin-right: 16px;
                  fill: rgba(123, 123, 123, 0.9);
                `}
              />
              {this.props.formFactor}
            </li>
            <li
              css={css`
                font-size: 14px;
                font-weight: 500;
                color: rgba(123, 123, 123, 0.9);
                display: flex;
                align-items: flex-start;
              `}
            >
              <UserTypeIcon
                css={css`
                  margin-right: 16px;
                  fill: rgba(123, 123, 123, 0.9);
                `}
              />
              {this.props.userType}
            </li>
          </ul>
          <ul
            css={css`
              padding-top: 40px;
              list-style: none;
            `}
          >
            {this.props.tags.map(value => {
              return (
                <li
                  css={css`
                    // background-color: #ffc8c8;
                    background-color: ${this.tagsColorMapping[value][
                      `background-color`
                    ]};
                    border-radius: 16px;
                    font-size: 10px;
                    color: ${this.tagsColorMapping[value][`color`]};
                    font-weight: 500;
                    display: inline-block;
                    padding-left: 8px;
                    padding-right: 8px;
                    padding-top: 2px;
                    padding-bottom: 2px;
                    margin-bottom: 0;
                  `}
                >
                  {value}
                </li>
              )
            })}
          </ul>
        </div>
        <div
          css={css`
            flex: 30%;
            justify-content: space-between;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: row;
              justify-content: space-between;
            `}
          >
            <img
              src={iphone}
              css={css`
                margin-left: 20px;
                margin-right: -20px;
                width: 250px;
              `}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioCard
