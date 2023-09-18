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
export function sendTicket(sendUserId, receiveUserId, ticketId) {
  return axios.patch(`http://localhost:9999/ticket/sendTicket`, { 
    sendUserId: sendUserId,
    receiveUserId: receiveUserId,
    ticketId: ticketId
  });
}
