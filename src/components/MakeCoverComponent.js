import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, XLg } from 'react-bootstrap-icons';
import { useCallback } from 'react';
import { useState } from 'react';
import axios from 'axios';

const MakeCoverComponent = () => {

    const fileInput = React.useRef(null);

    const handleCameraClick = (e) => {
        fileInput.current.click();
    }
    
    //이미지 첨부파일
    const [fileImage, setFileImage] = useState("");
    
    //커버사진 첨부하는 기능
    const SettingCover = () =>{

        //미리보기
        const saveFileImage = (e) =>{
            console.log(e.target);
            setFileImage(URL.createObjectURL(e.target.files[0]));
            console.log(fileImage);
        };

        //미리보기 삭제
        const deleteFileImage = () => {
            URL.revokeObjectURL(fileImage);
            setFileImage("");
        };

        return(
            <div className="cover-img-box">
                <div className="img-box">
                    {!fileImage && ( <div className="Camera" onClick={handleCameraClick}> <Camera/> </div>) }    
                    {fileImage && (<div><img alt="sample" src={fileImage}/><div className="x" onClick={deleteFileImage}><XLg className='XLg'/></div></div>) }
                </div>
                <input className="imgUpload" type="file" ref={fileInput} accept="image/*" onChange={saveFileImage}/>
            </div>
        )
        
    }

    //표지제목
    const [coverText, setCoverText] = useState("");

    const changeText = (e) => {
        setCoverText(e.target.value);
    }

    //커버이미지과 커버제목 저장하는 기능필요(임시 작성...!)
    const onSummit = async() => {
        const formData = new FormData();

        formData.append("file", fileImage);
        formData.append("text", coverText);

        console.log(coverText);
        console.log(fileImage);

        await axios({
            method:"POST",
            url:"http:////",
            mode:"cors",
            headers: {
                "Content-Type": "multipart/form-data",
              },
              data: formData,
        })

    }

    return (        
        <div id="makeCover">
            <div className="wrap">
                
                <div className="step5">
                  <div className="step5-gap">
                    <div className="step5-wrap">
                      <p>Step5. 포토북 표지를 만들어주세요</p>    
                    </div>
                  </div>
                </div>

                <div className="cover">
                    <div className="cover-gap">
                        <div className="cover-wrap">
                            <div className="cover-img">
                                <SettingCover/>
                            </div>
                            <div className="cover-title">
                                <div className="title-text">
                                    <input type="text" placeholder="표지 제목을 입력해주세요." value={coverText} onChange={changeText}>

                                    </input>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="next-btn">
                    <div className="next-btn-gap">
                        <div className="next-btn-wrap" >
                            <Link to="/SelectKidsComponent" onClick={onSummit}>다음</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MakeCoverComponent;