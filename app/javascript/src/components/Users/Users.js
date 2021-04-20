import React, { useState, useEffect,Fragment } from 'react'
import axios from 'axios'
import User from './User'
import Header from './Header'
// import airlinesQuery from '../../queries/airlinesQuery'
import styled from 'styled-components'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const Home = styled.div`
  text-align:center;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
  > div {
    background-color: #fff;
    border-radius: 5px;
    padding: 20px;
  }
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

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('/api/v1/users.json')
    .then( resp => setUsers(resp.data))
    .catch( data => console.log('error', data))
  }, [])
  // console.log(users)

  // const list = users.map(item=>{
  // return(<li key={item.full_name}>{item.full_name}</li>)
  // })
  const grid = users.map( (user, index) => {
    const { id, full_name, image_url, gender, birth_date } = user

    return (
      <User 
        key={index}
        id={id}
        full_name={full_name}
        image_url={image_url}
        gender={gender}
        birth_date={birth_date}
      />
    )
  })

  return (
    <Home>
      <Header/>
      <Grid>{grid}</Grid>
      <LinkWrapper>
        <Link to={"/new"}>New User</Link>
      </LinkWrapper>
    </Home>
  )
}

export default Users