import React, { useState, useEffect, useRef } from 'react';

function Detail({contentId}) {
  const [data, setData] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null); // 선택된 버튼의 상태

  // 참조 생성
  const introRef = useRef(null);
  const purposeRef = useRef(null);
  const timeRef = useRef(null);
  const investRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:8080/contents/showFundingContentsDetail/${contentId}`)
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, [contentId]);

  const handleScrollToElement = (ref, id) => {
    setSelectedButton(id);  // 선택된 버튼 설정
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  if (!data) return null;

  const buttonStyle = (id) => ({
    background: selectedButton === id ? "#ddd" : "#f5f5f5", // 선택된 버튼에 따라 배경색 변경
    border: "1px solid #ddd",
    borderRadius: "20px",
    padding: "10px 20px",
    marginRight: "10px",
    cursor: "pointer"
  });

  return (
    <div>
      <div style={{ 
         height: '0.5px', 
         background: '#D2D2D2', fontWeight: 300,
         margin: '3px 0', width:"100%", marginTop:"30px"}}>
        </div>
        <div style={{ 
         height: '0.5px', 
         background: '#D2D2D2', fontWeight: 300,
         margin: '3px 0', width:"100%", marginTop:"60px"}}>
        </div>
      <div style={{ display: "flex", justifyContent: "flex-start", paddingLeft: "300px", alignItems: "center", marginBottom: "20px", marginTop:"20px", marginLeft:"-40px" }}>
        {/* 버튼 클릭 이벤트 수정 */}
        <button style={buttonStyle('intro')} onClick={() => handleScrollToElement(introRef, 'intro')}>작가</button>
        <button style={buttonStyle('purpose')} onClick={() => handleScrollToElement(purposeRef, 'purpose')}>소개</button>
        <button style={buttonStyle('time')} onClick={() => handleScrollToElement(timeRef, 'time')}>일정</button>
        <button style={buttonStyle('invest')} onClick={() => handleScrollToElement(investRef, 'invest')}>투자개요</button>
      </div>
      <br/><br/>
      <div style={{ textAlign: "left", padding: "0 300px" }}>

        {/* 참조 적용 */}
        <h3 style={{ marginLeft: "15px" }}>| 작가 소개</h3>
        <h4 ref={introRef} > 
          작가다 디즈니·픽사의 놀라운 상상력!
          올여름, 세상이 살아 숨 쉰다
          불, 물, 공기, 흙 4개의 원소들이 살고 있는 ‘엘리멘트 시티’
          재치 있고 불처럼 열정 넘치는 ‘앰버'는 어느 날 우연히
          유쾌하고 감성적이며 물 흐르듯 사는 '웨이드'를 만나 특별한 우정을 쌓으며,
          지금껏 믿어온 모든 것들이 흔들리는 새로운 경험을 하게 되는데...
          6월 극장 대개봉,
          웰컴 투 ‘엘리멘트 시티’! 버니 루멘 - 로니 델 카르멘 / 이장원[5] / 쿠스미 나오미
          앰버의 완고한 아버지[6]이자 신더의 남편. 피치 못할 사정으로 신더와 함께 본래 살던 '파이어랜드'에서 
          엘리멘트 시티로 이주, 
          식료품점인 파이어플레이스를 개업하면서 엘리멘트 시티에 불 원소들이 거주하는 마을인 '파이어타운'이 생기는데 큰 
          역할을 한다. 엘리멘트 시티에서 살게 되면서 불이라는 이유로 많은 차별을 받았기에 다른 원소와 섞이는 것, 
          특히 물 원소는 상성이 안 맞아서 굉장히 싫어한다. 그래도 이런 아버지 캐릭터가 흔히 그렇듯 가족에 대한 사랑은 지극하고 
          일단 마음을 열면 꽤 호탕한 면모도 있다.
          신더 루멘 - 쉴라 옴미 / 전숙경[7] / 시오타 토모코
          앰버의 어머니이자 버니의 아내. 고향인 파이어랜드를 떠날 당시 앰버를 임신한 상태였으며, 엘리멘트 시티에 
          도착해 앰버를 낳았다. 로맨스 드라마를 좋아하며, 파이어플레이스 내부에서 연기 냄새로 커플 궁합을 봐주는 일종의
          점집을 운영한다. {data.detail}</h4>
        <br/><br/>
        <div style={{ 
         height: '0.5px', 
         background: '#D2D2D2', fontWeight: 300,
         margin: '3px 0', width:"100%", marginTop:"-20px", marginBottom:"50px"}}>
        </div>
        <h3 style={{ marginLeft: "15px" }}>| 프로젝트 소개</h3>
        <h4 ref={purposeRef}>
          소개다디즈니·픽사의 놀라운 상상력!
          올여름, 세상이 살아 숨 쉰다
          불, 물, 공기, 흙 4개의 원소들이 살고 있는 ‘엘리멘트 시티’
          재치 있고 불처럼 열정 넘치는 ‘앰버'는 어느 날 우연히
          유쾌하고 감성적이며 물 흐르듯 사는 '웨이드'를 만나 특별한 우정을 쌓으며,
          지금껏 믿어온 모든 것들이 흔들리는 새로운 경험을 하게 되는데...
          6월 극장 대개봉,
          웰컴 투 ‘엘리멘트 시티’! 버니 루멘 - 로니 델 카르멘 / 이장원[5] / 쿠스미 나오미
          앰버의 완고한 아버지[6]이자 신더의 남편. 피치 못할 사정으로 신더와 함께 본래 살던 '파이어랜드'에서 
          엘리멘트 시티로 이주, 
          식료품점인 파이어플레이스를 개업하면서 엘리멘트 시티에 불 원소들이 거주하는 마을인 '파이어타운'이 생기는데 큰 
          역할을 한다. 엘리멘트 시티에서 살게 되면서 불이라는 이유로 많은 차별을 받았기에 다른 원소와 섞이는 것, 
          특히 물 원소는 상성이 안 맞아서 굉장히 싫어한다. 그래도 이런 아버지 캐릭터가 흔히 그렇듯 가족에 대한 사랑은 지극하고 
          일단 마음을 열면 꽤 호탕한 면모도 있다.
          신더 루멘 - 쉴라 옴미 / 전숙경[7] / 시오타 토모코
          앰버의 어머니이자 버니의 아내. 고향인 파이어랜드를 떠날 당시 앰버를 임신한 상태였으며, 엘리멘트 시티에 
          도착해 앰버를 낳았다. 로맨스 드라마를 좋아하며, 파이어플레이스 내부에서 연기 냄새로 커플 궁합을 봐주는 일종의
          점집을 운영한다. {data.detail}
        </h4>
        <div style={{ 
         height: '0.5px', 
         background: '#D2D2D2', fontWeight: 300,
         margin: '3px 0', width:"100%", marginTop:"0px", marginBottom:"50px"}}>
        </div>
        {/* 참조 적용 */}
        <h3 style={{ marginLeft: "15px" }}>| 프로젝트 일정</h3>
        <h4 ref={timeRef}>일정이다디즈니·픽사의 놀라운 상상력!
          올여름, 세상이 살아 숨 쉰다
          불, 물, 공기, 흙 4개의 원소들이 살고 있는 ‘엘리멘트 시티’
          재치 있고 불처럼 열정 넘치는 ‘앰버'는 어느 날 우연히
          유쾌하고 감성적이며 물 흐르듯 사는 '웨이드'를 만나 특별한 우정을 쌓으며,
          지금껏 믿어온 모든 것들이 흔들리는 새로운 경험을 하게 되는데...
          6월 극장 대개봉,
          웰컴 투 ‘엘리멘트 시티’! 버니 루멘 - 로니 델 카르멘 / 이장원[5] / 쿠스미 나오미
          앰버의 완고한 아버지[6]이자 신더의 남편. 피치 못할 사정으로 신더와 함께 본래 살던 '파이어랜드'에서 
          엘리멘트 시티로 이주, 
          식료품점인 파이어플레이스를 개업하면서 엘리멘트 시티에 불 원소들이 거주하는 마을인 '파이어타운'이 생기는데 큰 
          역할을 한다. 엘리멘트 시티에서 살게 되면서 불이라는 이유로 많은 차별을 받았기에 다른 원소와 섞이는 것, 
          특히 물 원소는 상성이 안 맞아서 굉장히 싫어한다. 그래도 이런 아버지 캐릭터가 흔히 그렇듯 가족에 대한 사랑은 지극하고 
          일단 마음을 열면 꽤 호탕한 면모도 있다.
          신더 루멘 - 쉴라 옴미 / 전숙경[7] / 시오타 토모코
          앰버의 어머니이자 버니의 아내. 고향인 파이어랜드를 떠날 당시 앰버를 임신한 상태였으며, 엘리멘트 시티에 
          도착해 앰버를 낳았다. 로맨스 드라마를 좋아하며, 파이어플레이스 내부에서 연기 냄새로 커플 궁합을 봐주는 일종의
          점집을 운영한다. {data.detail}</h4>
        <br/><br/>
        <div style={{ 
         height: '0.5px', 
         background: '#D2D2D2', fontWeight: 300,
         margin: '3px 0', width:"100%", marginTop:"-20px", marginBottom:"50px"}}>
        </div>
        <h3 style={{ marginLeft: "15px" }}>| 투자개요</h3>
        <h4 ref={investRef}>투자다디즈니·픽사의 놀라운 상상력!
          올여름, 세상이 살아 숨 쉰다
          불, 물, 공기, 흙 4개의 원소들이 살고 있는 ‘엘리멘트 시티’
          재치 있고 불처럼 열정 넘치는 ‘앰버'는 어느 날 우연히
          유쾌하고 감성적이며 물 흐르듯 사는 '웨이드'를 만나 특별한 우정을 쌓으며,
          지금껏 믿어온 모든 것들이 흔들리는 새로운 경험을 하게 되는데...
          6월 극장 대개봉,
          웰컴 투 ‘엘리멘트 시티’! 버니 루멘 - 로니 델 카르멘 / 이장원[5] / 쿠스미 나오미
          앰버의 완고한 아버지[6]이자 신더의 남편. 피치 못할 사정으로 신더와 함께 본래 살던 '파이어랜드'에서 
          엘리멘트 시티로 이주, 
          식료품점인 파이어플레이스를 개업하면서 엘리멘트 시티에 불 원소들이 거주하는 마을인 '파이어타운'이 생기는데 큰 
          역할을 한다. 엘리멘트 시티에서 살게 되면서 불이라는 이유로 많은 차별을 받았기에 다른 원소와 섞이는 것, 
          특히 물 원소는 상성이 안 맞아서 굉장히 싫어한다. 그래도 이런 아버지 캐릭터가 흔히 그렇듯 가족에 대한 사랑은 지극하고 
          일단 마음을 열면 꽤 호탕한 면모도 있다.
          신더 루멘 - 쉴라 옴미 / 전숙경[7] / 시오타 토모코
          앰버의 어머니이자 버니의 아내. 고향인 파이어랜드를 떠날 당시 앰버를 임신한 상태였으며, 엘리멘트 시티에 
          도착해 앰버를 낳았다. 로맨스 드라마를 좋아하며, 파이어플레이스 내부에서 연기 냄새로 커플 궁합을 봐주는 일종의
          점집을 운영한다. {data.minInvest}</h4>
          <div style={{ 
         height: '0.5px', 
         background: '#D2D2D2', fontWeight: 300,
         margin: '3px 0', width:"100%", marginTop:"-20px", marginBottom:"50px"}}>
        </div>
      </div>
    </div>
  );
}

export default Detail;
