import axios from "axios";
axios.defaults.withCredentials = true;

export function writerRanking(){
    return axios.get(`http://127.0.0.1:9999/account/getWriterRanking`, 
    { withCredentials: true }
    )
}

export async function writerRankingFetch() {
    // 옵션 기본 값은 *로 강조
    const response = await fetch('http://localhost:9999/account/getWriterRanking', {
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


export function writerContents(id){
    return axios.get(`http://localhost:9999/poster/showMyContents`, {
        params:{
            writerId: id
        }
    }, 
    { withCredentials: true }
    )
}

export async function getWriterInfo(writerId){
    const response = await fetch(`http://localhost:9999/account/getWriterInfo/${writerId}`, {
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

export async function getWriterReivew(writerId){
    const response = await fetch(`http://localhost:9999/review/showReview/${writerId}`, {
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

export async function getWriterContents(writerId){
    const response = await fetch(`http://localhost:9999/poster/showMyContents1/${writerId}`, {
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

export async function getWriterContents2(writerId){
  const response = await fetch(`http://localhost:9999/poster/showMyContents2/${writerId}`, {
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