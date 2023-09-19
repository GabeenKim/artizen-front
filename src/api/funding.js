import axios from 'axios';

{/* 손익분기점 달성 펀딩 목록 :: UserFundingPage.jsx */}
export function successFunding(setFundings, userId) {
    fetch('http://localhost:9999/funding/showEndedFunding/' + userId, {
        method : "GET"   
    })
    .then(res=>res.json())
    .then(res=>{
    try{
        const currentFunding = [];
        res.map((item) => currentFunding.push(item));
        let newArray = [...currentFunding];
        setFundings(newArray);
    }catch(err){
        console.log(err);
    }
    });
}

{/* 프로젝트에 투자한 유저 목록 :: AdminDivideList.jsx */}
export function getFundingUserByContentId(contentId,setItems){
  fetch('http://127.0.0.1:9999/funding/showFundingUser/' + contentId, {
        method : "GET"   
    })
    .then(res=>res.json())
    .then(res=>{
    try{
        const currentFunding = [];
        res.map((item) => currentFunding.push(item));
        let newArray = [...currentFunding];
        setItems(newArray);
    }catch(err){
        console.log(err);
    }
    });
}

export async function okDivide(contentId) {
  // 옵션 기본 값은 *로 강조
    await fetch('http://localhost:9999/funding/satisfied/' + contentId, {
    method: "put", // *GET, POST, PUT, DELETE 등
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
}

{/* 환불 :: DivideCompo.jsx*/}
export async function failDivide(contentId) {
  // 옵션 기본 값은 *로 강조
    await fetch('http://localhost:9999/funding/notSatisfied/' + contentId, {
    method: "put", // *GET, POST, PUT, DELETE 등
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
}