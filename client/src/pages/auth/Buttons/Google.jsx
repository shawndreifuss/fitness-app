import React, { useState} from 'react'
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";



const Google = () => {


//  Getting google response and decoding it
const [credentialResponseDecoded, setCredentialResponseDecoded] =useState(null);

//  Handle Google OAuth Response
const handleCredentialResponse = async (credentialResponseDecoded) => {
if (credentialResponseDecoded === null) {
  return;
} else {
  const data = credentialResponseDecoded;
  const user = {
    email: data.email,
    password: data.sub,
  };
  try {
    //  Send data to the server
    const sendData = await axios.post(
      "http://localhost:3001/api/auth/oauth",
      {
        ...user,
      },
      {
        withCredentials: true,
      }
    );
    const { success } = sendData.data;
    if (success) {
        console.log("success");
      window.location.href = "/";
    } else {
      console.log("error1");
    }
  } catch (error) {
    console.log("error2");
  }
}
};



  return (
    <GoogleLogin
                        onSuccess={(credentialResponse) => {
                          const decoded = jwtDecode(
                            credentialResponse.credential
                          );
                          setCredentialResponseDecoded(decoded);
                          handleCredentialResponse(decoded);
                        }}
                        onError={() => {
                          console.log("Login Failed");
                        }}
                        className="bg-white active:bg-blueGray-50 text-blueGray-700 font-normal px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150"
                        type="button"
                      >
                        <img
                          alt="..."
                          className="w-5 mr-1"
                          src="../../assets/google.svg"
                        />
                        Google
                      </GoogleLogin>
  )
}

export default Google