import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styled from 'styled-components'
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom'
import AxiosWrapper from '../../utils/AxiosWrapper'
import { createUser } from '../../services/User'


const Nav = styled.div`
  display: flex;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`

const Container = styled.div`
  background: #fff; 
  max-width: 50%;
  width: 50%; 
  margin: 0 auto;
`
const Field = styled.div`
  border-radius: 4px;
  input {
    width: 96%;
    min-height:50px;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    margin: 12px 0;
    padding: 12px;
  }
  
`

const SubmitBtn = styled.button`
  color: #fff;
  background-color: #71b406;
  border-radius: 4px;   
  padding:12px 12px;  
  border: 1px solid #71b406;
  width:100%;
  font-size:18px;
  cursor: pointer;
  transition: ease-in-out 0.2s;
  &:hover {
    background: #71b406;
    border-color: #71b406;
  }
`
const Error = styled.div`
  width: 100%;
  color: rgb(255, 80, 44);
  border: 1px solid rgb(255, 80, 44);
  border-radius: 4px;
  margin-top: 8px;
  text-align:center;
  padding: 4px;
`
const ReviewHeadline = styled.div`
  font-size:20px;
  padding: 15px 0;
  font-weight: bold;
  color: #fff;
`
const NewUser = (props) => {
  const [user, setUser] = useState({full_name: '', gender:'', birth_date:'', image_url:""})
  const history = useHistory()

  const handleChange = (e) => {
    // console.log("name:", e.target.name, "value:", e.target.value)
    setUser(Object.assign({}, user, {[e.target.name]: e.target.value}))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await createUser({...user})
    if (res) {
      history.push(`/users/${res.data.id}`)
    }
  }

  return(
      <Container>
      <Nav>
        <h1>New User</h1>
        <Link to={"/"}>Return to home </Link>
      </Nav>
      <form onSubmit={handleSubmit}>
        <ReviewHeadline>Have An Experience with ? Add Your Review!</ReviewHeadline>
        <Field>
          <label>Full Name</label>
          <input onChange={handleChange} type="text" name="full_name" required placeholder="Full Name" value={user.full_name}/>
        </Field>
        <Field>
          <label>Gender</label>
          <input onChange={handleChange} type="text" name="gender" required placeholder="Gender" value={user.gender}/>
        </Field>
        <Field>
          <label>Birth Day</label>
          <input onChange={handleChange} type="date" name="birth_date" required placeholder="Birth date" value={user.birth_date}/>
        </Field>
        <Field>
        <label>Image Profile URL</label>
          <input onChange={handleChange} type="text" name="image_url" required placeholder="Image URL for profile" value={user.image_url}/>
        </Field>
        <SubmitBtn type="Submit">Create User</SubmitBtn>
      </form>
      </Container>
  )
}

export default NewUser