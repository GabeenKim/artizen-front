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



// 리뷰 불러오기
export async function getContentReviews(contentId){
  const response = await fetch(`http://localhost:9999/review/showContentReview/${contentId}`, {
      method: "GET", // *GET, POST, PUT, DELETE 등
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer", 
  });
  return response; // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

//리뷰 작성하기
//http://127.0.0.1:9999/review/addReview
export async function addContentReviews(data){
  const response = await fetch(`http://localhost:9999/review/addReview`, {
      method: "POST", // *GET, POST, PUT, DELETE 등
      mode: "cors", 
      cache: "no-cache", 
      credentials: "same-origin", 
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer", 
      body: JSON.stringify(data),
  });
  return response; // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

export async function showAllFundingContents() {
  // 옵션 기본 값은 *로 강조
  const response = await fetch('http://localhost:9999/poster/showAllSupportContents', {
    method: "GET", // *GET, POST, PUT, DELETE 등
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
  });
  return response; // JSON 응답을 네이티브 JavaScript 객체로 파싱
}

//주목할만한 컨텐츠 (>> 추천 컨텐츠에도 사용)
//http://127.0.0.1:9999/poster/showNotableContents
export async function getNotableContents(){ //펀딩
  const response = await fetch(`http://127.0.0.1:9999/poster/showNotableContents1`, {
    method: "GET", // *GET, POST, PUT, DELETE 등
    mode: "cors", 
    cache: "no-cache", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer", 
  });
  return response;
}

//주목할만한 컨텐츠 (>> 추천 컨텐츠에도 사용)
//http://127.0.0.1:9999/poster/showNotableContents
export async function getNotableContents2(){ //후원
  const response = await fetch(`http://127.0.0.1:9999/poster/showNotableContents2`, {
    method: "GET", // *GET, POST, PUT, DELETE 등
    mode: "cors", 
    cache: "no-cache", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer", 
  });
  return response;
}

//완료된 펀딩 목록
export async function getEndedContents(){
  const response = await fetch(`http://127.0.0.1:9999/poster/showEndedContents`, {
    method: "GET", // *GET, POST, PUT, DELETE 등
    mode: "cors", 
    cache: "no-cache", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer", 
  });
  return response;
}

export async function getFundingContentsByUserId(userId){
  const response = await fetch(`http://127.0.0.1:9999/funding/showFunding/` + userId, {
    method: "GET", // *GET, POST, PUT, DELETE 등
    mode: "cors", 
    cache: "no-cache", 
    credentials: "same-origin", 
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer", 
  });
  return response;
}