import React, { useState, useEffect, useRef } from 'react';
import design from '../../image/design.png';
import design2 from '../../image/design2.png';
function Detail2({contentId}) {
  const [data, setData] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null); // 선택된 버튼의 상태

  // 참조 생성
  const introRef = useRef(null);
  const purposeRef = useRef(null);
  const timeRef = useRef(null);
  const investRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:9999/poster/showSupportContentsDetail/${contentId}`)
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
        <div>
        <h3 style={{ marginLeft: "15px" }}>| 작가 소개</h3><br/>
        <h4 ref={introRef} style={{color:"grey", marginLeft:"18px"}} > 
          <h3 style={{color:'black'}}><strong>대학 디자인 연합 동아리</strong><br/></h3>
          <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={design} style={{ width: '150px', height: '150px',  marginRight: '50px', marginLeft:'10pxx'  }}></img>
          <br/>
          대학 디자인 연합 동아리  미술대학 소속 동아리입니다. <br/><br/>서디연은 서울대학교 디자인과에 재학 중인 청년 디자이너 9명으로 구성되어 있습니다. 디자인에 대한 열정 하나로 뭉친 
          팀원들은 실무 프로젝트를 바탕으로 다양한 활동을 이어오고 있으며, 다양한 분야를 선도하는 디자인 혁신 그룹으로 성장하고자 하는 목표를 가지고 있습니다.
          <br/><br/></div><br/>

        </h4>
        <br/><br/>
        <div style={{ 
         height: '0.5px', 
         background: '#D2D2D2', fontWeight: 300,
         margin: '3px 0', width:"100%", marginTop:"-20px", marginBottom:"50px"}}>
        </div>
        <h3 style={{ marginLeft: "15px" }}>| 프로젝트 소개</h3>
        <h4 ref={purposeRef} style={{color:"grey", marginLeft:"18px"}}>
        <strong>[서디연 제 1회 여름 전시] 그런데, 있잖아, 만약에... : 선험적 대상의 현현</strong><br/><br/><br/>
        학부생의 디자인 속에는 때 묻지 않은 순수함이 담겨 있습니다. 그들은 단순히 디자인을 만들어내기 보단, 디자인을 통해 사고합니다. 
        디자인이 자기 표현의 수단이 되는 것입니다. 서디연은 이러한 청년 디자이너들의 놀이터가 됩니다. 팀원들은 다양한 주제를 가지고 어느 것에도 구애 받지 않은 채 사고하며 작업을 수행합니다. 
        서디연은 청년 디자이너들이 앞으로도 그 순수함을 잃지 않은 채 진정한 디자이너로서 나아가길 희망합니다.
        <br/><br/><br/>

        <img src={design2} style={{ width: '100%', height: '100%'}}/> 
        <br/><br/><br/>
        그런데  있잖아, 만약에… : 선험적 대상의 현현은 서울대학교 디자인 연합스터디의 첫 번째 여름 전시입니다. 서디연의 팀원들이 한 학기동안 진행한 프로젝트의 결과물을 선보이는 자리로서, 
        그들이 가진 순수한 공상의 형상을 만나볼 수 있습니다. 
        해당 전시는 청년 디자이너들의 첫 날갯짓을 응원하는 마음을 담고 있으며, 동시에 디자이너를 꿈꾸는 많은 이들에게 좋은 귀감이 되기를 기대합니다.
        <br/><br/><br/>

        여러분의 도움에 대한 감사 인사로, 서디연이 직접 디자인 한 다양한 굿즈를 드립니다. 잠들어 있는 일상의 사물에 우리의 통통 튀고 재밌는 생각을 담아 생명을 불어 넣었습니다. 
        “그런데, 있잖아, 만약에…”하며 말을 거는 듯한 굿즈와 함께, 서디연의 재밌는 상상을 즐겨주세요!
        <br/><br/><br/>

        </h4><br/>
        <div style={{ 
         height: '0.5px', 
         background: '#D2D2D2', fontWeight: 300,
         margin: '3px 0', width:"100%", marginTop:"0px", marginBottom:"50px"}}>
        </div>
        <h3 style={{ marginLeft: "15px" }}>| 프로젝트 일정</h3><br/>
        <h4 ref={timeRef} style={{color:"grey", marginLeft:"18px"}}>
        펀딩시작  : 2023년 9월 15일
        <br/><br/><br/>
        5월 11일: 전시 공간 대관
        <br/><br/><br/>
        6월 23일: 굿즈 디자인 시안 및 1차 샘플 제작
        <br/><br/><br/>
        7월 4일: 전체 전시 작품 1차 컨펌
        <br/><br/><br/>
        7월 19일: 굿즈 2차 샘플 제작, 최종 수정
        <br/><br/><br/>
        7월 25일: 전체 전시 작품 2차 컨펌
        <br/><br/><br/>
        10월 2일: 펀딩 굿즈 예상 배송 시작일</h4><br/><br/>
        <br/>
        <div style={{ 
         height: '0.5px', 
         background: '#D2D2D2', fontWeight: 300,
         margin: '3px 0', width:"100%", marginTop:"-20px", marginBottom:"50px"}}>
        </div>
        <h3 style={{ marginLeft: "15px" }}>| 팀 소개 </h3><br/>
        <h4 ref={investRef} style={{color:"grey", marginLeft:"18px"}}><br/>
        만기                   
        6개월<br/><br/>
        표면금리             
        5% 연 환산 10% <br/><br/>
        최대 추가 금리     
        15% 연 환산 30% <br/><br/>
        투자 가능 금액      
        300,000 원</h4><br/><br/><br/>
          <div style={{ 
         height: '0.5px', 
         background: '#D2D2D2', fontWeight: 300,
         margin: '3px 0', width:"100%", marginTop:"-20px", marginBottom:"50px"}}>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Detail2;