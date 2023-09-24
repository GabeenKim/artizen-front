import React, { useState, useEffect, useRef } from 'react';
import gang from '../../image/gang.png';
import moving from '../../image/moving.png';

function Detail({contentId}) {
  const [data, setData] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null); // 선택된 버튼의 상태

  // 참조 생성
  const introRef = useRef(null);
  const purposeRef = useRef(null);
  const timeRef = useRef(null);
  const investRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:9999/poster/showFundingContentsDetail/${contentId}`)
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
        <h4 ref={introRef} style={{color:"grey", marginLeft:"18px"}} > 
      <h3 style={{color:'black'}}><strong>강풀</strong><br/></h3>
      <div style={{ display: 'flex', alignItems: 'center' }}>
      <img src={gang} style={{ width: '150px', height: '150px',  marginRight: '50px', marginLeft:'10pxx'  }}></img>대한민국의 웹툰 작가. 
      <br/>
      다음 웹툰(현 카카오 웹툰)의 간판 작가이자, 대한민국에 웹툰이라는 장르를 뿌리 내리게 만들어 지금의 위치에 있게 만드는 데에 기여하였다.
      짧은 스토리 안에서 섬세한 감정 묘사와 드라마성을 녹여내는 작가다. 대부분의 작품이 30화 완결이며, 로맨스가 강조되는 순정만화 시리즈, 
      액션 스릴러 장르인 미심썰 시리즈 모두 공통적으로 장기 연재 작품이 없고, 짧은 구성 사이에 밀도 높은 드라마틱한 스토리를 전개하는 특징이 있다. 
     
      <br/><br/></div><br/>
      물론 장기 연재만 아닐 뿐 타이밍-어게인, 무빙-브릿지처럼 직접적으로 스토리가 연결되며 이야기를 이어나가는 방식을 취하기도 한다. 
      아파트부터 브릿지까지 이어진 미심썰 시리즈들은 평범한 현대 대한민국을 배경으로 귀신, 저승사자, 초능력, 첩보 등 각 작품 별로 다양한 소재를 사용하면서도 거시적으론 하나의 세계관에 연결하고 있다. 
      그러나 타이밍-무빙 시리즈를 제외한 대부분의 작품은 세계관과 서사가 본질적으로 독립적이다.
      {data.detail}</h4>
    <br/><br/>
    <div style={{ 
     height: '0.5px', 
     background: '#D2D2D2', fontWeight: 300,
     margin: '3px 0', width:"100%", marginTop:"-20px", marginBottom:"50px"}}>
    </div>
    <h3 style={{ marginLeft: "15px" }}>| 프로젝트 소개</h3>
    <h4 ref={purposeRef} style={{color:"grey", marginLeft:"18px"}}>
    <strong>소중한 것을 위해 언제나 목숨을 걸었다</strong><br/><br/><br/>
    초능력을 숨긴 채 현재를 살아가는 아이들과, 과거의 아픈 비밀을 숨긴 채 살아온 부모들이 시대와 세대를 넘어 닥치는 거대한 위험에 함께 맞서는 초능력 휴먼 액션 시리즈.
    <br/><br/>
    2017년부터 드라마화 소식이 들리다가 2020년부터 캐스팅 소식이 뜨기 시작해 마침내 2021년 하반기에 촬영을 시작하였다. 
    총 20부작의 구성으로 제작비는 500억이며, 미디어그룹 NEW의 자회사인 스튜디오앤뉴에서 제작할 예정이다. 영화 〈모비딕〉, 
    〈특별시민〉과 드라마 〈킹덤〉 시즌 2 등을 연출한 박인제 감독이 연출하며, 원작자인 강풀 작가가 직접 집필한다.
    <br/><br/>
    <div style={{ display: 'flex', alignItems: 'center' }}>
    <img src={moving} style={{ width: '400px', height: '450px',  marginRight: '50px', marginLeft:'10pxx'  }}/> 
    <br/><br/>
    원작자인 강풀이 대본 작업을 맡은 만큼 기존의 큰 줄거리는 유지하되, 기존 내용에 크게 영향을 주지 않는 범위 내에서 새로운 인물이 추가되고 에피소드 일부가 변화하는 등 적지 않은 차이가 있다.
    <br/><br/>
    극중 국정원 요원들에게 부여된 암호명은 원작에는 나오지 않는다. 정상진(진천), 전영석(봉평), 홍성화(나주) 등 드라마 오리지널 캐릭터뿐 아니라, 김두식(문산), 장주원(구룡포) 등에게도 암호명이 있다. 각자 캐릭터가 태어난 고향이다.
    <br/><br/>
    원작의 이미현은 추어탕집(봉석이네 추어탕)을 운영했으나 드라마에서는 돈가스집(남산 돈까스)으로 바뀌었다.
    장주원이 국정원에 입직하게 된 이야기 전체가 바뀌었다. 아내와의 만남은 원작에 없었으며 입직하게 된 이야기도 전부 새로 만들어졌다. 
    <br/><br/>
    원작에서의 아내 황지희는 장주원이 하숙하던 집주인 딸이었다.특별히 사귀게 된 계기는 나오지 않지만, 밤중에 골목에서 위험한 일 하고 다니지 말라고 잔소리하거나, 
    <br/><br/>
      </div><br/><br/><br/>
      <strong style={{color:'black'}}>배우들의 액션!</strong><br/><br/>
      NTDP (국가인재육성프로그램)의 최초 입안자와 입안 시기가 달라졌다. 원작에서의 입안 시기는 
      <br/><br/>
      2세대 초능력자들이 태어나기 전에 이미 만들어졌으나, 드라마에서는 2세대 초능력자들의 능력을 보고 프로그램을 시작하는 것으로 되어있다. 또한, NTDP 프로그램의 최초 입안자가 원작과 다른 사람이다. 이는 원작에서는 크게 중요한 내용이 아니지만, 속편에 해당하는 작품인 〈브릿지〉에서 상당히 비중이 높은 내용이다.
      류승범이 연기한 오리지널 캐릭터 프랭크는 본래 연재 준비 중이던 3부 '히든'에서 등장 예정이었던 캐릭터를 드라마에 미리 땡겨 출연시켰다고 한다.
      <br/><br/>
      김영탁이 능력을 사용하는 장면이 나온다. 대신 얼굴은 안 나온다. 원작에서는 얼굴은 나오고 능력은 사용하지 않는다. 사실 능력을 사용할 필요가 있는 장면은 아니었다. 
      다만 김영탁이 등장함으로써 〈타이밍〉과 이번 작품이 같은 세계관을 공유하고 있음을 설명하고 있는 동시에, 차기작 〈브릿지〉에 대한 예고일 수도 있다.
      원작에서는 민용준이 살아남아 미연재된 3부 〈히든〉까지도 국정원 내 메인 빌런 역할을 하고 있지만 이번 작품에서는 김두식이 민용준을 죽이고 그 자리를 오리지널 캐릭터인 마상구가 이어받았다.{data.detail}
    </h4><br/>
    <div style={{ 
     height: '0.5px', 
     background: '#D2D2D2', fontWeight: 300,
     margin: '3px 0', width:"100%", marginTop:"0px", marginBottom:"50px"}}>
    </div>
    {/* 참조 적용 */}
    <h3 style={{ marginLeft: "15px" }}>| 프로젝트 일정</h3><br/>
    <h4 ref={timeRef} style={{color:"grey", marginLeft:"18px"}}>
    펀딩시작  : 2023년 9월 15일
    <br/><br/><br/>
    포스터 제작 : 9월 20일
    <br/><br/><br/>
    리워드 물품 구입 : 10월15일
    <br/><br/><br/>
    펀딩 종료 : 2023년 10월20일 
    <br/><br/><br/>
    극장 개봉관 확정 : 2023년 10월20일
    <br/><br/><br/>
    후원자별 세부 관람 안내 및 리워드 안내 : 10월20일 까지
    <br/><br/><br/>
    극장 개봉일 및 관람 : 2023년 10월25일(수) 예정 {data.detail}</h4><br/><br/>
    <br/>
    <div style={{ 
     height: '0.5px', 
     background: '#D2D2D2', fontWeight: 300,
     margin: '3px 0', width:"100%", marginTop:"-20px", marginBottom:"50px"}}>
    </div>
    <h3 style={{ marginLeft: "15px" }}>| 투자개요</h3><br/>
    <h4 ref={investRef} style={{color:"grey", marginLeft:"18px"}}><br/>
    만기 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    6개월<br/><br/>
    표면금리 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    5% *연 환산 10% <br/><br/>
    최대 추가 금리 &nbsp;&nbsp;&nbsp;&nbsp;
    15% *연 환산 30% <br/><br/>
    투자 가능 금액&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    300,000 원{data.minInvest}</h4><br/><br/><br/>
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
