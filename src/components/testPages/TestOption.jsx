import { useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import MenuBar from '../MenuBar';
import styled from 'styled-components';
import Questions from './question';
import { createRef, useEffect, useState } from 'react';
import { LastOuterContainer } from "../../styles/BodyStyle";
import Money from '../../image/money.png';
import User from "../../image/user.png";

function TestOption() {
  const [loading, setLoading] = useState(false);
  const [num, setNum] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(1);
  const TOTAL_SLIDES = 10;
  const navigate = useNavigate();
  const [score, setScore] = useState(0);
  const [progressWidth, setProgressWidth] = useState('0%');

  const updateProgressBarWidth = () => {
    // bar_now 요소 선택하기
    const widthPercentage = currentSlide * (100 / TOTAL_SLIDES) + '%';
    setProgressWidth(widthPercentage);
  };

  const nextSlideFir = () => {
    const newScore = score + Questions[num].answers[0].score;
    setScore(newScore);
    if (num < TOTAL_SLIDES - 1) {
      setNum(num + 1); // 다음 질문으로 이동
      setCurrentSlide(currentSlide + 1); // 슬라이드 번호 업데이트
    } else {
      charChecker(newScore); // 마지막 질문일 경우 결과 확인으로 이동
    }
  };
  const nextSlideSec = () => {
    const newScore = score + Questions[num].answers[1].score;
    setScore(newScore);
    if (num < TOTAL_SLIDES - 1) {
      setNum(num + 1); // 다음 질문으로 이동
      setCurrentSlide(currentSlide + 1); // 슬라이드 번호 업데이트
    } else {
      charChecker(newScore); // 마지막 질문일 경우 결과 확인으로 이동
    }
  };
  const nextSlideThird = () => {
    const newScore = score + Questions[num].answers[2].score;
    setScore(newScore);
    console.log(score);
    if (num < TOTAL_SLIDES - 1) {
      setNum(num + 1); // 다음 질문으로 이동
      setCurrentSlide(currentSlide + 1); // 슬라이드 번호 업데이트
    } else {
      charChecker(newScore); // 마지막 질문일 경우 결과 확인으로 이동
    }
  };
  const nextSlideFourth = () => {
    const newScore = score + Questions[num].answers[3].score;
    setScore(newScore);
    if (num < TOTAL_SLIDES - 1) {
      setNum(num + 1); // 다음 질문으로 이동
      setCurrentSlide(currentSlide + 1); // 슬라이드 번호 업데이트
    } else {
      charChecker(newScore); // 마지막 질문일 경우 결과 확인으로 이동
    }
  };

  const charChecker = () => {
    setLoading(true);
    let totalScore = 0;
    if (score <= 25) {
      totalScore = 1;
    } else if (25 < score && score <= 50) {
      totalScore = 2;
    } else if (50 < score && score <= 75) {
      totalScore = 3;
    } else {
      totalScore = 4;
    }
    setTimeout(() => {
      const examResult = totalScore;
      navigate(`/investTest/result/${examResult}`);
    }, 100);
  };

  useEffect(() => {
    updateProgressBarWidth();
    currentSlide > TOTAL_SLIDES && charChecker();
  }, [score, currentSlide]);

  return (
    <LastOuterContainer>
      <MenuBar />
      <section
        style={{
          display: 'flex',
          width: '50%',
          margin: '0 auto',
          flexDirection: 'column',
        }}
      >
        
        {!loading && (
          <div>
            <div
              style={{
                position: 'relative',
                height: '850px',
                width: '80%',
                minWidth: '400px',
                maxWidth: '900px',
                margin: '0px auto',
                marginTop: '160px',
                marginBottom: '100px',
                boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                padding:"60px",
              }}
            >
              <div>
              <h1
                style={{
                  textAlign: 'center',
                  color: '#94B1FB',
                  fontSize: '50px',
                  fontWeight: '700',
                  padding:"10px",
                  margin:"5px"
                }}
              >
                <Image src={Money}/>금융성향 테스트 
              </h1>
              </div>
              
              <h3
                style={{
                  textAlign: 'center',
                  color: ' #b8cef6',
                  fontSize: '25px',
                }}
              >
                나에게 맞는 돈 관리법은 뭘까?
              </h3>
              <div
                class="bar"
                style={{
                  boxSizing: 'border-box',
                  backgroundColor: '#e0e7ff',
                  width: '100%',
                  height: '7px',
                }}
              >
                <span
                  class="bar_now"
                  style={{
                    width: progressWidth,
                    height: '7px',
                    display: 'block',
                    backgroundColor: ' #94b1fb',
                  }}
                ></span>
              </div>
              <div class="step_nav">
                <div class="step_text">
                  <span>{currentSlide}</span>
                  <span>/{TOTAL_SLIDES}</span>
                </div>
              </div>

              <div key={Questions[num].id}>
                <div style={{ marginTop: '100px' }}>
                  <h3>Q. {Questions[num].question}</h3>
                </div>
                <article style={{ marginTop: '50px' }}>
                  <TestText onClick={nextSlideFir}>
                    {Questions[num].answers[0].content}
                  </TestText>
                  <TestText onClick={nextSlideSec}>
                    {Questions[num].answers[1].content}
                  </TestText>
                  <TestText onClick={nextSlideThird}>
                    {Questions[num].answers[2].content}
                  </TestText>
                  <TestText onClick={nextSlideFourth}>
                    {Questions[num].answers[3].content}
                  </TestText>
                </article>
              </div>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </LastOuterContainer>
  );
}

const TestText = styled.button`
  height: 80px;
  width: 100%;
  background-color: #e0e7ff;
  border: none;
  border-radius: 10px;

  display: flex;
  justify-content: center;
  line-height: 80px;
  font-size: 17px;
  font-weight: 400;

  cursor: pointer;

  margin-top: 30px;

  &:hover {
    color: #fff;
    background-color: #94b1fb;
    font-weight: 600;
  }
`;

const Image = styled.img`
  padding: 10px;
`;

export default TestOption;
