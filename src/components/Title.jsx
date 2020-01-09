import React, { Component } from 'react'
import { css } from 'styled-components'

class Title extends Component {
  render() {
    return (
      <div>
        <h1
          css={css`
            font-size: 30px;
            font-weight: 300;
            display: inline-block;
            margin-bottom: 64px;
            &:after {
              content: '';
              display: block;
              float: left;
              margin: 0 auto;
              width: 50%;
              padding-top: 8px;
              border-bottom: 3px solid #c7017f;
            }
          `}
        >
          {this.props.text}
        </h1>
      </div>
    )
  }
}

export default Title
