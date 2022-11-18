import React from 'react';
import { Link } from 'react-router-dom';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, isSameMonth, isSameDay, parse, parseISO, getDate } from 'date-fns';
import { CaretRightFill, CaretLeftFill } from 'react-bootstrap-icons';
import { ArrowRepeat } from 'react-bootstrap-icons';
import { useState } from 'react';
import { addDays, endOfWeek, isEqual, setDay } from 'date-fns/esm';
import axios from 'axios';
import { useEffect } from 'react';
import ImgModalComponent from './ImgModalComponent';

const MakeDetailComponent = ({imgModalOpen, selectedDate, setSelectedDate}) => {

    
    const [field, setField] = useState(
        {
            ymlist:[]
        }
    )

    const axiosGet = () => {
        axios({
            url:'photobookServer/getAllNoticesInfo',
            method:'GET'
        })
        .then((res)=>{
            console.log(res.data);
            setField({ymlist:res.data})
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    useEffect(()=>{
        axiosGet();
    },[]);
    

    const daysarr = field.ymlist.sort(function(a, b)  {
        return new Date(a.noticeRegDate) - new Date(b.noticeRegDate);
    });


    //년월로 묶는 기능
    const ymset = new Set();
    const listchange = daysarr.map((changelist, changeindex) => {
        ymset.add(format(new Date(changelist.noticeRegDate),"yyyy-MM"));
    })

    const arr = Array.from(ymset);

    //년월 리스트 출력
    const list = arr.map((list, index) => {

        const changeCalendar = (e) => {
            // console.log("온클릭")
            // console.log(e.target.value)  undefined 떠서 아래로 대체
            // console.log(e.currentTarget.getAttribute('value'));
            setCurrentMonth(new Date(e.currentTarget.getAttribute('value')))
            setDayListMonth(new Date(e.currentTarget.getAttribute('value')))
            setStartIndex(0)
            setEndIndex(6)
        }

        //페이지 수 출력
        let cnt = 0;
        const count = field.ymlist.map((countlist,countindex) => {
            if(countlist.noticeRegDate.substring(0,7)===list){
                cnt++;
            }          
        })
        
        return(
            <li key={index}>
                <div className="list"  onClick={changeCalendar} value={list}>
                        <div className="list-text">
                            <span className="ym">
                                {format(new Date(list), "yyyy년 MM월")}
                                {/* {format(new Date(list.noticeRegDate), "yyyy년 MM월")}  */}
                            </span>
                            <span className="page"> {cnt}페이지 
                            </span>
                        </div>
                </div>
            </li>
        )

    })


    
    
    const [dayListMonth, setDayListMonth] = useState(new Date("2021-10-08"));
    
    const daylists = [];
    
    // 일자 출력 기능
    const daylist = daysarr.map((daylist, dayindex) => {
        // console.log(daylist.noticeRegDate)
        if(daylist.noticeRegDate.substring(0,7) === format(new Date(dayListMonth), "yyyy-MM")){
            const days = daylist.noticeRegDate.substring(0,10);
            daylists.push(days);
        }   
    })
    
    const testlists = [{
        day:"",
        num:""
    }]; 
    
    const test = daysarr.map((daylist, dayindex) => {
        // console.log(daylist.noticeRegDate)
        if(daylist.noticeRegDate.substring(0,7) === format(new Date(dayListMonth), "yyyy-MM")){
            const days = daylist.noticeRegDate.substring(0,10);
            const nums = daylist.noticeNum;
            testlists.push({day:days, num:nums});
        }   
    })

    console.log("testlists"+testlists.day)
    const testing = testlists.map((testlists, indexx) => {
        console.log(testlists.day)
        console.log(testlists.num)
    })


    // const [currentPageArray, setCurrentPageArray] = useState([]);
    
    // const [totalPageArray, setTotalPageArray] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(6);
    
    //일자 페이징 처리
    const Daypagination = ({ totalPage, start, end }) => {
        console.log(totalPage)
        let currentPageArray = [];
        // console.log(daylists)
        currentPageArray = daylists.slice(start, end);

        return(
            <div className="days-box">
                {currentPageArray.map((daypagelist, daypageindex) => (
                    <li key={daypageindex}> 
                        <div className="days" >
                            {format(new Date(daypagelist),'dd')}
                        </div>
                    </li>
                ))}
            </div>
        )
               
    }

    //일자 다음 페이지
    const nextDays = ()=> {
        if(endIndex<daylists.length){
            setStartIndex(startIndex+7);
            setEndIndex(endIndex+7)
        }
    }

    //일자 이전 페이지
    const prevDays = () => {
        if(startIndex>0){
            setStartIndex(startIndex-7);
            setEndIndex(endIndex-7)
        }
    }
    
    const[currentMonth, setCurrentMonth] = useState(new Date("2021-10-08"));
    // const[selectedDate, setSelectedDate] = useState(new Date());  //WrapComponent로 뺌


    const [opt, setOpt] = useState('');

    const optChange = (e) => {
        console.log(e.target.value)
        setOpt(e.target.value)
    }
    
    //알림장인지 사진앨범인지 체크하는 기능
    const Option = () => {

        return(
            <div className="option-wrap">
                {/* <input type="radio" id="opt-note" name="opt" value="note"  checked={opt.includes('note')}>
                </input> */}
                <label className="opt-note-btn" htmlFor="opt-note">알림장</label>
{/* 
                <input type="radio" id="opt-album" name="opt" value="album"  checked={opt.includes('album')}>
                </input> */}
                <label className="opt-album-btn" htmlFor="opt-album">사진앨범</label>
            </div>
        )
    }
 
    // 달력창 헤더
    const RenderHeader = ({ currentMonth }) => {
        
        return(
            <div className="header row">
                <div className="col col-start">
                    <span className="text">
                        <span className="text year">
                            {format(currentMonth, 'yyyy')}   
                        </span>
                        <span className="text month">
                            {format(currentMonth, 'M')}월
                        </span>                    
                    </span>
                </div>
                <div className="col col-end">
                    <CaretLeftFill className="CaretLeftFill" onClick={preMonth}/>
                    <CaretRightFill className="CaretRightFill" onClick={nextMonth}/>
                </div>
            </div>
        )
    }

    // 달력창 요일 
    const RenderDays = () =>{
        const days = [];
        const date = ['Sun', 'Mon', 'Thu', 'Wed', 'Thr', 'Fri', 'Sat'];

        for(let i=0;i<7;i++){
            days.push(
                <div className="col" key={i}>
                    {date[i]}
                </div>

            );
        }

        return(
            <div className="days rows">{days}</div>
        )

    }


    // 달력창 바디
    const RenderCells = ({ currentMonth, selectedDate, onDateClick}) => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);
        

        // 데이터가 있는 일자만 사진이 출력되게 하는 기능
        const dayimglist = (e) =>{
            for(let i=0;i<daylists.length;i++){
                // console.log(daylists[i])
                if(format(new Date(daylists[i]),'d')===format(e,'d')){
                    return format(new Date(daylists[i]),'d');
                }
            }
            
        }

        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = '';

        while(day <= endDate) {
            for(let i=0;i<7;i++){
                formattedDate = format(day, 'd');
                const cloneDay = day;
                // console.log("day"+day)
                days.push(
                    <div
                        className={`col cell ${
                                !isSameMonth(day, monthStart)
                                ? 'disabled'
                                : isSameDay(day, selectedDate) 
                                ? 'selected' 
                                : format(currentMonth, 'M') !== format(day, 'M')
                                ? 'not-valid'
                                : 'valid'
                        }`}
                        key={day}
                        onClick={() => {onDateClick(cloneDay);
                                        imgModalOpen();}}
                        // onClick={imgModalOpen}
                    >   <div className="day-wrap" >

                            <div className="spantext">
                                <span
                                    className={
                                        format(currentMonth, 'M') !== format(day, 'M')
                                        ? 'text not-valid'
                                        : ''
                                    }
                                    >
                                    {formattedDate}
                                </span>
                            </div>
                            <div className="imgbox" >
                                {/* <img className="calimg" src="./img/sampleimgcalendar.jpg" alt="sampleimg"/> */}
                                
                                {((format(currentMonth, 'M') !== format(day, 'M') )  || (dayimglist(day))!==format(day,'d'))
                                        ? ''
                                        : <img className="calimg" src="./img/sampleimgcalendar.jpg" alt="sampleimg"  />}
                            </div>
                        </div>
                    </div>,
                );
                day = addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }
        return <div className="body">{rows}</div>

    }


    const preMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    }

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    }

    const onDateClick = (day) =>{
        setSelectedDate(day);
        console.log("선택된날"+ selectedDate);
    }
    
    // 달력창 출력
    const Calendar = () =>{

        return(
            <div className="calendar">
                <RenderHeader
                    currentMonth={currentMonth}
                    preMonth={preMonth}
                    nextMonth={nextMonth}
                    />
                <RenderDays/>
                <RenderCells
                    currentMonth={currentMonth}
                    selectedDate={selectedDate}
                    onDateClick={onDateClick}
                />
            </div>
        )
    }

    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    }
    const closeModal = () =>{
        setModalOpen(false);
    }

    const [imgModal, setImgModal] = useState(
        {
            isShow:false
        }
    );



    return (
        <div id="makeDetail">
            <div className="wrap">
                <div className="info-wrap">
                    <div className="info">
                        A테마 총 페이지수 예상 가격 : 
                    </div>
                </div>

                <div className="list-wrap">
                        {list}
                </div>

                <div className="wall-wrap">
                    <div className="opt-days">
                        <div className="dayslist">
                            <CaretLeftFill className="CaretLeftFill" onClick={prevDays}/>
                                 {/* {daylist} */}
                                <Daypagination
                                    totalPage={daylists.length}
                                    start={startIndex}
                                    end={endIndex}
                                />
                            <CaretRightFill className="CaretRightFill" onClick={nextDays}/>
                        </div>
                    </div>
                    <div className="option">
                        <Option/>
                    </div>
                    
                    <div className="wall">
                        <Calendar/> 
                    </div>

                </div>

                {/* <ImgModalComponent imgModal={imgModal} selectedDate={selectedDate}/> */}


                <div className="whole-edit-wrap">
                    <ul>
                        <div className="whole-edit">
                            <p>일괄 편집</p>
                        </div>
                        <div className="whole-edit-button">
                            사진 위로 이동
                        </div>
                        <div className="whole-edit-button">
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

export default MakeDetailComponent;