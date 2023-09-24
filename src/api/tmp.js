export async function addSupportContents(data){
    const response = await fetch(`http://localhost:9999/poster/addSupportContents`, {
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

export async function addFundingContents(data){
  const response = await fetch(`http://localhost:9999/poster/addFundingContents`, {
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