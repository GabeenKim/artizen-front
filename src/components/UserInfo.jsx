import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import UserImage from '../image/profile-user.png';
import CustomSelect from './Select';
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle';
import DialogActions from '@mui/material/DialogActions';
import { DialogContent, TextField, Button } from '@mui/material';

function UserInfo() {
    const [name, setName] = useState(localStorage.getItem('name'));
    const [email, setEmail] = useState("mesh153@naver.com");
    const [password, setPassword] = useState("*****");
    const [account, setAccount] = useState("123-123-123");
    const [interest, setInterest] = useState("전시, 영화");

    const [myMoney, setMyMoney] = useState(100000);
    const [addMoney, setAddMoney] = useState(0);
    const [minusMoney, setMinusMoney] = useState(0);

    const [isAddOpen, setIsAddOpen] = useState(false);
    const [isMinusOpen, setIsMinusOpen] = useState(false);

    {/* 이름 */}
    const handleChangeName = (e) => {
        setName(e.target.value);
    };

    {/* 이메일 */}
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }

    {/* 비밀번호 */}
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    {/* 충전 */}
    const handleChangeAddModal = (e) => {
        setIsAddOpen(!isAddOpen);
    }

    const handleAddMoneyValue =  (e) => {
        setAddMoney(e.target.value);
    };

    const handleAddMoneySubmit =  (e) => {
       setMyMoney(myMoney + parseInt(addMoney));
       setIsAddOpen(!isAddOpen);
    };

    {/* 출금 */}
    const handleChangeMinusModal = (e) => {
        setIsMinusOpen(!isMinusOpen);
    }

    const handleMinusMoneyValue =  (e) => {
        setMinusMoney(e.target.value);
    };

    const handleMinusMoneySubmit =  (e) => {
       setMyMoney(myMoney - parseInt(minusMoney));
       setIsMinusOpen(!isMinusOpen);
    };
    
    {/* 이름 & 비밀번호 변경 */}
    const handleSubmit =  (e) => {
        alert(`이름 : ${name}, 비밀번호 : ${password}`);
        e.preventDefault();
    };

    return (
       
        <UserInfoBox>
            <ProFileBox>   
                <UserForm onSubmit={handleSubmit}>
                    {/* 상단 프로필 */}
                    <ProFileDetailBox>
                        {/* 이미지 */}
                        <ImageBox>
                                <Image src={UserImage} />
                        </ImageBox>
                        {/* 닉네임 및 계좌 입출금 */}
                        <div>
                            {/* 닉네임 */}
                            <NickNameBox>
                                        {localStorage.getItem("nickname")}
                            </NickNameBox>
                            {/* 계좌 입출금 */}
                            <AccountBox>
                                <MyMoneyBox>
                                    현재 보유 금액 : {myMoney.toLocaleString('ko-KR')}원
                                </MyMoneyBox>
                                
                                {/* 충전 하기 */}
                                <AccountButton onClick={handleChangeAddModal}>충전</AccountButton>
                                <Dialog open={isAddOpen} onClose={handleChangeAddModal}>
                                    <DialogTitle>충전하기</DialogTitle>
                                    <br></br>
                                    <DialogContent>
                                        <TextField label="충전 금액" type='text' name={addMoney} onChange={handleAddMoneyValue}/>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="contained" color="primary" onClick={handleAddMoneySubmit}>충전</Button>
                                    </DialogActions>
                                </Dialog>
                                {/* 출금 하기 */}
                                <AccountButton onClick={handleChangeMinusModal}>출금</AccountButton>
                                <Dialog open={isMinusOpen} onClose={handleChangeMinusModal}>
                                    <DialogTitle>출금하기</DialogTitle>
                                    <br></br>
                                    <DialogContent>
                                        <TextField label="출금 금액" type='text' name={minusMoney} onChange={handleMinusMoneyValue}/>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button variant="contained" color="primary" onClick={handleMinusMoneySubmit}>출금</Button>
                                    </DialogActions>
                                </Dialog>
                            </AccountBox>
                        </div>
                    </ProFileDetailBox> 
                    {/* 하단 프로필 */}
                    <InfoBox>
                        <InfoLabel>이름</InfoLabel>
                        <Input type="text" placeholder={name} onChange={handleChangeName} />
                    </InfoBox>
                        
                    <InfoBox>
                        <InfoLabel>비밀번호</InfoLabel>
                        <Input type="password" placeholder={password} onChange={handleChangePassword}/>
                    </InfoBox>

                    <InfoBox>
                        <InfoLabel>이메일</InfoLabel>
                        <Input type="text" placeholder={email} disabled/>
                    </InfoBox>

                    <InfoBox>
                        <InfoLabel>관심분야</InfoLabel>
                        <Input type="text" placeholder={interest} disabled/>
                    </InfoBox>

                    <SubmitButton type="submit">정보 수정</SubmitButton>
                </UserForm>

                  {/* 계좌 등록 폼*/}
                <AccountInfoForm>
                        <AccountInfoLabel>계좌 정보</AccountInfoLabel>
                        <CustomSelect name="" id=""> </CustomSelect>
                        <AccountInput type="text" placeholder={account}/>   
                        <AccountInfoButton> 등록 </AccountInfoButton>
                </AccountInfoForm>
            </ProFileBox>
            
        </UserInfoBox>
    )
}


