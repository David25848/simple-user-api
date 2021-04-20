import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 50px 100px 50px 0px;
  font-size:30px;
  img {
    margin-right: 10px;
    height: 60px;
    width: 60px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
    margin-bottom: -8px;
  }
`


const Header = (props) => {
console.log("Hola" + props.attributes + props.full_name)
  return (
    <Wrapper>
      <h1><img src="" height="50" width="50" alt="hola" /> "hola"</h1>
    </Wrapper> 
  )
}

export default Header