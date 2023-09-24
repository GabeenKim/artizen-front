import React, { useState, useEffect } from 'react';

function Title2({ contentId }) {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(`http://localhost:9999/poster/showSupportContentsDetail/${contentId}`)
        .then(response => response.json())
        .then(data => {
          setData(data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }, [contentId]);

    

    if (!data) return null;

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <button style={{ 
                    position: "relative", 
                    background: "#f5f5f5", 
                    border: "1px solid #ddd", 
                    borderRadius: "5px",
                    width: "70px", 
                    height: "35px",
                    fontSize:"16px",
                }}>
                    { data.category == "movie" ? "영화" : 
                      data.category == "exhibition" ? "전시" :
                      data.category == "show" ? "공연" : null}
                </button>  
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>     
                <h1 style={{ marginTop:"15px", fontSize:"40px", }}>{data.contentName}</h1>  
            </div>
            
        </div>
    );
}

export default Title2;