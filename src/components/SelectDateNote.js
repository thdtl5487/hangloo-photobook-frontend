import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import thumbnail from '../images/hard.jpg';
import apiloader from '../apiutil/apiloader';
import { set, setMonth } from 'date-fns';
import { Children } from 'react';

const SelectDateNote = ({album, months, modalOpenFn, monthDataList, setMonthDataList}) => {

    const [allNoticeInfo, setAllNoticeInfo] = useState(
        {
            allNoticeInfo: []
        }
    )

    const [currentYearNotices, setCurrentYearNotices] = useState(
        {
            yearNoticeList: [],
            yearNoticeContent: []
        }
    )

    const [MonthInfo, setMonthInfo] = useState(
        {
            monthNoticeList: []
        }
    )

    const [showYear, setShowYear] = useState(
        {
            currentYear: ""
        }
    )
    const [WhatYear, setWhatYear] = useState(0);

    // 해당 페이지 접근 시 전체 알림장 정보를 받아오는 기능-------------------------------@@@
    const getNoticesInit = () => {
        var page = 1;
        var startDate = "2020-01-01";
        var endDate = "2030-12-31";
        var kidsNum = localStorage.getItem("kids_num");
        var currentArray = [];

        axios({
            // url: "/photobook/api/notices.php?id=note&tab=from&type=list&is_search=1&start_date="+startDate+"&end_date="+endDate+"&s_child="+kidsNum,
            url: "/photobook/api/notices.php?page="+page+"&id=note&tab=from&type=list&is_search=1&start_date="+startDate+"&end_date="+endDate,
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        }).then((res)=>{
            //currentArray = res.data.data.list;
            //console.log(res)
            //console.log("currentArray : ");
            //console.log(currentArray);

            var moreArray = [];
            if(res.data.data.list.length > 1){

                for(var i = 1; i<res.data.data.totalPage-1; i++){
                    getNoticeInitMore(i+1, startDate, endDate, kidsNum, currentArray);
                }
            }
            setAllNoticeInfo({
                allNoticeInfo: currentArray
            })
        })
    }


    // 불러와야 하는 페이지가 1개 이상인 경우 추가 페이지를 실행하는 기능
    const getNoticeInitMore = (page, startDate, endDate, kidsNum, currentArray) => {
        axios({
            url: "/photobook/api/notices.php?page="+page+"&id=note&tab=from&type=list&is_search=1&start_date="+startDate+"&end_date="+endDate,
            // url: "/photobook/api/notices.php?page="+page+"&id=note&tab=from&type=list&is_search=1&start_date="+startDate+"&end_date="+endDate+"&s_child="+kidsNum,
            method: "GET",
            headers: {
                "Content-Type": 'application/json'
            },
        }).then((res)=>{
            for(var i = 0; i<res.data.data.list.length; i++){
                currentArray.push(res.data.data.list[i]);
            }
            setAllNoticeInfo({
                allNoticeInfo:currentArray
            })
            console.log('전체데이터', res.data);
        })
    }

    useEffect(()=>{
        getNoticesInit();       
    },[]);

    useEffect(()=>{
        divideYearInfo();
    }, [allNoticeInfo])

    useEffect(()=>{
        saveYearNoticeData();
    }, [currentYearNotices, WhatYear])

    useEffect(()=>{
        divideMonthInfo()
    }, [showYear])


    // state의 알림장 정보를 통한 년도 구분
    const divideYearInfo = () => {
        const hasYears = new Set();
        for(let i = 0; i<allNoticeInfo.allNoticeInfo.length; i++){
            hasYears.add(allNoticeInfo.allNoticeInfo[i].dateWeek.slice(0,2));
        }
        var result = Array.from(new Set(hasYears));
        setCurrentYearNotices({
            ...currentYearNotices,
            yearNoticeContent: [],
            yearNoticeList: result
        })
        return result;
    }

    const divideMonthInfo = () => {
        var monthSet = new Array();

        for(var i = 0; i < currentYearNotices.yearNoticeList.length; i++){
            monthSet[i] = new Set();
            for(var j = 0; j<allNoticeInfo.allNoticeInfo.length; j++){
                if(allNoticeInfo.allNoticeInfo[j].dateWeek.slice(0,2) == currentYearNotices.yearNoticeList[i]){
                    monthSet[i].add(allNoticeInfo.allNoticeInfo[j]);
                }
            }
            
            for(var j = 0; j<monthSet.length; j++){
                var changeSetToArray = Array.from(new Set(monthSet[i]));
                monthSet[i] = changeSetToArray;
            }
        }
        
        setMonthInfo({
            monthNoticeList: monthSet
        }, [])
    }


    const saveYearNoticeData = () => {
        if(document.getElementsByClassName("year-box")[0] != undefined){
            var printedYear = document.getElementsByClassName("year-box")[0].innerText;
            setShowYear({
                currentYear:printedYear
            })
        }
    }

    // 시작 시 실행되는 함수 종료 ----------------------------------------------------

    const addEvent=(event)=>{
        event.preventDefault();
        saveYearNoticeData();
        if(WhatYear > 0){
            setWhatYear(WhatYear-1);
        }
    }
    const subEvent=(event)=>{
        event.preventDefault();
        saveYearNoticeData();
        if((WhatYear >= currentYearNotices.yearNoticeList.length-1)===false){
            setWhatYear(WhatYear+1);
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

    var saveMonthList = [];
    // 월별 알림장 리스트를 출력하기 위한 기능
    const useMonthAlbum = () =>{
        var _saveMonthList = [];
        MonthInfo.monthNoticeList.map((yearList)=>{
            //console.log("지금몇년도? : " + showYear.currentYear);
            
            //console.log("20"+yearList[0].dateWeek.slice(0,2)+"년도 리스트@@@@@@@@@@@@@@@@@@@@@@@");
            if(showYear.currentYear == "20"+yearList[0].dateWeek.slice(0,2)){

                //console.log(yearList) // << 년도별로 확인잘됨
                
                    // 월 구분용 set 변수
                var setMonthList = new Set; 
                for(var i = 0; i<yearList.length; i++){
                    setMonthList.add(yearList[i].dateWeek.slice(3,5));
                } 
                // 월 구분용 set 변수를 array로 치환하기 위한 변수

                var arrMonthList = Array.from(new Set(setMonthList));  // 월 데이터만 구분된 배열
                
                arrMonthList.sort();

                saveMonthList = new Array(arrMonthList.length);
                for(var i = 0; i <saveMonthList.length; i++){
                    saveMonthList[i] = new Array();

                    for(var j = 0; j<yearList.length; j++){
                        if(arrMonthList[i] == yearList[j].dateWeek.slice(3,5)){
                            saveMonthList[i].push(yearList[j])
                        }
                    }
                }

                // saveMonthList가 월단위로 구분된 실제 알림장 데이터 리스트임
                //console.log('saveMonthList', saveMonthList);
            }
            //console.log("한 년도 끝남 -----------------------------------------------------")
        })
        //console.log("saveMonthList 보고가야지")
    console.log('saveMonthList', saveMonthList);


        return(
            <ul className="month-wrap">
                {saveMonthList.map((notice, index)=>(
                    <li key={index}>
                        {console.log(notice)}
                        <div className="box">
                            <div className="box-gap">
                                <div className="box-wrap">
                                    <div className="top">
                                        <div className="check-month">{notice[0].dateWeek.slice(3,5)}월</div>
                                        <input type="checkbox" checked={noteMonth.months.includes(notice[0].dateWeek.slice(3,5).toString())} onChange={onChangeNote} id={notice[0].dateWeek.slice(3,5)} name={notice[0].dateWeek.slice(3,5)} value={notice[0].dateWeek.slice(3,5)} />
                                    </div>
                                    <div className="middle">
                                        <div className="middle-gap">
                                            <div className="middle-wrap">
                                                <img src ={notice[0].photo.slice(notice[0].photo.indexOf("=\"")+2, notice[0].photo.indexOf("1\"")+1)} alt="thumbnail"></img>
                                                {/* ↓ 현재 img src에 들어가는 값 확인을 위한 텍스트 */}
                                                {/* {notice[0].photo} */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-open">
                                        <div className="modal-open-gap">
                                            <div className="modal-open-wrap" onClick={()=>modalOpenFn(notice)}>
                                                상세편집
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom">
                                        <div className="bottom-gap">
                                            <div className="bottom-wrap">
                                                <div className="check-note">알림장 {saveMonthList[index].length}개</div>
                                                <div className="check-photo">사진 5개</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        )
    }

    //useEffect(()=>{
    //    console.log('saveMonthList', saveMonthList);
    //    setMonthDataList({...monthDataList, monthDataList:saveMonthList});
    //},[]);

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
                            <div className="year-box">20{currentYearNotices.yearNoticeList[WhatYear]}</div>
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
                        {/* <ul className="month-wrap"> */}
                            {/* month li 출력되는 영역 */}
                            {useMonthAlbum()}
                        {/* </ul> */}
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