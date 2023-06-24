import React from 'react'
import './Users.css'
import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {FaEdit} from "react-icons/fa"
import {AiTwotoneDelete} from "react-icons/ai"
import axios from "axios"
function Users() {


  let [users, setUsers] = useState([])
  let [show, setShow] = useState(false)
  let [userToEdit, setUserEdit] = useState({})
  //const [removedUsers, setRemovedUsers] = useState([]);
  let [error,setError]=useState("")
  let {
    register, handleSubmit, setValue, getValues, formState: { errors },
  } = useForm()
  

  const openModal = () => setShow(true)
  const closeModal = () => setShow(false)
  const getUsers = () => {
    axios
      .get("http://localhost:4000/users")
      .then((response) => {
        if (response.status === 200) {
          setUsers(response.data)
        }
      })
      .catch((err) => {
        if (err.response) {
          setError(err.message)
        }
        else if (err.request) {
          setError(err.message)
        }
        else {
          setError(err.message)
        }
      }
      )
  }


const editUser = (userObj) => {
  openModal()
  setUserEdit(userObj)
  setValue("name", userObj.name)
  setValue("username", userObj.username)
  setValue("email", userObj.email)
  setValue("dob", userObj.dob)
  setValue("image", userObj.image)
}



const saveModified = () => {
  closeModal()
  let modifiedUser = getValues()
  modifiedUser.id = userToEdit.id
  axios.put(`http://localhost:4000/users/${modifiedUser.id}`, modifiedUser)
    .then(response => {
      if (response.status === 200) {
        getUsers()
      }
    })
    .catch(err=>{})
}

const deleteUser=(user)=>{
  axios
      .delete(`http://localhost:4000/users/${user}`)
      .then((response) => {
        if (response.status === 200) {
          getUsers();
        }
      })
      .catch((err) => {});

  
}

useEffect(() => {
  getUsers()
}, [])


return (
  <div className='use'>
    <h1 className='d' style={{paddingTop:"50px"}}>List of Users</h1>
    <div className='d1' >{

      users.map(userObj => <div key={userObj.id}>
        <Card className='d2' style={{ width: '21rem' }} >
          <Card.Img className='d3' variant="top"
            src={userObj.image} height={300} />
          <Card.Body>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Name : {userObj.name}</ListGroup.Item>
            <ListGroup.Item>Username : {userObj.username}</ListGroup.Item>
            <ListGroup.Item>Email : {userObj.email}</ListGroup.Item>
            <ListGroup.Item>Date Of Birth : {userObj.dob}</ListGroup.Item>
            <ListGroup.Item>
              <button className='btn btn-warning float-start' onClick={() => editUser(userObj)}><FaEdit style={{marginBottom:"6px"}}/> Edit</button>
              <button className='btn btn-danger float-end' onClick={() => deleteUser(userObj.id)}> <AiTwotoneDelete style={{marginBottom:"6px"}}/> Delete</button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>)
    }
    </div>
    <Modal show={show} onHide={closeModal} backdrop="static" centered className='modal' >
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <form onSubmit={handleSubmit(saveModified)}>
          <InputGroup className='mb-4' hasValidation>
            <InputGroup.Text>Username</InputGroup.Text>
            <Form.Control type="text" required id='username' {...register("username")} />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
          <InputGroup className='mb-4' hasValidation>
            <InputGroup.Text>Name</InputGroup.Text>
            <Form.Control type="text" required id='name' {...register("name")} />

          </InputGroup>
          <InputGroup hasValidation className='mb-4'>
            <InputGroup.Text>Email</InputGroup.Text>
            <Form.Control type="email" required id='email' {...register("email")} autoComplete='off' />

          </InputGroup>
          <InputGroup hasValidation className='mb-4'>
            <InputGroup.Text>Date-Of-Birth</InputGroup.Text>
            <Form.Control type="date" required id='loaction' {...register("dob")} />
          </InputGroup>
          <InputGroup hasValidation className='mb-4'>
            <InputGroup.Text>Image</InputGroup.Text>
            <Form.Control type="url" required id='image' {...register("image")} />
          </InputGroup>
        </form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary">Close</Button>
        <Button variant="primary" onClick={saveModified}>Save changes</Button>
      </Modal.Footer>
    </Modal>

  </div>
)
}
export default Users
