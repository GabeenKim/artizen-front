import React, { useEffect, useState } from 'react';
import { Outlet, Link } from "react-router-dom"
import { register } from '../../api/login' // register import
import { useNavigate } from 'react-router-dom'; 

const RegisterCompo2 = () => {
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

  // 회원가입 요청을 처리하는 함수
  const handleSubmit = async (event) => {
    event.preventDefault();
    register({name:name, nickname:nickname, password:password, email:email, identity:identity})
    .then((res)=>{
        console.log(res);
      if(res.status == 200){
        navigate('/login');
      }
    })
    .catch((e)=>console.error(e))
  };




return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
            <img style={{ height:"130px", width: '300px', marginBottom: '20px', marginTop:"-10px" }} src="/img/title.png" />

            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop:'20px', marginBottom: '10px', width: '300px' }}>
        <button type="button" class="button" onClick={handleButton2} 
        style={{ background: button2 ? '#A5C9FF' : 'white', marginLeft:'0px', marginRight:'10px', width: '47%', height: '45px', fontSize: '18px',
        border: button2 ? '1px solid #A5C9FF' : "1px solid #F5F5F5", boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)', borderRadius: "3px" }}>
            <p style={{color: button2 ? 'white' : 'grey', marginTop:'10px'}}>작가님</p>
        </button>
        <button type="button" class="button" onClick={handleButton1} 
        style={{background: button1 ? '#A5C9FF' : 'white', marginLeft:'0px', width: '47%', height: '45px', fontSize: '18px',
        border: button1 ? '1px solid #A5C9FF' : "1px solid #F5F5F5", boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)', borderRadius: "3px" }}>
            <p style={{color: button1 ? 'white' : 'grey', marginTop:'10px'}}>후원자님</p>
        </button>
        </div>

            <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: '10px' }}>
                <input 
                style={{width:"300px", height:"40px", marginTop:"10px", marginBottom:"20",
                border: "1px solid #F5F5F5", boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)'}}
                id="login-mail" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Name" required />
            </div>
    
            <div style={{ marginBottom: '10px' }}>
                <input 
                style={{width:"300px", height:"40px", marginTop:"10px", marginBottom:"20",
                border: "1px solid #F5F5F5", boxShadow: '0px 0px 3px rgba(0, 0, 0, 0.5)'}}
                id="login-password" value={nickname} onChange={e => setNickname(e.target.value)} type="Nickname" placeholder="Nickname" required />
            </div>

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
    
            <div style={{ marginBottom: '10px', marginTop:"30px", marginLeft:"100px"}}>
                <button style={{ width:"110px", height:"35px", fontSize: '18px', background:"#A5C9FF", color:"white",
                border: "1px solid #A5C9FF", boxShadow: '0px 0px 3px #A5C9FF', borderRadius: "5px"}}
                type="submit" >
                    회원가입
                </button>
            </div>
            </form>
        </div>
 );
};

export default RegisterCompo2;