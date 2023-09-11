import React from 'react';
import styled from 'styled-components';
import TicketItem from './TicketItem';
import { useEffect, useState } from 'react';

function UserTicket() {
    
    const [tickets, setTickets] = useState([]); {/* 나의 tickets 저장 */}
    const [userId, setUserId] = useState(4); {/* localStorage 사용 예정 */}

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
        <UserTicketBox>
            <ListBox>
                <Label>보유 티켓 목록</Label>
                {tickets.map((ticket, index) => {
                    return (
                        <TicketItem
                            key={ticket.ticketId}
                            post={ticket}
                        />
                    )
                })}
            </ListBox>
        </UserTicketBox>
    )
}

const UserTicketBox = styled.div`
    width: 50%;
    margin-left: 600px;
`;

const Label = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

const ListBox = styled.div`
    
`

export default UserTicket;