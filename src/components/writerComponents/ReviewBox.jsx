import { Rating } from "@mui/material"
import { useCallback } from "react";
import { Fragment } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useInView } from "react-intersection-observer"
import styled from "styled-components"
import smile from '../../image/smile.png'

export default function ReviewBox({writer, reviews}){
    const [items, setItems] = useState([])
    const [page, setPage] = useState(0)

    const [ref, inView] = useInView();

    const PART = 4; //4개씩 끊어서 출력
    const getItems = useCallback(() => {
        setItems(reviews.slice(0, PART*page+PART))
    }, [page])

    console.log(items, inView, reviews.slice(PART*page, PART*page+PART));
    useEffect(()=>{
        getItems()
    }, [getItems])

    useEffect(()=>{
        if(inView){
            console.log(inView, '무한스크롤요청')
            setPage(current => current+1)
            // console.log(page)
        }
    }, [inView])


    return(
        <BOX >
        {
            writer &&
            <WriterDIV>
            <h2>{writer.NAME}</h2>
            <span>
                <Rating value={writer.AVG_SCORE} precision={0.5} readOnly/>
                <p>{Math.round(writer.AVG_SCORE*10)/10}</p>
            </span>
            </WriterDIV>
        }    
        <div style={{height:'100%', width:'50%'}}>
            {
                // items &&
                // items.map((item, index)=>(
                //     <Review item={item} key={index}/>
                // ))
                items.map((item, idx) => (
                    <Fragment key={idx}>
                    {items.length - 1 == idx ? (
                        <List ref={ref}>
                        <Review item={item} key={idx}/>
                        </List>
                    ) : (
                        <List>
                        <Review item={item} key={idx}/>
                        </List>
                    )}
                    </Fragment>
                ))

            }
            <div ref={ref} style={{textAlign:'center'}}>
                <img src={smile} style={{marginTop:'10px', width:'30px'}}/>
            </div>
        </div>
        </BOX>
    )
}

function Review({item}){
    return(
        <DIV>
            <Rating value={Number(item.SCORE)} precision={0.5} readOnly/>
            <Scorespan>{item.SCORE} </Scorespan>
            <Reviewspan>{item.REVIEW}</Reviewspan>
        </DIV>
    )
}

const BOX = styled.div`
    height: 50vh;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
const WriterDIV = styled.div`
    display: flex;
    justify-content: space-between;
    width: 50%;
    margin-top: 40px;
    span {
        display: flex;
        align-items: center;
        p {
            margin-left: 5px;
        }
    }
`

const DIV = styled.div`
    display: flex;
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    padding: 30px;
    width: 100%;
`

const Scorespan = styled.span`
    // vertical-align: top;
    margin-right: 5px;
`

const Reviewspan = styled.span`
    // vertical-align: top;
    font-size: 20px;
    margin-left: 10px;
`

const List = styled.div`
    width: 100%;
`