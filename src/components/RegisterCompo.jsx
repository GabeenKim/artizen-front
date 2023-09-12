import React, { useState } from 'react';
import LoginStyle from '../styles/LoginStyle.scss';
import { Outlet, Link } from 'react-router-dom';
import { register } from '../api/login'; // register import
import { useNavigate } from 'react-router-dom';

const RegisterCompo = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [name, setName] = useState(''); // name 상태 변수 추가
  const [nickname, setNickname] = useState(''); // nickname 상태 변수 추가
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const navigate = useNavigate();

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
      await register(name, nickname, password, email);
      navigate('/login');
    } catch (e) {
      console.error(e); // handle error
    }
  };

  return (
    <div className="login">
      <div className="form">
        <h2>Hello User</h2>
        <form onSubmit={handleSubmit}>
          {/* name input field */}
          <div className="form-field">
            {/* 생략... */}
            <input
              id="register-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
            {/* 생략... */}
          </div>

          {/* nickname input field */}
          <div className="form-field">
            {/* 생략... */}
            <input
              id="register-nickname"
              type="text"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              placeholder="Nickname"
              required
            />
            {/* 생략... */}
          </div>

          {/* password input field */}
          <div className="form-field">
            {/* 생략... */}
            <input
              id="register-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              pattern=".{6}"
              required
            />
            {/* 생략... */}
          </div>

          {/* email input field */}
          <div className="form-field">
            {/* 생략... */}
            <input
              id="register-email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
            />
            {/* 생략... */}
          </div>

          <button type="submit" class="button">
            <div class="arrow-wrapper">
              <span class="arrow"></span>
            </div>
            <p class="button-text">REGISTER</p>
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterCompo;
