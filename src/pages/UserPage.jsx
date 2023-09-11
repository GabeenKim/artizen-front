import React from "react";
import styled from 'styled-components'
import UserInfo from "../components/UserInfo";

function UserPage({sidebar}) {

    return (
        <UserBox>            
              <UserInfo/> 
        </UserBox>
    );
}

const UserBox = styled.div`
   width: auto;
`

export default UserPage;