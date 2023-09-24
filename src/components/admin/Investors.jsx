import styled from "styled-components"
import InvestorInfo from "./InvestorInfo";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import user from '../../image/user.png'
import { Paper, ScopedCssBaseline } from "@mui/material";
import { useEffect, useState } from "react";
import { getFundingUserByContentId } from "../../api/funding";

export default function Investors(props){
    const [items, setItems] = useState([]);

    useEffect(()=>{
        getFundingUserByContentId(props.contentId, setItems);
        console.log(props);
    }, [])

    return(
        <Paper sx={{width: '30%', height: '70vh', textAlign: 'center'}} elevation={3} square>
            <h2>투자자 목록</h2>
            <ListDiv>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', overflow: 'auto', maxHeight: '80%'}}>
                {
                    items &&
                    items.map((item, index)=>(
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <img src={user} style={{width:"38px", height:"38px"}}/>
                        </Avatar>
                        </ListItemAvatar>
                        <InfoDiv>
                        <ListItemText primary={`${item["userInfo"].name}`}/>
                        {/* <p style={{color: "red", fontSize:"8px", margin:"0"}}>{`투자금 ${item.price}원`}{props.isSuccess &&` :: 예상수익금 0원`}</p>  */}
                        </InfoDiv>
                    </ListItem> 
                    ))
                   
                }
            </List>
            </ListDiv>
        </Paper>
    )
}

const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
`

const ListDiv = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
`