import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    width: 100%;
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    border: 1px solid grey;
    border-radius: 8px;
    cursor: pointer;
    background: white;
    :hover {
        background: lightgrey;
    }
`;
const Container = styled.div`
    display: flex;
    margin: 5px 0;
`

const TitleText = styled.div`
    font-size: 20px;
    font-weight: 500;
`;

function TicketItem(props) {
    const { post, onClick } = props;
    console.log(post)
    return (
        <Container>
        <Wrapper onClick={onClick}>
            <TitleText>
                <p>{post.CONTENTNAME}</p>
                <p>{post.TICKETID}</p>
            </TitleText>
        </Wrapper>
        <button>선물</button>
        <button>QR</button>
        </Container>
    );
}

export default TicketItem;