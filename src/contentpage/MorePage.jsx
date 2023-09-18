import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import oppen from './oppen.jfif';
import { DataGrid } from '@mui/x-data-grid';
import MenuBar from '../../src/components/MenuBar'; 
import Footer from '../../src/components/Footer';
import { ContainerBody } from "../styles/BodyStyle";



  export default function MovieList() {

    const navigate = useNavigate();
    const [contentList, setContentList] = useState([]);
   


    const getContentList = async () => {
        const resp = await (axios.get('http://10.10.221.40:9999/poster/showAllContents')); // 2) 게시글 목록 데이터에 할당  
        setContentList(resp.data); // 3) boardList 변수에 할당
        console.log(resp.data);
        }
    
        useEffect(() => {
        getContentList(); // 1) 게시글 목록 조회 함수 호출
        }, []);


    const rows = contentList.map((content) => ({
        posterUrl: oppen ,
        category: content.category,
        id: content.contentId,
      
        name: content.contentName,
        target : content.target,
        
        }));
        const columns = [
          {
            field:'poster',
            headerName:'Poster',
            width :160,
            renderCell:(params)=>(
              <img src={params.row.posterUrl} alt="poster" style={{width:"50px",height:"50px"}}/>
              ),
           },
        { field: 'category', headerName: 'Category', width: 130 },
        { field: 'contentId', headerName: 'ID', width: 70 },
        {
            field:'contentName',
            headerName:'Content Name',
            width :160,
            renderCell:(params)=>(
            <Link to={`/content/${params.row.id}`}>{params.row.name}</Link>
            ),
            },
        { field: 'target', headerName: 'target', width: 70 },    
        ];

      return (
        <>
          <MenuBar/>
          <ContainerBody>
            <Container maxWidth="md" sx={{ height: '100vh', overflow: 'auto' }}>
              <DataGrid
                  rows={rows}
                  rowHeight={100} 
                  columns={columns}
                  pageSizeOptions={[5,10]}
                  pageSize={5} 
                  checkboxSelection
                  />
          </Container>
        <Footer/>
        </ContainerBody>

        </>
      );
  }