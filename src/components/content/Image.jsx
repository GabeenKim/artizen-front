import React, { useState, useEffect } from 'react';
import elementalImage from '../../image/elemental.png';
import elementalImage2 from '../../image/elemental2.png';
import testImage from '../../image/test-img.jpg';
import { LiaAngleLeftSolid, LiaAngleRightSolid } from 'react-icons/lia';
// ... 다른 이미지들도 추가로 import ...

function Image({ contentId }) {
    const [data, setData] = useState(null);
    const [images, setImages] = useState([]);
    {/*const images = [elementalImage, elementalImage2, elementalImage]; // 이미지 배열 */}
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImageIdx, setCurrentImageIdx] = useState(0);

    const imageStyle = {
        width: "600px", height: "400px", objectFit: "cover",
        marginBottom: '5px'
    };

    const buttonStyle = {
        fontSize: '2rem',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        marginRight:"20px",
        marginLeft:"20px",
        color:"grey"
    };

    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }

    const indicatorStyle = {
        width: '5px',
        height: '5px',
        borderRadius: '50%',
        backgroundColor: '#bbb',
        margin: '0 2px',
        display: 'inline-block'
    };

    const activeIndicatorStyle = {
        ...indicatorStyle,
        backgroundColor: '#717171'
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) return images.length - 1; 
            return prevIndex - 1;
        });
    };


    useEffect(() => {
      fetch(`http://localhost:9999/poster/showFundingContentsDetail/${contentId}`)
        .then(response => response.json())
        .then(data => {
          setData(data);
          console.log(data.image);
          if (data && data.image) {
            setImages(data.image);
            console.log(data.image);
        }
        })
        .catch(error => {
          console.error("Error fetching data:", error);
        
        });
    }, [contentId]);

    
    if (!data) return null;

    
    return (
        <div style={containerStyle}>
            <LiaAngleLeftSolid onClick={handlePrev} style={{marginLeft:"50px",marginRight:"50px", cursor: 'pointer', fontSize: '2em', position: 'absolute', left: "-100px", top: '50%', transform: 'translateY(-50%)', zIndex: 1}} />
            <img src={images[currentIndex].imageUrl} alt="Description of Image" style={{...imageStyle, zIndex: 0}}/>
            <LiaAngleRightSolid onClick={handleNext} style={{marginLeft:"20px", marginRight:"20px", cursor: 'pointer', fontSize: '2em', position: 'absolute', right: "-60px", top: '50%', transform: 'translateY(-50%)', zIndex: 1}} />


            <div style={{marginTop: '1em', display: 'flex', justifyContent: 'center'}}>
                {images.map((_, idx) => (
                    <div key={idx} style={{...indicatorStyle, backgroundColor: currentIndex === idx ? 'black' : 'lightgray'}}></div>
                ))}
            </div>
        </div>
    );
}

export default Image;
