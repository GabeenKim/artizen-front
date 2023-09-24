import React, { useState, useEffect } from 'react';
//import moment from 'moment';

function Info2({ contentId }) {
    const [data, setData] = useState(null);
    const [startDay, setStartDay] = useState("");
    const [endDay, setEndDay] = useState("");
    const [payDay, setPayDay] = useState("");

    useEffect(() => {
      fetch(`http://localhost:9999/poster/showSupportContentsDetail/${contentId}`)
        .then(response => response.json())
        .then(data => {
            setData(data);
            setStartDay(''.concat(new Date(data.startDay).getFullYear(), "-" , new Date(data.startDay).getMonth() + 1, "-", new Date(data.startDay).getDate()));
            setEndDay(''.concat(new Date(data.endDay).getFullYear(), "-" , new Date(data.endDay).getMonth() + 1, "-", new Date(data.endDay).getDate()));
            setPayDay(''.concat(new Date(data.endDay).getFullYear(), "-" , new Date(data.endDay).getMonth() + 1, "-", new Date(data.endDay).getDay()))
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }, [contentId]);

    //const nextDay = moment(data.endDay).add(1, 'days').toDate();

    if (!data) return null;

    return (
        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ marginRight: "90px", display: "flex", flexDirection: "column" }}>
            <h4 style={{ marginBottom: '0px', fontWeight: 350 }}>모인금액</h4>
            <h2 style={{ marginTop: '0px' }}>{parseInt(data.contentSum).toLocaleString()}</h2>
        </div>
        <div style={{ marginRight: "90px", display:"flex", flexDirection:"column" }}>
            <h4 style={{ marginTop: '0px', marginBottom: '0px', fontWeight: 350  }}>목표 금액</h4>
            <h2 style={{ marginTop: '0px' }}>{parseInt(data.target).toLocaleString()}</h2>
        </div>
        <div style={{ display:"flex", flexDirection:"column" }}>
            <h4 style={{ marginTop: '0px', marginBottom: '0px', fontWeight: 350  }}>기간</h4>
            <h2 style={{ marginTop: '0px' }}>{startDay} ~ {endDay}</h2>
        </div>
        <div style={{ 
            height: '0.5px', 
            background: '#F5F5F5', 
            boxShadow: '0px 0px 1px rgba(0, 0, 0, 0.1)', 
            margin: '3px 0', width:"400px"}}>
        </div>
       
            <div style={{ display:"flex" }}>
                <h5 style={{ marginTop: '20px', marginBottom: '0px', fontWeight: 450, marginRight:'50px'  }}><b>작가</b></h5>
                <h5 style={{ marginTop: '20px', fontWeight: 200 }}>Jame</h5>
            </div>
            <div style={{ display:"flex" }}>
                <h5 style={{ marginTop: '-5px', marginBottom: '0px', fontWeight: 450, marginRight:'50px'  }}><b>결제</b></h5>
                <h5 style={{ marginTop: '-5px', fontWeight: 350 }}>{payDay} 에 결제 진행</h5>
            </div>
     
    </div>

    );
}

export default Info2;
