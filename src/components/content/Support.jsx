import React, { useState, useEffect } from 'react';


function Support({ contentId }) {
    const [data, setData] = useState(null);

    useEffect(() => {
      fetch(`http://localhost:8080/contents/showFundingContentsDetail/${contentId}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.writer);
          setData(data);
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        });
    }, [contentId]);


    if (!data) return null;

    return (
        <div>
            
        </div>

    );
}

export default Support;