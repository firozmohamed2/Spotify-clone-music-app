import React from 'react'
import { loginUrl } from '../spotify'
import './Login.css'



function Login() {
  return (
    <div className='login'>
         {/* {Spotify logo} */}
      {/* login with spotify button*/}
      <img src='https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Green.png'></img>
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>

    </div>
  )
}

export default Login