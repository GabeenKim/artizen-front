import styled from 'styled-components';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import { ContainerBody } from '../styles/BodyStyle';
import { useNavigate } from 'react-router-dom';

export default function Intro() {
  const navigate = useNavigate();
  const handleClick = () => {
    const user = localStorage.getItem('userId');
    const userInfo = localStorage.getItem('infoId');
    if (user || userInfo) {
      // 로그인한 상태라면 /contents/funding으로 이동
      navigate('/contents/funding');
    } else {
      // 로그인하지 않은 상태라면 /login으로 이동
      navigate('/login');
    }
  };

  return (
    <div>
      <MenuBar />
      <ContainerBody>
        <ImgDiv>
          <img style={{ width: '45%' }} src="/img/mainLogo2.png" />
        </ImgDiv>
        <Div>
          <DetailDiv>
            <TitleDiv>
              <h1>"예술을 넘어 사람을 보다"</h1>
              <h3> - Artizen</h3>
            </TitleDiv>
            <p>
              Artizen은 창의적 아이템을 가진 초기 기업가의 펀딩부터 오픈 예정의
              영화, 공연, 전시에 직접 투자하고 수익금을 얻을 수 있는
              플랫폼입니다.
            </p>
            <p>
              기존의 금융 상품들과 달리 문화와 예술에 특화된 금융 상품을
              제공하며 아티스트는 창작 활동에 필요한 자금을 모으고 작품의 홍보
              효과를 얻을 수 있습니다.
            </p>
            <p>
              투자자는 Artizen의 중개 서비스를 통해 다양한 카테고리의 예술
              작품에 쉽게 투자할 수 있으며 펀딩 이후, 수익금 외에도 희소성 있는
              MD상품 및 선물 등을 얻을 수 있습니다. 나아가 아티스트와 상호작용
              하며 팬 커뮤니티를 이룰 수 있고 응원하는 아티스트를 위한 후원이
              가능합니다.
            </p>
            <p>
              Artizen을 통해 관심 있는 분야의 콘텐츠를 단순히 소비하는 것에
              그치지 말고 직접 투자와 후원을 해보는 것은 어떨까요?
            </p>
          </DetailDiv>
          <TestText onClick={handleClick}>지금 시작하기</TestText>

          <h2 style={{ marginTop: '70px' }}>아티스트를 위한 크라우드 펀딩</h2>

          <DetailDiv2>
            <Container>
              <Card>
                <ImgBox>
                  <img src="https://cdn-icons-png.flaticon.com/128/9084/9084553.png" />
                </ImgBox>
                <ContentBx>
                  <h2 style={{ textAlign: 'left', marginLeft: '20px' }}>
                    누구나 쉽게 자금을 모을 수 있어요.
                  </h2>

                  <div
                    class="content"
                    style={{
                      marginTop: '40px',
                      marginLeft: '10px',
                      width: '90%',
                      alignItems: 'center',
                    }}
                  >
                    <p>
                      1인 창작자부터 소상공인, 브랜드까지
                      <br />
                      <b>독창적인 아이디어</b>가 있다면 <br />
                      <b>누구나</b> 프로젝트를 시작해 보세요.
                    </p>
                    <p>
                      펀딩이 성사되지 않을까봐 시작하기 두려우신가요? 수수료는
                      성사된 프로젝트에 한해 발생하므로 <br />
                      혹여나 무산되더라도 괜찮아요.
                    </p>
                  </div>
                </ContentBx>
              </Card>
            </Container>
            <Container>
              <Card>
                <ImgBox>
                  <img src="https://cdn-icons-png.flaticon.com/128/9043/9043470.png" />
                </ImgBox>
                <ContentBx>
                  <h2 style={{ textAlign: 'left', marginLeft: '20px' }}>
                    특별한 후원자를 만나 팬 커뮤니티를 만들 수 있어요.
                  </h2>
                  <div
                    class="content"
                    style={{
                      marginTop: '40px',
                      marginLeft: '10px',
                      width: '90%',
                      alignItems: 'center',
                    }}
                  >
                    <p>
                      창작자를 <b>신뢰하는 후원자들과</b> <br />
                      프로젝트의 시작과 끝을 함께 하세요.
                    </p>
                    <p>
                      창작자의 <b>새로운 시도를 응원</b>하는 <br />
                      많은 후원자들이 Artizen을 이용하고 있습니다.
                    </p>
                  </div>
                </ContentBx>
              </Card>
            </Container>
          </DetailDiv2>

          <DetailDiv>
            <h2 style={{ textAlign: 'center', marginTop: '60px' }}>
              펀딩 가이드
            </h2>
            <GuideContainer>
              <GuideCard>
                <IconImg src="https://cdn-icons-png.flaticon.com/128/7626/7626787.png" />
                <h4>1. 프로젝트 작성</h4>
              </GuideCard>
              <GuideCard>
                <IconImg src="https://cdn-icons-png.flaticon.com/128/3316/3316266.png" />
                <h4>2. 심사 및 승인</h4>
              </GuideCard>
              <GuideCard>
                <IconImg src="https://cdn-icons-gif.flaticon.com/8721/8721062.gif" />
                <h4>3. 프로젝트 오픈</h4>
              </GuideCard>
              <GuideCard>
                <IconImg src="https://cdn-icons-png.flaticon.com/128/2800/2800496.png" />
                <h4>4. 후원 성사 및 정산</h4>
              </GuideCard>
              <GuideCard>
                <IconImg src="https://cdn-icons-png.flaticon.com/128/3835/3835991.png" />
                <h4>5. 후원자 선물 전달</h4>
              </GuideCard>
            </GuideContainer>
          </DetailDiv>
        </Div>
      </ContainerBody>
      <Footer />
    </div>
  );
}

