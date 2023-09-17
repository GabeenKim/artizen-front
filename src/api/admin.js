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
    });
}

{/* 작가 이름 불러오기 :: CheckCard.jsx */}
export function getWriterName(setName, writerId){
    axios.get('http://localhost:9999/admin/getWriterName/' + writerId)
    .then(response => {
        const data = response.data; // Promise 객체의 데이터에 접근
        // 데이터 활용
        setName(data);
    })
    .catch(error => {
        // 에러 처리
        console.error(error);
    });
}



 