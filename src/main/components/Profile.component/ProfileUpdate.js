import React from 'react'
import commingsoon from 'src/assets/img/commingsoon.jpg'
import styled from 'styled-components'

export default function ProfileUpdate() {
  return (
    <Wrapper>
      <img src={commingsoon} alt="comming soon" />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  img {
    width: 100%;
    margin: 1rem auto;
    border-radius: var(--radius);
  }
`
