import Footer from "../components/Footer";
import MenuBar from "../components/MenuBar";
import UserPage from "./UserPage";
import UserSidebar from "../components/UserSidebar";
import UserTicket from "../components/UserTicket";
import { useEffect, useState } from "react";



function MyPage(){
    const [sidebar, setSidebar] = useState("/info");
    
    useEffect(()=>{

    }, [sidebar]);

    return (
        <div>
            {/* 메뉴 바*/}
            <MenuBar/>
            
            {/* 사이드 바 */}
            <UserSidebar setSidebar={setSidebar}/>

            
            {/* 일반 유저 */}
            {
                sidebar == "/info" ? <UserPage/> : 
                sidebar == "/fundingList" ? <div>t2</div> : 
                sidebar == "/ticketList" ? <UserTicket/>:
                sidebar == "/t4" ? <div>t4</div> : null
            }           
            {/* 작가 */}

            <div style={{paddingTop:"150px"}}>
            
            </div>        

            {/* Footer */}
            <Footer/>
        </div>
    )
}

export default MyPage;