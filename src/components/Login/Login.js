import React from 'react'
import "../Login/Login.css"
import {BiLogIn} from "react-icons/bi"
import { FaFacebook} from "react-icons/fa"
import {ImGoogle3,ImTwitter} from "react-icons/im"

function Login() {
  return (
    <div className='abc'>
    <div className='hiiii mx-auto'>
    <div className="container hello ">
    
      <h1>Welcome Back ...</h1>
      <form>
        <input type="email" placeholder="Enter Email" required />
        <input type="password" placeholder="Provide Password" required />
        <p className='small mb-4 pb-lg-2'><a className='text-white-50 f' href='#'>Forgot Password?</a></p>
        <button type="submit"><BiLogIn/>  Login</button>
      </form>
      <div className="social-login">
        <p>Or log in with:</p>
        <a href="#" className="facebook"><FaFacebook style={{marginBottom:"5px",fontSize:"20px"}}/> Facebook</a>
        <a href="#" className="twitter"><ImTwitter style={{marginBottom:"5px",fontSize:"20px"}}/> Twitter</a>
        <a href="#" className="google"><ImGoogle3 style={{marginBottom:"5px",fontSize:"20px"}}/> Google</a>
      </div>
    </div>
    
    </div>
    </div>

  )
}

export default Login