const Container = styled.div`
  position: relative;
  margin: 50px;
`;
const ImgBox = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100px;
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 180px;
  }
`;

const ContentBx = styled.div`
  position: absolute;
  bottom: 10px;
  width: 100%;
  height: 100px;
  text-align: center;
  transition: 1s;
  z-index: 8;

  h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: black;
    margin: 0;
  }
`;
const Card = styled.div`
  osition: relative;
  width: 350px;
  height: 450px;
  background: #eeeff1;
  border-radius: 20px;
  overflow: hidden;
  color: white;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #e0e7ff;
    clip-path: circle(150px at 80% 20%);
    transition: 0.5s ease-in-out;
  }

  &:after {
    content: 'ART';
    position: absolute;
    top: 30%;
    left: 10%;
    font-size: 9em;
    font-weight: 800;
    font-style: italic;
    color: rgba(224, 231, 255, 0.05);
  }
  &:hover ${ImgBox} {
    top: 30%;
    opacity: 10%;
    transform: translateY(0%);
  }
  &:hover ${ContentBx} {
    height: 350px;
  }
  &:hover:before {
    clip-path: circle(350px at 80% -20%);
  }

  &:hover ${ContentBx.size} {
    color: black;
    opacity: 1;
    visibility: visible;
    transition-delay: 0.1s;
  }
`;

const ImgDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const IconImg = styled.img`
  width: 130px;
`;

const Div = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DetailDiv = styled.div`
  width: 45%;
  margin-top: 10px;
`;
const DetailDiv2 = styled.div`
  width: 50%;
  justify-content: center;
  display: flex;
`;
const GuideContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const TitleDiv = styled.div`
  text-align: center;
`;

const TestText = styled.button`
  height: 50px;
  width: 150px;
  background-color: #e0e7ff;
  border: none;

  color: grey;
  font-size: 15px;
  font-weight: 400;

  cursor: pointer;

  justify-content: center;

  &:hover {
    color: #fff;
    background-color: #94b1fb;
    font-weight: 600;
  }
`;

const GuideCard = styled.div`
  width: 33.33%;
  box-sizing: border-box;
  padding: 20px;
`;
