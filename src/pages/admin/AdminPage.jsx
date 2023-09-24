import React from 'react';
import { useEffect, useState } from 'react';
import Footer from "../../components/Footer";
import MenuBar from "../../components/MenuBar";
import AdminSiderbar from '../../components/admin/AdminSiderbar';
import AdminCheckList from '../../components/admin/AdminCheckList';
import AdminDivideList from '../../components/admin/AdminDivideList';
import AdminHome from '../../components/admin/AdminHome';
import { ContainerBody, LastOuterContainer } from "../../styles/BodyStyle";

function AdminPage(){
    const [sidebar, setSidebar] = useState("/home");
    
    {/* sidebar 상태값 변경 */}
    useEffect(()=>{
       
    }, [sidebar]);

    return (
        <LastOuterContainer>
          
            <MenuBar/>
            <AdminSiderbar setSidebar={setSidebar}/>     
            {
                sidebar == "/home" ?
                <AdminHome/> :
                sidebar == "/project" ?
                <AdminCheckList/> : <AdminDivideList/>
            }
            
        </LastOuterContainer>
    )
}

export default AdminPage;