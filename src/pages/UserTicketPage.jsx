import React from 'react';
import styled from 'styled-components';
import TicketItem from '../components/TicketItem';
import { useEffect, useState } from 'react';

function UserTicket() {
    
    const [tickets, setTickets] = useState([]); {/* 나의 tickets 저장 */}
    const [userId, setUserId] = useState(localStorage.getItem('userId')); 

    useEffect(()=> {
        fetch(`http://localhost:9999/ticket/${userId}`, {
            method : "GET"   
        }).then(res=>res.json())
        .then(res=>{
            const currentTickets = [];
            res.map((item) => currentTickets.push(item));
            let newArray = [...currentTickets];
            setTickets(newArray);
        });              
    }, []);
    
    return (
        <Box>
            <div>
                <Label>보유 티켓 목록</Label>
                {tickets.length > 0 
                 ?tickets.map((ticket, index) => {
                    return (
                        <TicketItem
                            key={ticket.ticketId}
                            post={ticket}
                        />
                    )
                })
                : <h2>보유 티켓 없음</h2>
                }
            </div>
        </Box>
    )
}

const Box = styled.div`
    width: 50%;
    margin-left: 600px;
`;

const Label = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

export default UserTicket;