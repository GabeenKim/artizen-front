import React, { useEffect, useState } from 'react';
import LoginStyle2 from './LoginStyle2.scss'
import { Outlet, Link } from "react-router-dom"
import { register } from '../../api/login' // register import
import { useNavigate } from 'react-router-dom'; 
import styled from 'styled-components';

const RegisterCompo = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [name, setName] = useState(""); // name 상태 변수 추가
  const [nickname, setNickname] = useState(""); // nickname 상태 변수 추가
  const [password, setPassword] = useState(""); 
  const [email, setEmail] = useState(""); 
  const [identity, setIdentity] = useState(1);

  const [button2, setButton2] = useState(false);
  const [button1, setButton1] = useState(true);
  const navigate = useNavigate(); 

  const handleButton1 = () => {
    setButton1(true);
    setButton2(false);
    setIdentity(1);
  }
  const handleButton2 = () => {
    setButton2(true);
    setButton1(false);
    setIdentity(2);

  }
  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setActive(true);
    }, 2200);
  };

  // 회원가입 요청을 처리하는 함수
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await register(name, nickname, password,email); 
      navigate('/login'); 
    } catch (e) {
      console.error(e); // handle error
    }
};

const Div = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
`

const Button = styled.button`

  background: ${({isclicked})=>isclicked ? `#f5f5fa`:`linear-gradient(90deg, #04DFBD, #00FCD1)`};
  color: ${({isclicked})=>isclicked ? `black`:`white`};

  width: 100%;
  position: relative;
  cursor: pointer;
  box-sizing: border-box;
  margin: 0;
  border: 0;
  outline: none;
  
  transition: all 0.45s ease-in-out;
        position: relative;
        margin: 0;
        width: 100%;
        height: 80px;
        right: 0;
        float: right;
        box-shadow: 0 3px 20px rgba($primary, 0.4);
  `

return (
   <div className="login">
     <div className="form">
     <div style={{display: "flex", justifyContent: "center", alignItems:"end", height:"100%" }}>
      <Div>
      <Button type="submit" class="button" isclicked={button2} onClick={handleButton2}>
          <div class="arrow-wrapper">
            <span class="arrow"></span>
          </div>
          <p class="button-text">작가님</p>
        </Button>
        <Button type="submit" class="button" isclicked={button1} onClick={handleButton1}>
          <div class="arrow-wrapper">
            <span class="arrow"></span>
          </div>
          <p class="button-text">후원자님</p>
        </Button>
          </Div>
       </div>
       <form onSubmit={handleSubmit}>
         {/* name input field */}
         <div className="form-field">
           {/* 생략... */}
           <input id="register-name" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required/>
           {/* 생략... */}
         </div>

         {/* nickname input field */}
         <div className="form-field">
           {/* 생략... */}
           <input id="register-nickname" type="text" value={nickname} onChange={e => setNickname(e.target.value)} placeholder="Nickname" required/>
           {/* 생략... */}
         </div>

         {/* password input field */}
         <div className="form-field">
          {/* 생략... */}  
          <input id='register-password' value={password} onChange={e=>setPassword(e.target.value)} type='password' placeholder='Password' pattern='.{6}' required/>
          {/* 생략... */}  
        </div>

        {/* email input field */}
        <div className="form-field">
          {/* 생략... */}  
          <input id='register-email' value={email} onChange={e=>setEmail(e.target.value)} type='email' placeholder='Email' pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$" required/>
          {/* 생략... */}  
        </div>

        <button type="submit" class="button">
          <div class="arrow-wrapper">
            <span class="arrow"></span>
          </div>
          <p class="button-text">회원가입</p>
        </button>
       </form>
     </div>
   </div>
 );
};

export default RegisterCompo;

