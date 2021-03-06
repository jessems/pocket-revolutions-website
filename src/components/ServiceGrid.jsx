import React, { Component } from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import DigitalTransformationAuditIcon from './assets/digital_transformation_audit_icon.svg'
import UserResearchIcon from './assets/user_research_icon.svg'
import ProductStrategyIcon from './assets/product_strategy_icon.svg'
import ProductDiscoveryIcon from './assets/product_discovery_icon.svg'
import InnovationSessionsIcon from './assets/innovation_sessions_icon.svg'
import DesignAndDevelopmentIcon from './assets/design_and_development_icon.svg'
import { bpMaxSM, bpMaxXS } from '../lib/breakpoints'

const ServiceGridRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  margin-bottom: 16px;
`

const ServiceGridCol = styled.div`
  min-height: 124px;
  //   width: 31%;
  flex-basis: 31%;

  ${bpMaxSM} {
    flex-basis: 44%;
  }
  ${bpMaxXS} {
    flex-basis: 100%;
  }
`

const ServiceGridColTitle = styled.h2`
  text-align: left;
  font-size: 18px;
  font-weight: 500;
  letter-spacing: 0.04em;
  color: #153d8a;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 32x;
  margin-top: 16px;
  font-family: Cairo;
  font-weight: 600;
`

const ServiceGridColDescription = styled.p`
  text-align: left;
  color: #868686;
  font-size: 14px;
  line-height: 180%;
  letter-spacing: 0.04em;
  font-family: 'Lato';
`

class ServiceGrid extends Component {
  render() {
    return (
      <div css={css``}>
        <ServiceGridRow>
          <ServiceGridCol>
            <ProductStrategyIcon />
            <ServiceGridColTitle>Product Strategy</ServiceGridColTitle>
            <ServiceGridColDescription>
              Making sure you and your team and running in the same direction,
              and making sure it's the right one.
            </ServiceGridColDescription>
          </ServiceGridCol>

          <ServiceGridCol>
            <UserResearchIcon />
            <ServiceGridColTitle>User Research</ServiceGridColTitle>
            <ServiceGridColDescription>
              Ensure that users love what you want to build, without having to
              second guess your own interpretations of user interviews.
            </ServiceGridColDescription>
          </ServiceGridCol>
          <ServiceGridCol>
            <InnovationSessionsIcon />
            <ServiceGridColTitle>Innovation Sessions</ServiceGridColTitle>
            <ServiceGridColDescription>
              Invite a second brain (us) into your company to help you and your
              team generate and evaluate ideas.
            </ServiceGridColDescription>
          </ServiceGridCol>
          <ServiceGridCol>
            <DesignAndDevelopmentIcon />
            <ServiceGridColTitle>Design & Development</ServiceGridColTitle>
            <ServiceGridColDescription>
              Building high quality software that looks and feels amazing.
            </ServiceGridColDescription>
          </ServiceGridCol>
          <ServiceGridCol>
            <ProductDiscoveryIcon />
            <ServiceGridColTitle>Product Discovery</ServiceGridColTitle>
            <ServiceGridColDescription>
              Finding new opportunities for successful products.
            </ServiceGridColDescription>
          </ServiceGridCol>
          <ServiceGridCol>
            <DigitalTransformationAuditIcon />
            <ServiceGridColTitle>Digitalization</ServiceGridColTitle>
            <ServiceGridColDescription>
              Uncover how you can leverage technology to streamline your
              business and gain a competitive advantage?
            </ServiceGridColDescription>
          </ServiceGridCol>
        </ServiceGridRow>
      </div>
    )
  }
}

export default ServiceGrid
