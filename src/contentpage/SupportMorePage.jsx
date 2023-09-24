import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
import MenuBar from '../components/MenuBar'; 
import Footer from '../components/Footer';
import { ContainerBody, LastOuterContainer } from "../styles/BodyStyle";



  export default function MovieList() {
    
    const location = useLocation();
    const categoryFromState = location.state?.category;
    const getContentList = async () => {
      const resp = await fetch('http://localhost:9999/poster/showAllSupportContents');
      const data = await resp.json(); // Convert the response to JSON format
      const filteredData = data.filter(content => content.category === categoryFromState); // Filter data by category
      setContentList(filteredData);
  }


    const navigate = useNavigate();
    const [contentList, setContentList] = useState([]);
    
    useEffect(() => {
        getContentList(); // 1) 게시글 목록 조회 함수 호출
    }, []);


      const rows = contentList.map((content) => ({
        posterUrl: content.image[0].imageUrl,
        category: content.category,
        id: content.contentId,
        name: content.contentName,
        target : content.target,
        
      }));

      console.log(rows)
      const columns = [
        {
          field:'poster',
          headerName:'Poster',
          width :160,
          renderCell:(params)=>(
            params.row.posterUrl ? <img src={params.row.posterUrl} alt="poster" style={{width:"100px",height:"100px"}}/> : null
            ),
          },
      { field: 'category', headerName: 'Category', width: 130 },
      {
          field:'contentName',
          headerName:'Content Name',
          width :160,
          renderCell:(params)=>(
          <Link to={`/FundingContentDetail/${params.row.id}`}>{params.row.name}</Link>
          ),
          },
      { field: 'target', headerName: 'target', width: 70 },    
      ];

      return (
        <LastOuterContainer>
          <MenuBar/>
          <ContainerBody>
            <Container maxWidth="md" sx={{ height: '100vh', overflow: 'auto' }}>
              <DataGrid
                  rows={rows}
                  rowHeight={150} 
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 7 },
                    },
                  }}
                  pageSizeOptions={[5,10]}
                  checkboxSelection
                  />
          </Container>
        </ContainerBody>
        
        <Footer/>
        </LastOuterContainer>
      );
  }