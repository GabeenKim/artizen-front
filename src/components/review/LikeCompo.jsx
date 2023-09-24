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
        try {
          const response1 = await fetch(`http://localhost:9999/poster/showFundingContentsDetail/${id}`);
          
          if (response1.ok) {
            const data1 = await response1.json();
            fetchedContents.push(data1);
          }
          else {
            throw new Error('Failed to fetch data');
          }
        } catch (error) {
          console.error('Error:', error);
        }

        try {
          const response2 = await fetch(`http://localhost:9999/poster/showSupportContentsDetail/${id}`);
          
          if (response2.ok) {
            const data2 = await response2.json();
            fetchedContents.push(data2);
          }
          else {
            throw new Error('Failed to fetch data');
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }

      setContents(fetchedContents);
    };

    fetchContents();
  }, []);

  return ( 
    <div>
        <div style={{boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",padding:"20px"}}>
          <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {contents.map((content, index) => (
            <div key={index} style={{ border: 'none', margin: '10px', padding: '10px', width: '200px', height:'230px', display:"flex", flexDirection:"column" }}>
              <img src={content.image[0].imageUrl} alt={content.contentName} style={{ width: '100%', height:'100%', objectFit: "cover" }} />
              <p style={{marginLeft:"10px"}}>{content.contentName}</p>
            </div>
          ))}
          </div>
        </div>
    </div>
  );
};

export default LikeCompo;
