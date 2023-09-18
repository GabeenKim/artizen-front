import axios from 'axios';

{/* 승인 전 프로젝트 리스트 불러오기 :: AdminCheckList.jsx */}
export function checkList(setChecks) {
    fetch('http://localhost:9999/admin/checkList', {
        method : "GET"   
    })
    .then(res=>res.json())
    .then(res=>{
        try{
            const currentList = [];
            res.map((item) => currentList.push(item));
            let newArray = [...currentList];
            setChecks(newArray);
        }catch(err){
            console.log(err);
        }
    });
}

{/* 유저 리스트 불러오기 :: TicketItem.jsx */}
export function userList(setUsers){
    fetch('http://localhost:9999/admin/userList', {
        method : "GET"   
    })
    .then(res=>res.json())
    .then(res=>{
        try{
            const currentUser = [];
            res.map((item) => currentUser.push(item));
            let newArray = [...currentUser];
            setUsers(newArray);
        }catch(err){
            console.log(err);
        }
        try{
            const currentUser = [];
            res.map((item) => currentUser.push(item));
            let newArray = [...currentUser];
            setUsers(newArray);
        }catch(err){
            console.log(err);
        }
    });
}

{/* 프로젝트 거부 :: CheckCard.jsx */}
export function fail(contentId){
    axios.get('http://localhost:9999/admin/fail/' + contentId)
    .catch(error => {
        console.error(error);
    });
}

{/* 프로젝트 승인 :: CheckCard.jsx */}
export function ok(contentId){
    axios.get('http://localhost:9999/admin/ok/' + contentId)
    .catch(error => {
        console.error(error);
    });
}

{/* 작가 이름 불러오기 :: CheckCard.jsx */}
export function getWriterName(setName, writerId){
    axios.get('http://localhost:9999/admin/getWriterName/' + writerId)
    .then(response => {
        const data = response.data; // Promise 객체의 데이터에 접근
        setName(data);
    })
    .catch(error => {
        console.error(error);
    });
}

{/* 수익률 분배 대상 프로젝트 불러오기 :: AdminDivideList.jsx */}
export function inputOkList(setOks){
    fetch('http://localhost:9999/admin/okList', {
        method : "GET"   
    })
    .then(res=>res.json())
    .then(res=>{
        try{
            const currentList = [];
            res.map((item) => currentList.push(item));
            let newArray = [...currentList];
            setOks(newArray);
        }catch(err){
            console.log(err);
        }
    });
}

{/* 환불 대상 프로젝트 불러오기 :: AdminDivideList.jsx */}
export function inputFailList(setFails){
    fetch('http://localhost:9999/admin/failList', {
        method : "GET"   
    })
    .then(res=>res.json())
    .then(res=>{
        try{
            const currentList = [];
            res.map((item) => currentList.push(item));
            let newArray = [...currentList];
            setFails(newArray);
            console.log(newArray)
        }catch(err){
            console.log(err);
        }
    });
}


 
