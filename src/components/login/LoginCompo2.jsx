import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom"
import { login } from '../../api/login'
import { useNavigate } from 'react-router-dom'; 

const LoginCompo2 = () => {
  const [email, setEmail] = useState(""); // email 상태 변수 추가
  const [password, setPassword] = useState(""); 
  const [modalOpen, setModalOpen] = useState(false);

  const navigate = useNavigate(); 


  const handleSubmit = async (event) => {
      event.preventDefault();

      {/* 로그인 */}
      login({ email: email, password: password })
      .then((res) => {
          if (res.status !== 200){
            setModalOpen(true);
          }
          else{
            return res.json();
          }
      })
      .then((res)=>{

          if(res.writerId == null){
            localStorage.setItem("userId", res.userId);
          }else{
            localStorage.setItem("writerId", res.writerId);
          }
          localStorage.setItem("infoId", res.userInfo.infoId);
          localStorage.setItem("nickname", res.userInfo.nickname);
          localStorage.setItem("name", res.userInfo.name);

          if(localStorage.getItem('writerId')){
            navigate('/intro'); 
          }else{
          fetch(
            `http://localhost:9999/account/showUser/${localStorage.getItem('infoId')}`
          )
            .then((response) => response.json())
            .then((result) => {
              console.log(result.character);
              if(result.character == null){
                navigate('/investTest'); 
              }else{
                navigate('/intro'); 
              }
            });
          }
      })
      .catch((e)=>{
        console.log(e);
      }); 

  };

  return ( 
    
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <img style={{ height:"150px", width: '300px', marginBottom: '20px' }} src="/img/title.png" />

            <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
                <input 
                style={{width:"300px", height:"40px", marginTop:"10px", marginBottom:"20",
                border: "1px solid #F5F5F5", boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)'}}
                id="login-mail" type="text" value={email} onChange={e => setEmail(e.target.value)} name="mail" placeholder="E-Mail" required />
            </div>
    
            <div style={{ marginBottom: '10px' }}>
                <input 
                style={{width:"300px", height:"40px", marginTop:"10px", marginBottom:"20",
                border: "1px solid #F5F5F5", boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)'}}
                id="login-password" value={password} onChange={e => setPassword(e.target.value)} type="password" name="password" placeholder="Password" required />
            </div>
    
            <div style={{ marginBottom: '10px', marginTop:"20px", marginLeft:"100px"}}>
                <button style={{ width:"110px", height:"35px", fontSize: '18px', background:"#A5C9FF", color:"white",
                border: "1px solid #A5C9FF", boxShadow: '0px 0px 3px #A5C9FF', borderRadius: "5px"}}
                type="submit" >
                    로그인
                </button>
            </div>
            </form>
            <div>
            <Link to={"/register"} style={{ textDecoration: 'underline', color: '#A5C9FF', cursor: 'pointer', marginBottom: '-10px', marginTop:"30px" }}>
                회원가입
            </Link>
            </div>
        </div>
    
    
  );
};

export default LoginCompo2;