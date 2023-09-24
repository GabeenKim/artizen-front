import { useState } from 'react';
import "./uploader.scss";
import Button from '@mui/joy/Button';
import axios from 'axios';

const Uploader = ({onUpload}) => {

  const [image, setImage] = useState({
    image_file: "",
    preview_URL: "img/default_image.png",
  });

  let inputRef;

  const saveImage = (e) => {
    e.preventDefault();
    console.log("이미지 프리뷰")
    const fileReader = new FileReader();
    
    if(e.target.files[0]){
      fileReader.readAsDataURL(e.target.files[0])
    }
    fileReader.onload = () => {
      setImage(
        {
          image_file: e.target.files[0],
          preview_URL: fileReader.result
        }
      )
    }
    
  }

  const deleteImage = () => {
    setImage({
      image_file: "",
      preview_URL: "img/default_image.png",
    });
  }

  const sendImageToServer = async (e) => {
    e.preventDefault();
    if(image.image_file){
      const formData = new FormData()
    
      formData.append('uploadFile', image.image_file);
      
      fetch('http://localhost:9999/image/upload', {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        
       
        onUpload(data);
        
      }).catch(error => {
        console.log(error);
      })
    }
     
  }

  return (
    <div className="uploader-wrapper">
      <input type="file" accept="image/*" 
        onChange={saveImage}
        // 클릭할 때 마다 file input의 value를 초기화 하지 않으면 버그가 발생할 수 있다
        // 사진 등록을 두개 띄우고 첫번째에 사진을 올리고 지우고 두번째에 같은 사진을 올리면 그 값이 남아있음!
        onClick={(e)=>e.target.value = null}
        ref={refParam => inputRef = refParam}
        style={{ display: "none" }}
      />
      <div className="img-wrapper">
        <img src={image.preview_URL} />
      </div>

      <div className="upload-button">
        <Button type="primary" variant="contained" onClick={() => inputRef.click()}>
          Preview
        </Button>
        {/* <Button color="error" variant="contained" onClick={deleteImage}>
          Delete
        </Button> */}
        <Button color="success" variant="contained" onClick={sendImageToServer}>
          Upload
        </Button>
      </div>

    </div>
  );
}

export default Uploader;