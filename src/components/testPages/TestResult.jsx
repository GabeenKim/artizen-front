import { Link, useParams } from 'react-router-dom';
import Footer from '../Footer';
import MenuBar from '../MenuBar';
import styled from 'styled-components';

import ResultChar from './result.json';

function TestResult() {
  const { id } = useParams();
  let character = ResultChar[id];
  const userId = parseInt(localStorage.getItem('userId'));

  if (!character) {
    return <div>존재하지 않는 결과입니다.</div>;
  }

  fetch('http://localhost:9999/account/registerCharacter', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId: userId,
      character: character.nickname,
    }),
  })
    .then((response) => response.json())
    .then((result) => console.log(result));

  return (
    <Body>
      <MenuBar />
      <div
        style={{
          width: '50%',
          height: '120%',
          margin: '0px auto',
          paddingTop: '150px',

          textAlign: 'center',

          backgroundColor: 'white',
        }}
      >
        <h1
          style={{
            textAlign: 'center',
            color: ' #b8cef6',
            fontSize: '40px',
            fontWeight: '700',
          }}
        >
          당신의 유형은?
        </h1>
        <div style={{ textAlign: 'center' }}>
          <Img src={character.img}></Img>
        </div>
        <p>
          <b>{character.subhead}</b>
        </p>
        <h1 style={{ textAlign: 'center', color: '#94B1FB' }}>
          {character.nickname}
        </h1>
        <p
          style={{
            backgroundColor: '#e0e7ff',
            width: '45%',
            margin: '0 auto',
          }}
        >
          {character.subject}
        </p>
        <div
          style={{
            width: '85%',
            marginLeft: '30px',
            marginTop: '60px',
            textAlign: 'left',
          }}
        >
          <p
            style={{
              width: '200px',
              textAlign: 'center',
              backgroundColor: '#e0e7ff',
            }}
          >
            <b>{character.description[0].des}</b>
          </p>
          <p>{character.description[1].des}</p>
        </div>

        <div
          style={{
            width: '85%',
            marginLeft: '30px',
            marginTop: '50px',
            textAlign: 'left',
          }}
        >
          <p
            style={{
              width: '100px',
              textAlign: 'center',
              backgroundColor: '#e0e7ff',
            }}
          >
            <b>장단점</b>
          </p>
          <p>
            <b>장점 👍</b>
          </p>
          <p>{character.description[2].des}</p>
          <p>
            <b>단점 👎 </b>
          </p>
          <p>{character.description[3].des}</p>
        </div>

        <div
          style={{
            width: '85%',
            marginLeft: '30px',
            marginTop: '50px',
            textAlign: 'left',
          }}
        >
          <p
            style={{
              width: '150px',
              backgroundColor: '#e0e7ff',
              textAlign: 'center',
            }}
          >
            <b>나를 위한 머니 팁</b>
          </p>
          <p>{character.description[4].des}</p>
        </div>

        <p style={{ marginTop: '60px', fontSize: '20px' }}>
          테스트를 다시하고 싶다면?
        </p>
        <Link to={'/investTest'}>
          <TestText>처음으로 돌아가기</TestText>
        </Link>
      </div>
      <Footer style={{ position: 'absolute', bottom: '0' }} />
    </Body>
  );
}

const TestText = styled.button`
  height: 60px;
  width: 80%;
  background-color: #e0e7ff;
  border: none;
  textalign: center;

  color: grey;
  font-size: 20px;
  font-weight: 400;

  cursor: pointer;
  text-decoration-line: none;

  margin-bottom: 30px;

  &:hover {
    color: #fff;
    background-color: #94b1fb;
    font-weight: 600;
  }
`;

const Body = styled.div`
  background-color: #e0e7ff;
`;

const Img = styled.img`
  width: 300px;
`;

export default TestResult;
