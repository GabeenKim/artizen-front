import axios from 'axios';

{/* 입금 :: UserInfo.jsx */}
export function deposit(addMoney) {
  return axios.patch('http://localhost:9999/account/updateAccount', {
    infoId: localStorage.getItem("infoId"),
    amount: addMoney,
  });
}

{/* 출금 :: UserInfo.jsx */}
export function withdraw(minusMoney) {
  return axios.patch(`http://localhost:9999/account/updateAccount`, { 
    infoId: localStorage.getItem("infoId"),
    amount: -minusMoney,
  });
}

{/* 회원 정보 수정 :: UserInfo.jsx */}
export function updateUser(password) {
  return axios.patch(`http://localhost:9999/account/updateUser`, { 
    infoId: localStorage.getItem("infoId"),
    name: localStorage.getItem("name"),
    password: password
  });
}

{/* 계좌 등록 :: UserInfo.jsx */}
export function addAccount(account, bank) {
  return axios.post(`http://localhost:9999/account/addAccount`, { 
    infoId: localStorage.getItem("infoId"),
    accounts: account,
    bank: bank
  });
}

{/* 닉네임 변경 :: UserInfo.jsx */}
export function updateNickName(nickname) {
  return axios.patch(`http://localhost:9999/account/updateUserNickname`, { 
    infoId: localStorage.getItem("infoId"),
    nickname: nickname,
  });
}

{/* 선물 보내기 :: TicketItem.jsx */}
export function sendTicket(data) {
  
fetch('http://localhost:9999/ticket/sendTicket', {
  method: "PATCH", // *GET, POST, PUT, DELETE 등
  mode: "cors", // no-cors, *cors, same-origin
  cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
  credentials: "same-origin", // include, *same-origin, omit
  headers: {
    "Content-Type": "application/json",
  },
  redirect: "follow", // manual, *follow, error
  referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  body: JSON.stringify(data), // body의 데이터 유형은 반드시 "Content-Type" 헤더와 일치해야 함
  });
}

