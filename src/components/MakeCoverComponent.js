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

    //이미지 미리보기
    const [previewImage, setPriviewImage] = useState("");
    
    //커버사진 첨부하는 기능
    const SettingCover = () =>{

        //미리보기
        const saveFileImage = (e) =>{
            console.log(e.target);
            setFileImage(e.target.files[0]);
            setPriviewImage(URL.createObjectURL(e.target.files[0]));
            console.log("fileImage"+ fileImage);
        };

        //미리보기 삭제
        const deleteFileImage = () => {
            URL.revokeObjectURL(previewImage);
            setFileImage("");
        };

        return(
            <div className="cover-img-box">
                <div className="img-box">
                    {!fileImage && ( <div className="Camera" onClick={handleCameraClick}> <Camera/> </div>) }    
                    {fileImage && (<div><img alt="sample" src={previewImage}/><div className="x" onClick={deleteFileImage}><XLg className='XLg'/></div></div>) }
                </div>
                <input className="imgUpload" name="cover_img" type="file" ref={fileInput} accept="image/*" onChange={saveFileImage}/>
            </div>
        )
        
    }

    //표지제목
    const [coverText, setCoverText] = useState("");

    //포토북 고유번호
    const [photobooknum, setPhotobookNum] = useState("");

    const changeText = (e) => {
        setCoverText(e.target.value);
    }

    //커버이미지과 커버제목 저장하는 기능필요(임시 작성...!)
    const onSummit = async() => {
        const formData = new FormData();

        formData.append("photobook_num", 3);
        formData.append("file", fileImage);
        formData.append("cover_title", coverText);

        console.log("coverTest"+coverText);
        console.log("file"+fileImage);

        await axios({
            method:"POST",
            url:"/photobookServer/MakeCover",
            mode:"cors",
            headers: {
                "Content-Type": "multipart/form-data",
            },
            data: formData
        }).then((res)=>{
            alert("전송 성공")
            
        }).catch((err)=>{
            console.log(err)
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
                                    <input type="text" placeholder="표지 제목을 입력해주세요." name="cover_title" value={coverText} onChange={changeText}>

                                    </input>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div className="next-btn">
                    <div className="next-btn-gap">
                        <div className="next-btn-wrap" >
                            <Link to="/MakeDetailComponent" onClick={onSummit}>다음</Link>
                            {/* <button onClick={onSummit}>다음</button> */}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MakeCoverComponent;