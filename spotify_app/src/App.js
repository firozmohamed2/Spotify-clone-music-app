
import './App.css';
import Login from './Components/Login';
import React,{useEffect, useState} from 'react';
import { getTokenFromUrl } from './spotify';

function App() {

  const [token,setToken] = useState(null);



    //runs code based on given condition 
    useEffect(() => {
      //code
      const hash= getTokenFromUrl();
     // window.location.hash=""; 
      //this will clear access token from search bar so that it is not visible to user
      const _token=hash.access_token;

      if(_token){
        setToken(_token);
      }

      console.log(_token);
    
      
    });
    

  return (
    <div className="app">
      {/* {Spotify logo} */}
      {/* login with spotify */}
      {/* all of this inside a login component */}
      {token?<h1>I am logged in</h1>:<Login />}
      

    </div>
  );
}

export default App;
