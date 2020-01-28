import React, { Component } from 'react'
import { css } from '@emotion/core'
import { bpMaxSM } from '../lib/breakpoints'

class SmallAsymmetricallyRoundedCard extends Component {
  render() {
    return (
      <div
        id="roundedCard"
        css={css`
          border-left: 3px solid ${this.props.color};
          padding: 24px 32px 24px 32px;
          border-radius: 0px 20px 20px 0px;
          margin: 32px 0 32px 0;
          position: relative;
          z-index: 1;
          &:before {
            position: absolute;
            border-radius: 0px 20px 20px 0px;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            content: '';
            box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
            z-index: -5;
          }
        `}
      >
        <span
          css={css`
            font-weight: 600;
            color: #4f4f4f;
            line-height: 30px;
            display: block;
            margin-bottom: 8px;
          `}
        >
          {this.props.title}
        </span>
        <p
          css={css`
            margin: 0;
            font-size: 16px;
            line-height: 24px;
            color: #737373;
            font-weight: 300;
            font-family: 'Open Sans';
          `}
        >
          {this.props.text}
        </p>
      </div>
    )
  }
}

export default SmallAsymmetricallyRoundedCard
