import React from "react";
import {GoogleLogin} from '@react-oauth/google'
import { useNavigate } from "react-router-dom";
import shareVideo from "../assets/share.mp4";
import logo from "../assets/logowhite.png";
import jwt_decode from 'jwt-decode';

import { client } from "../client";


function Login() {
  const navigate = useNavigate();

  const responseGoogle = (response) => {
    localStorage.setItem('user', JSON.stringify(response.profileObj));
  
    console.log(response);
  
    var decodedHeader = jwt_decode(response.credential);
    
    const {name, sub, picture } = decodedHeader;
    const doc = {
      _id: sub,
      _type: 'user',
      userName: name,
      image: picture
    }

    client.createIfNotExists(doc).then(() => {
      navigate('/', {replace:true})
    })
    
    console.log(doc)
  }

  return (
    <div className="flex justify-start items-center flex-col h-screen">
      <div className="relative w-full h-full">
        <video
          src={shareVideo}
          type="video/mp4"
          loop
          controls={false}
          muted
          autoPlay
          className="w-full h-full object-cover"
        />
        <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
          <div className="p-5">
            <img src={logo} width="130px" alt="logo" />

          </div>
          <div className="shadow-2xl">
          <GoogleLogin
            client_id={process.env.REACT_APP_GOOGLE_API_TOKEN}

            render ={(renderProps) =>(
              <button
              type="button"
              className="bg-mainColor flex justify-center items-center p-3 rounded-lg cursor-pointer outline-none"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}>
              </button>
            )}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
