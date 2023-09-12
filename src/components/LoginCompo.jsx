import React, { useState } from 'react';
import LoginStyle from '../styles/LoginStyle.scss'
import { Outlet, Link } from "react-router-dom"
import { login } from '../api/login'
import { useNavigate } from 'react-router-dom'; 
import Modal from './Modal';


const LoginCompo = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [email, setEmail] = useState(""); // email 상태 변수 추가
  const [password, setPassword] = useState(""); 
  const [modalOpen, setModalOpen] = useState(false);

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
      if(response.status !== 200) {
        console.log("?!!!");
        setModalOpen(true);
      }
      else{
        if(response.data.writerId == null){
          localStorage.setItem("userId", response.data.userId);
        }else{
          localStorage.setItem("writerId", response.data.writerId);
        }
        localStorage.setItem("infoId", response.data.userInfo.infoId);
        localStorage.setItem("nickname", response.data.userInfo.nickname);
        localStorage.setItem("name", response.data.userInfo.name);
        navigate('/intro'); 
      }
    } catch (e) {
      console.error(e); // handle error
    }
  };

  return ( 
    <div class="login">
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}/>
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
          {/* pattern=".{6,}"  */}
          <input id="login-password" value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="Password" required/> 
          <svg>
            <use href="#svg-check" />
          </svg>
        </div>
        <button type="submit" class="button">
          <div class="arrow-wrapper">
            <span class="arrow"></span>
          </div>
          <p class="button-text">SIGN IN</p>
        </button>
        </form>
        <Link to={"/register"}>
        <button type="submit" class="button">
          <div class="arrow-wrapper">
            <span class="arrow"></span>
          </div>
          <p class="button-text">REGISTER</p>
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