import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
`

const Column = styled.div`
  background: #fff; 
  max-width: 30%;
  width: 30%; 
  height: 50vh;
  margin: 0 auto;
  overflow-x: scroll;
  overflow-y: scroll; 
  overflow: scroll;
  border: 1px solid #efefef;
  background: #fff;
  &::-webkit-scrollbar {
    display: none;
  }
`
const UserLogo = styled.div`
  height: auto;
  text-align: center;
  margin-top: 2rem;
  img {
    height: 100px;
    width: 100px;
    border: 1px solid rgba(0,0,0,0.1);
    border-radius: 100%;
  }
`
const Main = styled.div`
  text-align: center;
`
const Details = styled.div`
  padding: 5% 20%;
`
const LinkWrapper = styled.div`
  margin: 30px 0 20px 0;
  height:50px;
  text-align: center;
  a {
    color: #fff;
    background-color: #71b406;
    border-radius: 4px;
    padding: 10px 50px;
    cursor: pointer;
    border-radius: 3px;
    border: 1px solid #71b406;
    text-align: center;
    line-height: 20px;
    min-height: 40px;
    margin: 7px;
    font-weight: 600;
    text-decoration: none;
    width: 100%;
    transition: ease-in-out 0.1s;
    &:hover{
      border-color: #619a07;
      background: #619a07;
    }
  }
`

const User = (props) => {
  const [user, setUser] = useState({})

  useEffect(()=> {
    const id = props.match.params.id

    axios.get(`/api/v1/users/${id}`)
    .then( (resp) => {
        console.log(resp.data.full_name);
        setUser(resp.data)
    })
    .catch( data => console.log('Error', data) )
  }, [])
  console.log(user)


  return(
    <Wrapper>
      { 
        <Fragment>
          <Column>
            <UserLogo>
                <img src={user.image_url} alt={user.full_name}/>
            </UserLogo>
            <Main>
            <h1>{user.full_name}</h1>
            </Main>
            <Details>
                <ul>
                  <li>
                    Gender: {user.gender}
                  </li>
                  <li>
                    Birth date: {user.birth_date}
                  </li>
                </ul>
            </Details>
          </Column>
          <LinkWrapper>
            <Link to={"/"}>View all users</Link>
          </LinkWrapper>
        </Fragment>
      }
    </Wrapper>
  )
}

export default User