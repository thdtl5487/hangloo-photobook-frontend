import React from 'react';
import { Link } from 'react-router-dom';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, isSameMonth, isSameDay, parse } from 'date-fns';
import { CaretRightFill, CaretLeftFill } from 'react-bootstrap-icons';
import { ArrowRepeat, ArrowDownUp } from 'react-bootstrap-icons';
import { CheckCircleFill, CheckCircle } from 'react-bootstrap-icons';
import { useState } from 'react';
import { addDays, endOfWeek } from 'date-fns/esm';
import { useEffect } from 'react';

const MakeDetailNote = () => {

    const List = () => {

        return(
            <div className="list">
                <div className="list-text">
                    <span className="ym"> 2020년 3월 </span> <span className="page"> 23페이지 </span>
                </div>
            </div>
        )

    }

    const DaysList = () => {
        
        return(
            <div className="dayslist">
                <li>
                    <CaretLeftFill className="CaretLeftFill"/>
                    <div className="days">23</div>
                    <CaretRightFill className="CaretRightFill"/>
                </li>
                
            </div>

        )
    }

    const [opt, setOpt] = useState('note');

    const optChange = (e) => {
        console.log(e.target.value)
        setOpt(e.target.value)
    }

    const Option = () => {

        return(
            <div className="option-wrap">
                <input type="radio" id="opt-note" name="opt" value="note" onChange={optChange} checked={opt.includes('note')}>
                </input>
                <label className="opt-note-btn" htmlFor="opt-note">알림장</label>

                <input type="radio" id="opt-album" name="opt" value="album" onChange={optChange} checked={opt.includes('album')}>
                </input>
                <label className="opt-album-btn" htmlFor="opt-album">사진앨범</label>
            </div>
        )
    }

    const Top = () => {
        return(
            <div className="top-gap">
                <div className="top-wrap">
                    <div className="setdate">
                        <p className="month">10</p>
                        <p className="date">21</p>
                        <p className="day">금요일</p>
                    </div>
                    <div className="qrcode">
                        <div className="photo-qr">사진qr</div>
                        <div className="video-qr">영상qr</div>
                    </div>
                </div>
            </div>
        )
    }

    const Middle = () => {
        return(
            <div className="middle-gap">
                <div className="middle-wrap">
                    <div className="photo-section">
                        사진 영역
                    </div>
                </div>
            </div>
        )
    }

    const Bottom = () =>{
        return (
            <div className="bottom-gap">
                <ul className="bottom-wrap">
                    <li className="status">
                        <div className="li-wrap">
                            아이 상태 영역
                        </div>
                    </li>
                    <li className="notice">
                        <div className="li-wrap">
                            알림장 영역
                        </div>
                    </li>
                    <li className="comment">
                        <div className="li-wrap">
                            댓글 영역
                        </div>
                    </li>
                </ul>
            </div>
        )
    }

    //사진위치 선택 : false=>사진이 위/ true=>사진이 아래
    const [checked, setChecked] = useState('false');

    //기본 뷰 : 사진 상단
    const BasicView = () =>{
        return(
            <div className="basicview">
                <div className="middle">
                    <div className="ArrowDown" onClick={downPhoto}>
                        <ArrowDownUp />
                    </div>
                    <Middle />
                </div>
                <div className="bottom">
                    <div className="ArrowUp" onClick={upText}>
                        <ArrowDownUp />
                    </div>
                    <Bottom/>
                </div>
            </div>
        )
    }
    
    //바뀐 뷰 : 사진 하단
    const ChangeView = () =>{
        return(
            <div className="changeview">
                <div className="bottom">
                    <div className="ArrowDown" onClick={downText}>
                        <ArrowDownUp />
                    </div>
                    <Bottom/>
                </div>
                <div className="middle">
                    <div className="ArrowUp" onClick={upPhoto}>
                        <ArrowDownUp />
                    </div>
                    <Middle />
                </div>
            </div>
        )
    }

    //일괄편집 : 사진 상단
    const allUp = () => {
        setChecked('false');
        console.log("upphoto실행" + checked);
    }

     //일괄편집 : 사진 하단
    const allDown = () => {
        setChecked('true');
        console.log("downPhoto실행" + checked);
    }

    //댓글위로 이동 : 사진 하단
    const upText = () => {
        setChecked('true');
        console.log("uptext실행"+checked);
    }

    //사진아래로 이동 : 사진 하단
    const downPhoto = () => {
        setChecked('true');
    }

    //댓글아래로 이동 : 사진 상단
    const downText = () =>{
        setChecked('false');
    }

    //사진위로 이동 : 사진 상단
    const upPhoto = () =>{
        setChecked('false');
    }

    const [pageCheck, setPageCheck] = useState('true');

    const isPageCheck = () => {
        console.log("페이지체크실행확인" + pageCheck)
        if(pageCheck==='true'){
            setPageCheck('false');
            console.log(pageCheck);
        }else{
            setPageCheck('true');
        }
    }

    // 알림장페이지 화면
    const DetailNote = () => {

        return (
            
            <div className="note-wrap">
                <div className="note-gap">
                    <div className="note-box">
                        <div className="top">
                            <Top/>
                        </div>
                        <div className="view">
                            {checked==='false'
                            ? <BasicView/>
                            : <ChangeView/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    //삭제된 알림장페이지 화면
    const DeleteDetailNote = () => {
        return (
            <div className="delete-note-wrap">
                <div className="note-gap">
                    <div className="note-box">
                        <div className="delete-text-box">
                            <div className="delete-text">
                                삭제된 페이지입니다.
                            </div>
                        </div>
                        <div className="top">
                            <Top/>
                        </div>
                        <div className="view">
                            {checked==='false'
                            ? <BasicView/>
                            : <ChangeView/>
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    // 자동저장기능
    const [count, setCount] = useState(0);
    const [countB, setCountB] = useState(0);
    const [loading, setLoading] = useState('');

    useEffect(()=>{
        const id= setInterval(() =>{
            setCount(count=>count+1);
            setLoading( <>자동 저장 중 <ArrowRepeat className="ArrowCounterclockwise" /></>)
            // console.log(count);
        }, 10000);
        return () => clearInterval(id);
    },[count]);

    useEffect(()=>{
        const idB= setInterval(() =>{
            setCountB(countB=>count+5);
            setLoading(<></>);
            // console.log(countB);
        }, 5000);
        return () => clearInterval(idB);
    },[]);




    return (
        <div id="makeDetailNote">
            <div className="wrap">
                <div className="info-wrap">
                    <div className="info">
                        A테마 총 페이지수 예상 가격 : {loading}
                    </div>
                </div>

                <div className="list-wrap">
                    <li>
                        <List/>
                    </li>
                </div>

                <div className="detail-wrap">
                    <div className="opt-days">
                        <DaysList/>
                    </div>
                    <div className="option">
                        <Option/>
                    </div>
                    
                    <div className="detail-note">
                        <div className="pagecheck" onClick={isPageCheck}>
                            {pageCheck==='true'
                            ? <CheckCircleFill className="checkcirclefill"/>
                            : <CheckCircle className="checkcircle"/>}
                        
                        </div>
                        {pageCheck==='true'
                        ? <DetailNote/>
                        : <DeleteDetailNote/>}
                         
                    </div>

                </div>



                <div className="whole-edit-wrap">
                    <ul>

                    <div className="whole-edit">
                        <p>일괄 편집</p>
                    </div>
                    <div className="whole-edit-button" onClick={allUp}>
                        사진 위로 이동
                    </div>
                    <div className="whole-edit-button" onClick={allDown}>
                        사진 아래로 이동
                    </div>
                    </ul>
                </div>

                
                




            

            
                <div className="btn">
                    <div className="btn-gap">
                        <div className="save-btn-wrap">
                            <Link to="#">임시저장</Link>
                        </div>
                        <div className="next-btn-wrap">
                            <Link to="/SelectKidsComponent">다음</Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default MakeDetailNote;