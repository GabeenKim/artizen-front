import React from "react";
import styled from 'styled-components'
import UserInfo from "../components/UserInfo";

function UserPage({sidebar}) {

    return (
        <Box>            
              <UserInfo/> 
        </Box>
    );
}

const Box = styled.div`
  margin: auto;
`

export default UserPage;