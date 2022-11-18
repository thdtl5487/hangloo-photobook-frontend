import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const SelectDetailOptionAlbum = ({album, setAlbum}) => {

    useEffect(()=>{
		setAlbum({...album,
            albumphotoqr:0,
            albumvideoqr:0,
            albumcontent:0,
            albumcomment:0})
    },[]);

    const [albumLayout, setAlbumLayout] = useState ({
       layout:[]
    });

    const nextOnClick = (e) => {
        if(albumLayout.layout.length<1){
            alert('사진만 포함합니다');
        }
    }

    const onChange = (e) => {
        let imsi=[];
        if(e.target.checked===true){
            setAlbumLayout({...albumLayout, layout:[...albumLayout.layout, e.target.value]});
            if(e.target.value==='photoqr'){
				if(albumLayout.layout.includes('photoqr')===false){
					setAlbum({...album, albumphotoqr:1});
				}
			}
            if(e.target.value==='videoqr'){
				if(albumLayout.layout.includes('videoqr')===false){
					setAlbum({...album, albumvideoqr:1});
				}
			}
            if(e.target.value==='notice'){
				if(albumLayout.layout.includes('notice')===false){
					setAlbum({...album, albumcontent:1});
				}
			}
            if(e.target.value==='comment'){
				if(albumLayout.layout.includes('comment')===false){
					setAlbum({...album, albumcomment:1});
				}
			}

        }
        else {
            imsi = albumLayout.layout.filter((item)=>item !== e.target.value);
            setAlbumLayout({...albumLayout, layout:imsi});
            if(e.target.value==='photoqr'){
				if(albumLayout.layout.includes('photoqr')===true){
					setAlbum({...album, albumphotoqr:0});
				}
			}
            if(e.target.value==='videoqr'){
				if(albumLayout.layout.includes('videoqr')===true){
					setAlbum({...album, albumvideoqr:0});
				}
			}
            if(e.target.value==='notice'){
				if(albumLayout.layout.includes('notice')===true){
					setAlbum({...album, albumcontent:0});
				}
			}
            if(e.target.value==='comment'){
				if(albumLayout.layout.includes('comment')===true){
					setAlbum({...album, albumcomment:0});
				}
			}
        }
    }


    return (
        <div id="option-album">
            <div className="wrap">
                <div className="step2">
                    <div className="step2-gap">
                        <div className="step2-wrap">
                            <p>Step2. 삽입할 항목을 선택해 주세요.(앨범)</p>
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
                                                                albumLayout.layout.includes('photoqr') && (
                                                                    <div className="photo-qr">사진qr</div>
                                                                )
                                                            )
                                                        }
                                                        {
                                                            (
                                                                albumLayout.layout.includes('videoqr') && (
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
                                                                albumLayout.layout.includes('notice') && (
                                                                    <li className="notice">
                                                                        <div className="li-wrap">
                                                                            게시글 영역
                                                                        </div>
                                                                    </li>
                                                                )
                                                            )
                                                        }

                                                        {
                                                            (
                                                                albumLayout.layout.includes('comment') && (
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
                                        <li className={albumLayout.layout.includes('photoqr')?'on':''}>
                                            <label htmlFor="photoqr">
                                                <input type="checkbox" checked={albumLayout.layout.includes('photoqr')} onChange={onChange} id="photoqr" name="photoqr" value="photoqr" />
                                                <div className="text">
                                                    <p>사진 QR 코드를 앨범에 포함합니다</p>
                                                </div>
                                            </label>
                                        </li>
                                        <li className={albumLayout.layout.includes('videoqr')?'on':''}>
                                            <label htmlFor="videoqr">
                                                <input type="checkbox" checked={albumLayout.layout.includes('videoqr')} onChange={onChange} id="videoqr" name="videoqr" value="videoqr" />
                                                <div className="text">
                                                    <p>영상 QR 코드를 앨범에 포함합니다</p>
                                                </div>
                                            </label>
                                        </li>
                                        <li className={albumLayout.layout.includes('notice')?'on':''}>
                                            <label htmlFor="notice">
                                                <input type="checkbox" checked={albumLayout.layout.includes('notice')} onChange={onChange} id="notice" name="notice" value="notice" />
                                                <div className="text">
                                                    <p>게시글을 앨범에 포함합니다</p>
                                                </div>
                                            </label>
                                        </li>
                                        <li className={albumLayout.layout.includes('comment')?'on':''}>
                                            <label htmlFor="comment">
                                                <input type="checkbox" checked={albumLayout.layout.includes('comment')} onChange={onChange} id="comment" name="comment" value="comment" />
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
                            <Link to="/SelectDateNote" onClick={nextOnClick}>다음</Link>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default SelectDetailOptionAlbum;