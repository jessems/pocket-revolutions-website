import React, { Component } from 'react'
import { css } from '@emotion/core'
import axovaDisplay from './axova_display.png'
import pingcoinDisplay from './pingcoin_display.png'
import IndustryIcon from './assets/business-24px.svg'
import FormFactorIcon from './assets/phonelink-24px.svg'
import UserTypeIcon from './assets/supervised_user_circle-24px.svg'
import { bpMaxSM } from '../lib/breakpoints'

class PortfolioCard extends Component {
  tagsColorMapping = {
    'Product Discovery': { color: '#7F0909', 'background-color': '#FFC8C8' }, // Red
    'Product Design': { color: '#091D7F', 'background-color': '#C8D1FF' }, // Blue
    'Product Development': { color: '#091d7f', 'background-color': '#D8F4DB' }, // Green
    'Product Strategy': { color: '#9A3174', 'background-color': '#FFD4F6' }, // Pink
    'User Research': { color: '#5F3A04', 'background-color': '#EFF4B1' }, // Yellow
    Digitalisation: { color: '#5F3A04', 'background-color': '#FFE6C1' }, // Orange
    'To be defined': { color: '#044E5F', 'background-color': '#C1F4FF' }, // Baby blue
    'To be defined 2': { color: '#3C045F', 'background-color': '#E8C1FF' }, // Baby blue
    Other: 'brown',
  }
  render() {
    let images = {
      axova: axovaDisplay,
      pingcoin: pingcoinDisplay,
    }
    return (
      <div
        css={css`
          max-width: 960px;
          margin-bottom: 64px;
          margin-right: auto;
          margin-left: auto;
          border: 1px solid ${this.props.borderColor};
          box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1);
          background: ${this.props.backgroundColor};
          background-size: contain;
          background-image: ${this.props.backgroundUrl};
          border-radius: 20px;
          padding-right: 20px;
          padding-top: 64px;
          padding-left: 64px;
          padding-bottom: 64px;
          display: flex;
          flex-direction: row;
          ${bpMaxSM} {
            padding-right: 64px;
            width: auto;
            flex-direction: column;
          }
          }
        `}
      >
        <div
          css={css`
            flex: 44%;
            padding-right: 32px;
            ${bpMaxSM} {
              padding-right: 0px;
            }
          `}
        >
          <h2
            css={css`
              font-family: 'Cairo', 'sans-serif';
              font-size: 24px;
              font-weight: 600;
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
            {this.props.appName}
          </span>
          <p
            css={css`
              margin-top: 16px;
              font-size: 18px;
              font-weight: 300;
              color: #171717;
              font-family: 'Lato';
            `}
          >
            {this.props.description}
          </p>
          <div
            css={css`
              ${bpMaxSM} {
                text-align: center;
              }
            `}
          >
            {/* <Link
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
            </Link> */}
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
              ${bpMaxSM} {
                display: table;
                margin: 0 auto;
              }
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
              {this.props.industry}
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
              ${bpMaxSM} {
                display: table;
                margin: 0 auto;
              }
            `}
          >
            {this.props.tags.map(value => {
              return (
                <li
                  css={css`
                    background-color: ${this.tagsColorMapping[value][
                      `background-color`
                    ]};
                    border-radius: 16px;
                    opacity: 0.8;
                    font-size: 10px;
                    color: ${this.tagsColorMapping[value][`color`]};
                    font-weight: 500;
                    display: inline-block;
                    padding-left: 8px;
                    padding-right: 8px;
                    padding-top: 2px;
                    padding-bottom: 2px;
                    margin-bottom: 0;
                    margin-right: 8px;
                    white-space: nowrap;
                  `}
                  key={value}
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
              height: 100%;
              flex-direction: column;
              justify-content: center;
              // align-items: center;
            `}
          >
            <img
              src={images[this.props.imageName]}
              css={css`
                margin-left: 40px;
                margin-right: -40px;
                margin-bottom: 0;
                width: 600px;
                transform: scale(2.5);
                ${bpMaxSM} {
                  margin-left: 0;
                  margin-right: 0;
                  margin-bottom: -32px;
                  margin-top: 16px;
                  transform: scale(1);
                }
              `}
              alt=""
            />
          </div>
        </div>
      </div>
    )
  }
}

export default PortfolioCard
