import React, { useState } from 'react';
import LoginStyle2 from './LoginStyle2.scss'
import { Outlet, Link } from "react-router-dom"
import { register } from '../../api/login' // register import
import { useNavigate } from 'react-router-dom'; 

const RegisterCompo = () => {
  const [loading, setLoading] = useState(false);
  const [active, setActive] = useState(false);
  const [name, setName] = useState(""); // name 상태 변수 추가
  const [nickname, setNickname] = useState(""); // nickname 상태 변수 추가
  const [password, setPassword] = useState(""); 
  const [email, setEmail] = useState(""); 

  const navigate = useNavigate(); 

  const handleClickAuthorButton= () => {
    console.log("작가님 버튼 클릭");
    // 작가님 버튼 클릭 시 처리 로직 추가...
  };

   const handleClickSponsorButton= () => {
    console.log("후원자님 버튼 클릭");
    // 후원자님 버튼 클릭 시 처리 로직 추가...
   };

// ... (기존 코드 생략) ...

return (
   <div className="login">
     <div className="form">
       {/* Hello User 대신 작가님과 후원자님 선택용 버튼 두 개로 변경 */}
       <div>
         <button onClick={handleClickAuthorButton}>작가님이세요?</button>
         <button onClick={handleClickSponsorButton}>후원자이세요?</button>
       </div>

       {/* ... (기존 폼 코드) ... */}
     </div>
   </div>
 );
};

export default RegisterCompo;