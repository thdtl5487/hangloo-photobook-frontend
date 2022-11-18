import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SelectDetailOptionNote = ({albumnote, note, setNote}) => {

    useEffect(()=>{
		setNote({...note, notephotoqr:0, notevideoqr:0, notestatus:0, notecontent:0, notecomment:0})
    },[]);

    const [noteLayout, setNoteLayout] = useState ({
        layout:[]
     });

    const noteAlbumSelect = (e) =>{
        if(albumnote.albumnote.includes('album')===true){
            return(
                <Link to="/SelectDetailOptionAlbum" onClick={nextOnClick}>다음</Link>
            )
        }
        else {
            return(
                <Link to="/SelectDateNote" onClick={nextOnClick}>다음</Link>
            )
        }
    }

    const nextOnClick = (e) => {
        if(noteLayout.layout.length<1){
            alert('사진만 포함합니다');
        }
    }
    

    
    const onChange = (e) => {
        let imsi=[];
        if(e.target.checked===true){
            setNoteLayout({...noteLayout, layout:[...noteLayout.layout, e.target.value]});
            if(e.target.value==='photoqr'){
				if(noteLayout.layout.includes('photoqr')===false){
					setNote({...note, notephotoqr:1});
				}
			}
            if(e.target.value==='videoqr'){
				if(noteLayout.layout.includes('videoqr')===false){
					setNote({...note, notevideoqr:1});
				}
			}
            if(e.target.value==='status'){
				if(noteLayout.layout.includes('status')===false){
					setNote({...note, notestatus:1});
				}
			}
            if(e.target.value==='notice'){
				if(noteLayout.layout.includes('notice')===false){
					setNote({...note, notecontent:1});
				}
			}
            if(e.target.value==='comment'){
				if(noteLayout.layout.includes('comment')===false){
					setNote({...note, notecomment:1});
				}
			}
        }
        else {
            imsi = noteLayout.layout.filter((item)=>item !== e.target.value);
            setNoteLayout({...noteLayout, layout:imsi});
            if(e.target.value==='photoqr'){
				if(noteLayout.layout.includes('photoqr')===true){
					setNote({...note, notephotoqr:0});
				}
			}
            if(e.target.value==='videoqr'){
				if(noteLayout.layout.includes('videoqr')===true){
					setNote({...note, notevideoqr:0});
				}
			}
            if(e.target.value==='status'){
				if(noteLayout.layout.includes('status')===true){
					setNote({...note, notestatus:0});
				}
			}
            if(e.target.value==='notice'){
				if(noteLayout.layout.includes('notice')===true){
					setNote({...note, notecontent:0});
				}
			}
            if(e.target.value==='comment'){
				if(noteLayout.layout.includes('comment')===true){
					setNote({...note, notecomment:0});
				}
			}
        }
    }


    return (
        <div id="option-note">
            <div className="wrap">
                <div className="step2">
                    <div className="step2-gap">
                        <div className="step2-wrap">
                            <p>Step2. 삽입할 항목을 선택해 주세요.(알림장)</p>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="content-gap">
                        <div className="content-wrap">
                            <div className="example">
                                <div className="example-gap">
                                    <div className="example-wrap">
                                        <div className="top">
                                            <div className="top-gap">
                                                <div className="top-wrap">
                                                    <div className="setdate">
                                                        <p className="month">10</p>
                                                        <p className="date">21</p>
                                                        <p className="day">금요일</p>
                                                    </div>
                                                    <div className="qrcode">
                                                        {
                                                            (
                                                                noteLayout.layout.includes('photoqr') && (
                                                                    <div className="photo-qr">사진qr</div>
                                                                )
                                                            )
                                                        }
                                                        {
                                                            (
                                                                noteLayout.layout.includes('videoqr') && (
                                                                    <div className="video-qr">영상qr</div>
                                                                )
                                                            )
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="middle">
                                            <div className="middle-gap">
                                                <div className="middle-wrap">
                                                    <div className="photo-section">
                                                        사진 영역
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <div className="bottom-gap">
                                                <ul className="bottom-wrap">
                                                        {
                                                            (
                                                                noteLayout.layout.includes('status') && (
                                                                    <li className="status">
                                                                        <div className="li-wrap">
                                                                            아이 상태 영역
                                                                        </div>
                                                                    </li>
                                                                )
                                                            )
                                                        }
                                                        {
                                                            (
                                                                noteLayout.layout.includes('notice') && (
                                                                    <li className="notice">
                                                                        <div className="li-wrap">
                                                                            알림장 영역
                                                                        </div>
                                                                    </li>
                                                                )
                                                            )
                                                        }

                                                        {
                                                            (
                                                                noteLayout.layout.includes('comment') && (
                                                                    <li className="comment">
                                                                        <div className="li-wrap">
                                                                            댓글 영역
                                                                        </div>
                                                                    </li>
                                                                )
                                                            )
                                                        }
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="option">
                                <div className="option-gap">
                                    <ul className="option-wrap">
                                        <li className={noteLayout.layout.includes('photoqr')?'on':''}>
                                            <label htmlFor="photoqr">
                                                <input type="checkbox" checked={noteLayout.layout.includes('photoqr')} onChange={onChange} id="photoqr" name="photoqr" value="photoqr" />
                                                <div className="text">
                                                    <p>사진 QR 코드를 앨범에 포함합니다</p>
                                                </div>
                                            </label>
                                        </li>
                                        <li className={noteLayout.layout.includes('videoqr')?'on':''}>
                                            <label htmlFor="videoqr">
                                                <input type="checkbox" checked={noteLayout.layout.includes('videoqr')} onChange={onChange} id="videoqr" name="videoqr" value="videoqr" />
                                                <div className="text">
                                                    <p>영상 QR 코드를 앨범에 포함합니다</p>
                                                </div>
                                            </label>
                                        </li>
                                        <li className={noteLayout.layout.includes('status')?'on':''}>
                                            <label htmlFor="status">
                                                <input type="checkbox" checked={noteLayout.layout.includes('status')} onChange={onChange} id="status" name="status" value="status" />
                                                <div className="text">
                                                    <p>아이의 상태를 앨범에 포함합니다</p>
                                                </div>
                                            </label>
                                        </li>
                                        <li className={noteLayout.layout.includes('notice')?'on':''}>
                                            <label htmlFor="notice">
                                                <input type="checkbox" checked={noteLayout.layout.includes('notice')} onChange={onChange} id="notice" name="notice" value="notice" />
                                                <div className="text">
                                                    <p>알림장을 앨범에 포함합니다</p>
                                                </div>
                                            </label>
                                        </li>
                                        <li className={noteLayout.layout.includes('comment')?'on':''}>
                                            <label htmlFor="comment">
                                                <input type="checkbox" checked={noteLayout.layout.includes('comment')} onChange={onChange} id="comment" name="comment" value="comment" />
                                                <div className="text">
                                                    <p>댓글을 앨범에 포함합니다</p>
                                                </div>
                                            </label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="next-btn">
                    <div className="next-btn-gap">
                        <div className="next-btn-wrap">
                            {noteAlbumSelect()}
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default SelectDetailOptionNote;