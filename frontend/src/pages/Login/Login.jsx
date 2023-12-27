import React from 'react';
import loginBanner from "../../assets/Images/login-banner.png";
import LoginForm from './LoginForm';

function Login() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-1/2 h-full flex items-center justify-center">
        <LoginForm />
      </div>
      <div className="w-1/2 h-full overflow-hidden">
        <img src={loginBanner} className="w-full h-screen object-cover" alt="Banner" />
      </div>
    </div>
  );
}

export default Login;