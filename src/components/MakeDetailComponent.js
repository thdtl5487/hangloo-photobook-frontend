import React from 'react';
import { Link } from 'react-router-dom';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, startOfWeek, isSameMonth, isSameDay, parse } from 'date-fns';
import { CaretRightFill, CaretLeftFill } from 'react-bootstrap-icons';
import { ArrowRepeat } from 'react-bootstrap-icons';
import { useState } from 'react';
import { addDays, endOfWeek } from 'date-fns/esm';
import axios from 'axios';
import { useEffect } from 'react';

const MakeDetailComponent = () => {

    const [field, setField] = useState(
        {
            ymlist:[]
        }
    )

    const axiosGet = () => {
        axios({
            url:'photobookServer/getThemeAll',
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
    
    

    // 년월 리스트 출력
    const list = field.ymlist.map(list => {

        return(
            <li key={list.themeNum}>
                <div className="list">
                    <div className="list-text">
                        <span className="ym"> {list.themeName} </span> <span className="page"> {list.themeNum}페이지 </span>
                    </div>
                </div>
            </li>
        )

    })

    // 일자별 리스트 출력
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

    const [opt, setOpt] = useState('');

    const optChange = (e) => {
        console.log(e.target.value)
        setOpt(e.target.value)
    }
    
    //알림장인지 사진앨범인지 체크하는 기능
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

        const rows = [];
        let days = [];
        let day = startDate;
        let formattedDate = '';

        while(day <= endDate) {
            for(let i=0;i<7;i++){
                formattedDate = format(day, 'd');
                const cloneDay = day;
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
                        onClick={() => onDateClick(parse(cloneDay))}
                    >   <div className="day-wrap">

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
                            <div className="imgbox">
                                {/* <img className="calimg" src="./img/sampleimgcalendar.jpg" alt="sampleimg"/> */}
                                {format(currentMonth, 'M') !== format(day, 'M')
                                        ? ''
                                        : <img className="calimg" src="./img/sampleimgcalendar.jpg" alt="sampleimg"/>}
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

    const[currentMonth, setCurrentMonth] = useState(new Date("2021-10-08"));
    const[selectedDate, setSelectedDate] = useState(new Date());

    const preMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    }

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    }

    const onDateClick = (day) =>{
        setSelectedDate(day);
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
                        <DaysList/>
                    </div>
                    <div className="option">
                        <Option/>
                    </div>
                    
                    <div className="wall">
                        <Calendar/> 
                    </div>

                </div>



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