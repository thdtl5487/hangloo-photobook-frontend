import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import thumbnail from '../images/hard.jpg';

const SelectDateNote = ({album, months, modalOpenFn}) => {
    // const test=()=>{
    //     var arr5 = new Set();
    //     arr5.add(1);
    //     arr5.add(3);
    //     arr5.add(3);
    //     arr5.add(4);
    //     console.log(arr5);
    // }
    // test();


    const [currentYearNotices, setCurrentYearNotices] = useState(
        {
            yearNoticeList: [],
            yearNoticeContent: []
        }
    )
    const [currentMonthNotices, setCurrentMonthNotices] = useState(
        {
            monthNoticeList: []
        }
    )
    const [arrayTest, setArrayTest] = useState({
        testList: []
    })
    // const getNoticeInfoTest = () =>{
    //     console.log("getNoticeInfoTest 실행")
    //     axios({
    //         url: "/getAllNoticesInfo",
    //         method: "GET"
    //     })
    //     .then((res)=>{
            
    //         var myList = [];
    //         var myListMonth = [];
    //         console.log("2022년 데이타 ---------------")
    //         for(var i = 0; i<res.data.length; i++){
    //             var dataYear = res.data[i].noticeRegDate;
    //             if(dataYear.slice(0,4) === cnt.toString()){
    //                 console.log(res.data[i]);
    //                 myList.push(res.data[i]);
    //                 setCurrentYearNotices({noticeList:myList});
    //             }
    //         }
    //         console.log("2022년 데이타 종료---------------")
    //         console.log("2022년 데이타만 추린거")
    //         console.log(currentYearNotices.noticeList)
    //     })
    // }
    const getNoticeInfoTest = () =>{
        console.log("getNoticeInfoTest 실행")
        axios({
            url: "/photobookServer/getAllNoticesInfo",
            method: "GET"
        })
        .then((res)=>{
            const myList = [];
            const myList2 = [];
            for(let i = 0; i<res.data.length; i++){
                let dataYear = res.data[i].noticeRegDate;
                myList.push(dataYear.slice(0,4));
                if(dataYear.slice(0,4) === "2022"){
                    myList2.push(res.data[i]);
                }
            }
            const newMyList = Array.from(new Set(myList));
            setCurrentYearNotices({...currentYearNotices, yearNoticeList:newMyList, yearNoticeContent:myList2});
        })
    }

    useEffect(()=>{
        getNoticeInfoTest();
    }, []);

    const [whatYear, setWhatYear] = useState(0);

    const addEvent=(event)=>{
        event.preventDefault();
        if(whatYear > 0){
            setWhatYear(whatYear-1);
        }
    }
    const subEvent=(event)=>{
        event.preventDefault();
        if((whatYear >= currentYearNotices.yearNoticeList.length-1)===false){
            setWhatYear(whatYear+1);
        }
    }

    const [noteMonth, setNoteMonth] = useState ({
        months:["1","2","3","4","5","6","7","8","9","10","11","12"]
     });
     
     const onChangeNote = (e) => {
         let imsi=[];
         if(e.target.checked===true){
            setNoteMonth({...noteMonth, months:[...noteMonth.months, e.target.value]});
         }
         else {
             imsi = noteMonth.months.filter((item)=>item !== e.target.value);
             setNoteMonth({...noteMonth, months:imsi});
         }
     }

     const onChangeAll = (e) => {
        setNoteMonth({...noteMonth, months:months});
     }
     const onChangeNone = (e) => {
        setNoteMonth({...noteMonth, months:[]});
     }

    const monthAlbum = album.map((monthAlbum)=>{
        return (
            <li key = {monthAlbum.월}>
                <div className="box">
                    <div className="box-gap">
                        <div className="box-wrap">
                            <div className="top">
                                <div className="check-month">{monthAlbum.월}월</div>
                                <input type="checkbox" checked={noteMonth.months.includes(monthAlbum.월.toString())} onChange={onChangeNote} id={monthAlbum.월} name={monthAlbum.월} value={monthAlbum.월} />
                            </div>
                            <div className="middle">
                                <div className="middle-gap">
                                    <div className="middle-wrap">
                                        <img src={thumbnail} alt="thumbnail" />
                                    </div>
                                </div>
                            </div>
                            <div className="modal-open">
                                <div className="modal-open-gap">
                                    <div className="modal-open-wrap" onClick={modalOpenFn}>
                                        상세편집
                                    </div>
                                </div>
                            </div>
                            <div className="bottom">
                                <div className="bottom-gap">
                                    <div className="bottom-wrap">
                                        <div className="check-note">알림장 {monthAlbum.알림장}개</div>
                                        <div className="check-photo">사진 {monthAlbum.사진}개</div>
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
                            <div className="year-box">{currentYearNotices.yearNoticeList[whatYear]}</div>
                            <div className="add" onClick={addEvent}><i className="material-icons">keyboard_arrow_right</i></div>
                        </div>
                    </div>
                </div>
                <div className="select-or-not">
                    <div className="select-or-not-gap">
                        <ul className="select-or-not-wrap">
                            <li>
                                <label htmlFor="selectall">
                                    <input type="checkbox" onChange={onChangeAll} id="selectall" name="selectall" value="selectall" />
                                    <div className="text">
                                        <p>전체 선택</p>
                                    </div>
                                </label>
                            </li>
                            <li>
                                <label htmlFor="selectnone">
                                    <input type="checkbox" onChange={onChangeNone} id="selectnone" name="selectnone" value="selectnone" />
                                    <div className="text">
                                        <p>전체 해제</p>
                                    </div>
                                </label>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="month">
                    <div className="month-gap">
                        <ul className="month-wrap">
                            {monthAlbum}
                        </ul>
                    </div>
                </div>
                <div className="next-btn">
                    <div className="next-btn-gap">
                        <div className="next-btn-wrap">
                            <Link to="/SelectOptionChangeTheme">다음</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
SelectDateNote.defaultProps = {
    album: [
        {년:2022, 월:1, 썸네일:{thumbnail}, 알림장:2, 사진:8},
        {년:2022, 월:2, 썸네일:{thumbnail}, 알림장:3, 사진:23},
        {년:2022, 월:3, 썸네일:{thumbnail}, 알림장:8, 사진:33},
        {년:2022, 월:4, 썸네일:{thumbnail}, 알림장:19, 사진:41},
        {년:2022, 월:5, 썸네일:{thumbnail}, 알림장:11, 사진:37},
        {년:2022, 월:6, 썸네일:{thumbnail}, 알림장:3, 사진:33},
        {년:2022, 월:7, 썸네일:{thumbnail}, 알림장:17, 사진:12},
        {년:2022, 월:8, 썸네일:{thumbnail}, 알림장:21, 사진:21},
        {년:2022, 월:10, 썸네일:{thumbnail}, 알림장:16, 사진:26},
        {년:2022, 월:11, 썸네일:{thumbnail}, 알림장:2, 사진:32},
        {년:2022, 월:12, 썸네일:{thumbnail}, 알림장:13, 사진:29},
        // {년:2021, 월:1, 썸네일:{thumbnail}, 알림장:2, 사진:8},
        // {년:2021, 월:2, 썸네일:{thumbnail}, 알림장:12, 사진:23},
        // {년:2021, 월:3, 썸네일:{thumbnail}, 알림장:8, 사진:33},
        // {년:2021, 월:4, 썸네일:{thumbnail}, 알림장:6, 사진:41},
        // {년:2021, 월:5, 썸네일:{thumbnail}, 알림장:34, 사진:234},
        // {년:2021, 월:8, 썸네일:{thumbnail}, 알림장:32, 사진:12},
        // {년:2021, 월:9, 썸네일:{thumbnail}, 알림장:21, 사진:1},
        // {년:2021, 월:10, 썸네일:{thumbnail}, 알림장:9, 사진:26},
        // {년:2021, 월:11, 썸네일:{thumbnail}, 알림장:2, 사진:12},
        // {년:2021, 월:12, 썸네일:{thumbnail}, 알림장:13, 사진:29}
    ],
    months: [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12'
    ]
}

export default SelectDateNote;