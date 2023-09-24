import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import MenuBar from '../components/MenuBar';
import styled from 'styled-components';
import { LastOuterContainer } from "../styles/BodyStyle";

function TestPage() {
  return (
    <LastOuterContainer>
      <MenuBar />
      <div
        style={{
          position: 'relative',

          width: '90%',
          minWidth: '400px',
          maxWidth: '900px',

          height: '115vh',
          margin: '0px auto',
          marginTop: '160px',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            color: '#94B1FB',
            fontSize: '50px',
            fontWeight: '700',
          }}
        >
          금융성향 테스트
        </h1>
        <h3
          style={{ textAlign: 'center', color: ' #b8cef6', fontSize: '25px' }}
        >
          나에게 맞는 돈 관리법은 뭘까?
        </h3>

        <Img src="http://funuppity.com/www/img/main_back.png"></Img>
        <Link to="/investTest/option">
          <TestStartBtn>테스트 시작하기</TestStartBtn>
        </Link>
      </div>
      <Footer style={{ position: 'absolute', bottom: '0' }} />
    </LastOuterContainer>
  );
}

const TestStartBtn = styled.button`
  height: 80px;
  width: 100%;
  background-color: #94b1fb;
  border: none;

  color: white;
  font-size: 30px;
  font-weight: 600;

  cursor: pointer;
  text-decoration-line: none;
`;
const Img = styled.img`
  width: 100%;
`;

export default TestPage;
