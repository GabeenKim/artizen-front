import React from 'react';
import { useEffect, useState } from 'react';
import Footer from "../../components/Footer";
import MenuBar from "../../components/MenuBar";
import AdminSiderbar from '../../components/admin/AdminSiderbar';
import AdminCheckList from '../../components/admin/AdminCheckList';
import AdminDivideList from '../../components/admin/AdminDivideList';

function AdminPage(){
    const [sidebar, setSidebar] = useState("/home");
    
    {/* sidebar 상태값 변경 */}
    useEffect(()=>{
       
    }, [sidebar]);

    return (
        <div style={{width:"100%"}}>
            <MenuBar/>
            <AdminSiderbar setSidebar={setSidebar}/>     
            {
                sidebar == "/home" ?
                <h2>home</h2> :
                sidebar == "/project" ?
                <AdminCheckList/> : <AdminDivideList/>
            }
            <div style={{marginTop:"100px"}}>
            </div>
            <Footer/>
        </div>
    )
}

export default AdminPage;