import { useEffect, useState } from 'react';
import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useDetectClose from '../hooks/useDetectClose';

export default function MenuBar() {
  const [fundingIsOpen, fundingRef, fundingHandler] = useDetectClose(false);
  const [logoutIsOpen, logoutRef, logoutHandler] = useDetectClose(false);
  const [search, setSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [searchType, setSearchType] = useState('제목');
  const navigate = useNavigate();
  const location = useLocation();

  const clickSearch = () => {
    setSearch(!search);
  };

  const changeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const changeType = (e) => {
    setSearchType(e.target.value);
  };

  const handleSubmit = (e) => {
    if (searchText.length > 0) {
      alert(searchText + '?' + searchType);
    } else {
      e.preventDefault();
    }
  };

  const clickLogout = () => {
    localStorage.clear();
    if (location.pathname === '/') {
      window.location.replace('/');
    } else {
      navigate('/');
    }
  };

  useEffect(() => {
    console.log(searchType);
  }, [searchType]);

  return (
    <Nav>
      <MenuBox>
        {/* <h1>Artizen</h1> */}
        <Link to={'/'}>
          <img style={{ width: '300px' }} src="/img/title.png" />
        </Link>
        <Link to={'/intro'}>
          <MenuTitle><b>소개</b></MenuTitle>
        </Link>

        <MenuBtnContainer>
          <MenuTitle onClick={fundingHandler} ref={fundingRef}>
            <b>펀딩</b>
          </MenuTitle>
          <Menu isDropped={fundingIsOpen}>
            <Ul>
              <li>
                <Link
                  to={'/contents/funding'}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  투자
                </Link>
              </li>
              <li>
                <Link
                  to={'/contents/support'}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  후원
                </Link>
              </li>
            </Ul>
          </Menu>
        </MenuBtnContainer>

        <Link to={'/mypage'}>
          <MenuTitle><b>마이페이지</b></MenuTitle>
        </Link>

        <Link to={'/community'}>
          <MenuTitle><b>커뮤니티</b></MenuTitle>
        </Link>

        <MenuTitle onClick={clickSearch}>
          {search ? (
            <img src="/img/cancel.png" />
          ) : (
            <img src="/img/search.png" />
          )}
        </MenuTitle>

        {localStorage.getItem('name') != null ? (
          <>
            <MenuBtnContainer>
              <MenuTitle onClick={logoutHandler} ref={logoutRef}>
                <p>
                  {localStorage.getItem('nickname') == null ? (
                    <span>{localStorage.getItem('nickname')} </span>
                  ) : null}
                  <span style={{ fontWeight: 'bold' }}>
                    {localStorage.getItem('name')}
                  </span>
                </p>
              </MenuTitle>
              <Menu isDropped={logoutIsOpen}>
                <Ul>
                  <li onClick={clickLogout}>로그아웃</li>
                </Ul>
              </Menu>
            </MenuBtnContainer>
          </>
        ) : (
          <Link to={'/login'}>
            <MenuTitle>로그인</MenuTitle>
          </Link>
        )}
      </MenuBox>

      <Search isActive={search} onSubmit={handleSubmit}>
        <select onChange={changeType}>
          <option value="title" selected>
            제목
          </option>
          <option value="writer">작가</option>
        </select>
        <input
          placeholder="검색어를 입력해주세요"
          onChange={changeSearchText}
        />
        <button>
          <img src="/img/search.png" />
        </button>
      </Search>
    </Nav>
  );
}

const Nav = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 9;
  background-color: white;
`;
const Search = styled.form`
  display: flex;
  justify-content: center;
  visibility: hidden;
  z-index: 9;
  margin-bottom: 5px;

  ${({ isActive }) =>
    isActive &&
    `
        opacity: 1;
        visibility: visible;
    `};

  select {
    border-radius: 8px;
    width: 5%;
  }
  input {
    width: 30%;
    margin: 0px 10px;
    padding: 10px;
    border-radius: 8px;
  }
  button {
    border-width: 0px;
    background-color: transparent;
  }
  img {
    width: 20px;
  }
`;

const MenuBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 5%;
`;

const MenuBtnContainer = styled.div`
  position: relative;
  text-align: center;
`;

const MenuTitle = styled.button`
  border-width: 0px;
  background-color: transparent;
  &:hover {
    font-weight: 600;
  }
  img {
    width: 25px;
  }
`;

const Menu = styled.div`
  background: white;
  position: absolute;
  top: 52px;
  left: 50%;
  width: 100px;
  text-align: center;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  opacity: 0;
  visibility: hidden;
  transform: translate(-50%, -20px);
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;
  z-index: 10;

  ${({ isDropped }) =>
    isDropped &&
    `
        opacity: 1;
        visibility: visible;
        transform: translate(-50%, 0);
        left: 50%;
    `};
`;

const Ul = styled.ul`
  & > li {
    margin-bottom: 10px;
  }
  & > li:first-of-type {
    margin-top: 10px;
  }
  padding: 0;
  margin: 0;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  & > li:hover {
    font-weight: 600;
  }
`;
