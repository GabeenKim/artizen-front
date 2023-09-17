import React from 'react';
import AdminSiderbar from '../../components/admin/AdminSiderbar';
import { useEffect, useState } from 'react';
import AdminCheckList from '../../components/admin/AdminCheckList';

function AdminPage(){
    const [sidebar, setSidebar] = useState("/home");
    
    {/* sidebar 상태값 변경 */}
    useEffect(()=>{
       
    }, [sidebar]);

    return (
        <div style={{width:"100%"}}>
            <AdminSiderbar setSidebar={setSidebar}/>     
            {
                sidebar == "/home" ?
                <h2>home</h2> :
                sidebar == "/project" ?
                <AdminCheckList/> : null
            }
        </div>
    )
}

export default AdminPage;