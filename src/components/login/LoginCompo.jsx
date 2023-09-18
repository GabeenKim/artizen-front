import React, { useState } from 'react';
import LoginStyle2 from './LoginStyle2.scss'
import { Outlet, Link } from "react-router-dom"
import { login } from '../../api/login'
import { useNavigate } from 'react-router-dom'; 

const LoginCompo = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState(""); // email 상태 변수 추가
  const [password, setPassword] = useState(""); 

  const navigate = useNavigate(); 

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setActive(true);
    }, 2200);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await login(email, password);
      navigate('/intro'); 
    } catch (e) {
      console.error(e); // handle error
    }
  };

  return ( 
    <div class="login">
      <div class="form">
        <h2>Hello User</h2>
        <form onSubmit={handleSubmit}>
        <div class="form-field">
          <label for="login-mail"><i class="fa fa-user"></i></label>
          <input id="login-mail" type="text" value={email} onChange={e => setEmail(e.target.value)} name="mail" placeholder="E-Mail" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
          <svg>
            <use href="#svg-check" />
          </svg>
        </div>
        <div class="form-field">
          <label for="login-password"><i class="fa fa-lock"></i></label>
          <input id="login-password" value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="Password" pattern=".{6,}" required/>
          <svg>
            <use href="#svg-check" />
          </svg>
        </div>
        <button type="submit" class="button">
          <div class="arrow-wrapper">
            <span class="arrow"></span>
          </div>
          <p class="button-text">로그인</p>
        </button>
        </form>
        <Link to={"/register"}>
        <button type="submit" class="button">
          <div class="arrow-wrapper">
            <span class="arrow"></span>
          </div>
          <p class="button-text">회원가입</p>
        </button>
        </Link>
      </div>
      <div class="finished">
        <svg>
          <use href="#svg-check" />
        </svg>
      </div>
    </div>
    
  );
};

export default LoginCompo;