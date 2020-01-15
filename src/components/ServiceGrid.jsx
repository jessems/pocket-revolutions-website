import React, { Component } from 'react'
import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import DigitalTransformationAuditIcon from './assets/digital_transformation_audit_icon.svg'
import UserResearchIcon from './assets/user_research_icon.svg'
import ProductStrategyIcon from './assets/product_strategy_icon.svg'
import InnovationSessionsIcon from './assets/innovation_sessions_icon.svg'
import DesignAndDevelopmentIcon from './assets/design_and_development_icon.svg'
import { getDefaultLibFileName } from 'typescript'

const ServiceGridRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const ServiceGridCol = styled.div`
  min-height: 124px;
  width: 31%;
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
  margin-top: 0px;
`

const ServiceGridColDescription = styled.p`
  text-align: left;
  color: #868686;
  font-size: 14px;
  line-height: 180%;
  letter-spacing: 0.04em;
`

class ServiceGrid extends Component {
  render() {
    return (
      <div>
        <ServiceGridRow>
          <ServiceGridCol>
            <DigitalTransformationAuditIcon />
            <ServiceGridColTitle>Digitalation Audit</ServiceGridColTitle>
            <ServiceGridColDescription>
              Uncover how you can leverage technology to streamline your
              business and gain a competitive advantage?
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
        </ServiceGridRow>
        <ServiceGridRow>
          <ServiceGridCol>
            <DesignAndDevelopmentIcon />
            <ServiceGridColTitle>Design & Development</ServiceGridColTitle>
            <ServiceGridColDescription>
              Building high quality software that looks and feels amazing.
            </ServiceGridColDescription>
          </ServiceGridCol>
          <ServiceGridCol>
            <ProductStrategyIcon />
            <ServiceGridColTitle>Product Strategy</ServiceGridColTitle>
            <ServiceGridColDescription>
              Making sure you and your team and running in the same direction,
              and making sure it's the right one.
            </ServiceGridColDescription>
          </ServiceGridCol>
        </ServiceGridRow>
      </div>
    )
  }
}

export default ServiceGrid
