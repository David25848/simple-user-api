import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding:50px 50px 10px 50px;
  
  h1 {
    font-size:42px;
  }
`

const Subheader = styled.p`
  font-weight:300;
  font-size:26px;
`

const Header = () => {
  return(
    <Wrapper>
    <h1>List of Users</h1>
    </Wrapper>
  )
}

export default Header