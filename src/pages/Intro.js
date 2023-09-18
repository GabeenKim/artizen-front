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
          <img style={{ width: '50%' }} src="/img/mainLogo2.png" />
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
              효과를 얻을 수 있습니다.{' '}
            </p>
            <p>
              투자자는 Artizen의 중개 서비스를 통해 다양한 카테고리의 예술
              작품에 쉽게 투자할 수 있으며 펀딩 이후, 수익금 외에도 희소성 있는
              MD상품 및 선물 등을 얻을 수 있습니다. 나아가 아티스트와 상호작용
              하며 팬 커뮤니티를 이룰 수 있고 응원하는 아티스트를 위한 후원이
              가능합니다.
            </p>
            <p>
              Artizen을 통해 관심있는 분야의 컨텐츠에 대해 단순히 소비만 하는
              것이 아니라 직접 투자와 후원을 해보는 것은 어떨까요?
            </p>
          </DetailDiv>
          <TestText onClick={handleClick}>지금 시작하기</TestText>

          <DetailDiv>
            <h2>아티스트를 위한 크라우드 펀딩</h2>
          </DetailDiv>

          <DetailDiv>
            <h2>펀딩 가이드</h2>
            <CardContainer>
              <Card>
                <h3>1. 프로젝트 작성</h3>
                <IconImg src="https://cdn-icons-gif.flaticon.com/6172/6172541.gif" />
              </Card>
              <Card>
                <h3>2. 심사 및 승인</h3>
                <IconImg src="https://cdn-icons-gif.flaticon.com/7994/7994402.gif" />
              </Card>
              <Card>
                <h3>3. 프로젝트 오픈</h3>
                <IconImg src="https://cdn-icons-gif.flaticon.com/8721/8721062.gif" />
              </Card>
              <Card>
                <h3>4. 후원 성사 및 정산</h3>
                <IconImg src="https://cdn-icons-gif.flaticon.com/7994/7994384.gif" />
              </Card>
              <Card>
                <h3>5. 후원자 선물 전달</h3>
                <IconImg src="https://cdn-icons-gif.flaticon.com/8701/8701069.gif" />
              </Card>
            </CardContainer>
          </DetailDiv>
        </Div>
      </ContainerBody>
      <Footer />
    </div>
  );
}

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
  width: 50%;
  margin-top: 20px;
`;
const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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

const Card = styled.div`
  width: 33.33%;
  box-sizing: border-box;
  padding: 20px;
`;
