import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import UserPage from "./UserPage";
import UserSidebar from "../components/UserSidebar";
import UserTicketPage from "./UserTicketPage";
import UserFundingPage from "./UserFundingPage";
import WriterSidebar from "../components/WriterSidebar";
import { useEffect, useState } from "react";



function MyPage(){
    const [sidebar, setSidebar] = useState("/info");
    
    {/* sidebar 상태값 변경 */}
    useEffect(()=>{
        
    }, [sidebar]);

    
    return (
        <div>
            {/* 메뉴 바*/}
            <MenuBar/>
            
            {/* 사이드 바 */}
            
            {
                Object.keys(localStorage).includes('writerId') == false ?
                <UserSidebar setSidebar={setSidebar}/> :
                <WriterSidebar setSidebar={setSidebar}/>
            }

            {/* localStorage key로 작가 & 일반 유저 구분 */}
            {
                Object.keys(localStorage).includes('writerId') == false ?
                sidebar == "/info" ? <UserPage/> : 
                sidebar == "/fundingList" ? <UserFundingPage/> : 
                sidebar == "/ticketList" ? <UserTicketPage/>:
                sidebar == "/jjimList" ? <div>t4</div> : null
                : 
                sidebar == "/info" ? <UserPage/> : <h2>test</h2> 
            }

            <div style={{paddingTop:"150px"}}>
            </div>        
            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default MyPage;