/* [전체 박스] */
const UserInfoBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 55px;
`;

/* [상단 프로필] */
const ProFileBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 35%;
`;

const ProFileDetailBox = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 50px;
    height: 100%;
`;

const NickNameBox = styled.div`

    background-color: #eee;
    border-radius: 40px;
    padding: 12px 15px;
    font-weight: 700;
`;

const AccountBox = styled.div`
    margin-top: 35px;
    
`;

const MyMoneyBox = styled.div`
    font-weight: 700;
`;

const AccountButton = styled.div`
    margin-left: 35px;
    margin-top: 15px;
    float:left;
    border: none;
    cursor: pointer;
    font-family: "Noto Sans KR", sans-serif;
    font-size: var(--button-font-size, 1rem);
    padding: var(--button-padding, 12px 16px);
    border-radius: var(--button-radius, 8px);
    background: var(--button-bg-color, #0d6efd);
    color: var(--button-color, #ffffff);

    &:active,
    &:hover,
    &:focus {
    background: var(--button-hover-bg-color, #025ce2);
    }

    &:disabled {
    cursor: default;
    opacity: 0.5;
    background: var(--button-bg-color, #025ce2);
    }
`;

const ImageBox = styled.div`
    float: left;
    margin-right: 70px;
`;

const Image = styled.img`
    
`;


/* [하단 프로필] */
const UserForm = styled.form`
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
    width: 100%;
`;

const InfoBox = styled.div`
   display: flex;
   width: 90%;
   align-items: center;
   margin-top: 15px;
`;

const InfoLabel = styled.div`
    margin-right: 30px;
    width: 55%;
    font-weight: 600;
`;

const Input = styled.input`
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 90%;
`

const SubmitButton = styled.button`
    width: 25%;
    height: 40px;
    border-radius: 10px;
    margin-top: 20px;
    margin-left: 450px;
    font-weight: 700;
    font-size: 13px;
    color: white;
    
    background-color: #0D6EFD;
    border-radius: 20px;
    border: none;
    outline: none;
    font-weight: bold;
    padding: 10px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 80ms ease-in;
    box-shadow: -5px -5px 10px #fff, 5px 5px 8px #babebc;
`;

/* [계좌 폼] */
const AccountInfoForm = styled.form`
    display: flex;
    margin-top: 30px;
    width: 90%;
`;

const AccountInput = styled.input`
    background-color: #eee;
    border: none;
`
const AccountInfoLabel = styled.label`
    text-align: center;
    font-weight: 600;
    width: 30%;
    margin-left: 60px;
`

const AccountInfoButton = styled.button`
    height: 40px;
    background-color: #0D6EFD;
    width: 100%;
    border-radius: 7px;
    color: white;
    font-size: 13px;
    width: 100px;
    border: none;
    outline: none;
    font-weight: bold;
    
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 80ms ease-in;
`;

export default UserInfo;