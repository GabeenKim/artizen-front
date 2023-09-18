import axios from 'axios';

{
  /* 손익분기점 달성 펀딩 목록 :: UserFundingPage.jsx */
}
export function successFunding(setFundings, userId) {
  fetch('http://localhost:9999/funding/showEndedFunding/' + userId, {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((res) => {
      try {
        const currentFunding = [];
        res.map((item) => currentFunding.push(item));
        let newArray = [...currentFunding];
        setFundings(newArray);
      } catch (err) {
        console.log(err);
      }
    });
}

{
  /* 목표 미달성 펀딩 달성 목록 :: UserFundingPage.jsx */
}
export function failFunding(name, nickname, password, email) {
  return axios.post(`http://localhost:9999/account/registerUser`, {
    name: name,
    nickname: nickname,
    password: password,
    email: email,
  });
}
