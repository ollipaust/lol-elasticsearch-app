import React from 'react'
import { ReactiveBase } from '@appbaseio/reactivesearch'
import { theme } from '../../constants/theme'
import styled from 'styled-components'

const ReactiveBaseComponent = ({ className, children }) => {
  return (
    <ReactiveBase
      app="lolapp1"
      credentials="DYB5nDoNE:2c99c10e-eb50-445b-8aa2-833dd770b3bc"
      type="lolapp1"
      className={className}
      theme={theme}
    >
      {children}
    </ReactiveBase>
  )
}
const Styled_ReactiveBaseComponent = styled(ReactiveBaseComponent).withConfig({
  displayName: 'search-app',
})`
  padding-top: calc(50px + 2rem);
`
const ReactiveBaseWrapper = ({ children }) => {
  return <Styled_ReactiveBaseComponent>{children}</Styled_ReactiveBaseComponent>
}

export default ReactiveBaseWrapper
