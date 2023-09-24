import React, { useState, useEffect} from 'react';
import { Outlet, Link } from "react-router-dom"
import { login } from '../../api/login'
import { useNavigate } from 'react-router-dom'; 


const LikeCompo = () => {
  const [contents, setContents] = useState([]);
  
  useEffect(() => {
    const contentId = localStorage.getItem('contentId');
    const newContentId = contentId ? JSON.parse(contentId) : [];

    const fetchContents = async () => {
      let fetchedContents = [];

      for (let id of newContentId) {
          fetch(`http://localhost:8080/contents/showFundingContentsDetail/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((res)=>res.json())
          .then((res) => {
              fetchedContents.push(res);})
          .catch((err) => {console.error(err);});

          fetch(`http://localhost:8080/contents/showSupportContentsDetail/${id}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          })
          .then((res)=>res.json())
          .then((res) => {
              fetchedContents.push(res);})
          .catch((err) => {console.error(err);});

      }

      setContents(fetchedContents);
    };

    fetchContents();
  }, []);

  return ( 
    <div>
      {contents.map((content, index) => (
        <div key={index} style={{ border: '1px solid black', margin: '10px', padding: '10px' }}>
          <img src={content.image} alt={content.contentName} style={{ width: '10px', height:'10px' }} />
          <p>{content.contentName}</p>
        </div>
      ))}
    </div>
  );
};

export default LikeCompo;