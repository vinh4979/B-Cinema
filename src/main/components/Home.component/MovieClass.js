import React, { Fragment } from 'react'
import styled from 'styled-components'

export default function MovieClass({ checkClass }) {
  return (
    <Fragment>
      {checkClass ? <Wrapper>P</Wrapper> : <WrapperC16>C16</WrapperC16>}
    </Fragment>
  )
}

const Wrapper = styled.span`
  padding: 0 0.75rem;
  font-size: 1rem;
  border-radius: var(--radius);
  background-color: #00ac4d;
  color: var(--color-white);
  margin-right: 0.5rem;
`

const WrapperC16 = styled.span`
  padding: 0 0.75rem;
  font-size: 1rem;
  border-radius: var(--radius);
  background-color: #fb4226;
  color: var(--color-white);
  margin-right: 0.5rem;
`
