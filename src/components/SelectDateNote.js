import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import thumbnail from '../images/hard.jpg';

const SelectDateNote = ({album}) => {
    const [ cnt, setCnt ] = useState(2022);
    const addEvent=(event)=>{
        event.preventDefault();   
        setCnt(cnt+1);
    }
    const subEvent=(event)=>{
        event.preventDefault();   
        setCnt(cnt-1);
    }
    const monthAlbum = album.map(monthAlbum=>{
        return (
            <li key = {monthAlbum.월}>
                <div class="box">
                    <div class="box-gap">
                        <div class="box-wrap">
                            <div class="top">
                                <div class="check-month">{monthAlbum.월}월</div>
                                <input type="checkbox" />
                            </div>
                            <div class="middle">
                                <div class="middle-gap">
                                    <div class="middle-wrap">
                                        <img src={thumbnail} alt="thumbnail" />
                                    </div>
                                </div>
                            </div>
                            <div class="modal-open">
                                <div class="modal-open-gap">
                                    <div class="modal-open-wrap">
                                        상세편집
                                    </div>
                                </div>
                            </div>
                            <div class="bottom">
                                <div class="bottom-gap">
                                    <div class="bottom-wrap">
                                        <div class="check-note">알림장 {monthAlbum.알림장}개</div>
                                        <div class="check-photo">사진 {monthAlbum.사진}개</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        )
    })    

    return (
        <div id="date-note">
            <div className="wrap">
                <div className="step3">
                    <div className="step3-gap">
                        <div className="step3-wrap">
                            <p>Step3. 삽입할 항목을 선택해 주세요.</p>
                        </div>
                    </div>
                </div>
                <div className="year">
                    <div className="year-gap">
                        <div className="year-wrap">
                            <div className="sub" onClick={subEvent}><i className="material-icons">keyboard_arrow_left</i></div>
                            <div className="year-box">{cnt}</div>
                            <div className="add" onClick={addEvent}><i className="material-icons">keyboard_arrow_right</i></div>
                        </div>
                    </div>
                </div>
                <div className="select-or-not">
                    <div class="select-or-not-gap">
                        <ul class="select-or-not-wrap">
                            <li>
                                <label htmlFor="selectall">
                                    <input type="checkbox" id="selectall" name="selectall" value="selectall" />
                                    <div className="text">
                                        <p>전체 선택</p>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label htmlFor="selectnone">
                                    <input type="checkbox" id="selectnone" name="selectnone" value="selectnone" />
                                    <div className="text">
                                        <p>전체 해제</p>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="month">
                    <div class="month-gap">
                        <ul class="month-wrap">
                            {monthAlbum}
                        </ul>
                    </div>
                </div>
                <div className="next-btn">
                    <div className="next-btn-gap">
                        <div className="next-btn-wrap">
                            <Link to="/SelectDateNote">다음</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
SelectDateNote.defaultProps = {
    album: [
        {월:1, 썸네일:{thumbnail}, 알림장:2, 사진:8},
        {월:2, 썸네일:{thumbnail}, 알림장:3, 사진:23},
        {월:3, 썸네일:{thumbnail}, 알림장:8, 사진:33},
        {월:4, 썸네일:{thumbnail}, 알림장:19, 사진:41},
        {월:5, 썸네일:{thumbnail}, 알림장:11, 사진:37},
        {월:6, 썸네일:{thumbnail}, 알림장:3, 사진:33},
        {월:7, 썸네일:{thumbnail}, 알림장:17, 사진:12},
        {월:8, 썸네일:{thumbnail}, 알림장:21, 사진:21},
        {월:10, 썸네일:{thumbnail}, 알림장:16, 사진:26},
        {월:11, 썸네일:{thumbnail}, 알림장:2, 사진:32},
        {월:12, 썸네일:{thumbnail}, 알림장:13, 사진:29}
    ]
}

export default SelectDateNote;