import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {useForm} from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "./AddUser.css";
function AddUser() {
  let {register,handleSubmit,formState:{errors}}=useForm()
  const navigate = useNavigate();
  let formSubmit=(userObj)=>{
    fetch("http://localhost:4000/users",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(userObj)
    })
    .then(
      response=>response.json())
      
    .then(message=>console.log("message is ",message),
    navigate("/users")
    )
    .catch(err=>console.log(err))
  }
  return (
    <div className='add'>
    <div className='  hii' >
    <p className='display-4 text-center' style={{paddingTop:"20px"}}>Create User</p>
    <br></br>
    <form  onSubmit={handleSubmit(formSubmit)}>
    <InputGroup className='mb-4' hasValidation>
      <InputGroup.Text>Username</InputGroup.Text>
      <Form.Control type="text" required  id='username' {...register("username")} />
      <Form.Control.Feedback type="invalid">
        Please choose a username.
      </Form.Control.Feedback>
    </InputGroup>
    <InputGroup className='mb-4' hasValidation>
      <InputGroup.Text>Name</InputGroup.Text>
      <Form.Control type="text" required  id='name' {...register("name")} />
      <br></br>
    </InputGroup>
    <InputGroup hasValidation className='mb-4'>
      <InputGroup.Text>Email</InputGroup.Text>
      <Form.Control type="email" required  id='email' {...register("email")} autoComplete='off'/>
      <br></br>
    </InputGroup>
    <InputGroup hasValidation className='mb-4'>
      <InputGroup.Text>Date-Of-Birth</InputGroup.Text>
      <Form.Control type="date" required  id='dob' {...register("dob")} />
      <br></br>
    </InputGroup>
    <InputGroup hasValidation disabled className='mb-4'>
      <InputGroup.Text>Image</InputGroup.Text>
      <Form.Control type="url" required  id='image'  {...register("image")}/>    
      <br></br>
    </InputGroup>
    <div className='text-center'>
    <Button  type="submit">Create New User</Button>
    </div>
    </form>
    </div>
    </div>
  )
}

export default AddUser
