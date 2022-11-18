
import { type } from '@testing-library/user-event/dist/type';
import axios from 'axios';
//import React, { Component, useState } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiloader from '../apiutil/apiloader';



const MainComponent = () => {

<<<<<<< HEAD
=======
    const [currentYearNotices, setCurrentYearNotices] = useState(
        {
            noticeList: []
        }
    ) 

    // 년도별로 구분하기 예문
    const getNoticeInfoTest = () =>{
        console.log("getNoticeInfoTest 실행")
        axios({
            url: "/photobookServer/getAllNoticesInfo",
            method: "GET",
        })
        .then((res)=>{
            
            var myList = [];
            console.log("2022년 데이타 ---------------")
            for(var i = 0; i<res.data.length; i++){
                var dataYear = res.data[i].noticeRegDate;
                if(dataYear.slice(0,4) == "2022"){
                    console.log(res.data[i]);
                    myList.push(res.data[i]);
                }    
            }
            var testData = res.data[res.data.length-1];

            testData.data = [{
                aaa: "zzzz",
                bbb: "dddd",
                ccc: "wwww"
            }]

            console.log(testData);
            myList.push(testData);
            console.log("2022년 데이타 종료---------------")

            setCurrentYearNotices({noticeList:myList})

            console.log("2022년 데이타만 추린거")
            console.log(currentYearNotices.noticeList)
        })
    }

    const [usePhotoAlbumInfo, setUsePhotoAlbumInfo] = useState(
        {
            photoAlbum: []
        }
    )

    const sendPhotoAlbumData = () =>{
        
        setUsePhotoAlbumInfo({
            photoAlbum: currentYearNotices
        })

        axios({
            url: "/photobookServer/sendPhotoAlbumInfo",
            method:"POST",
            // headers:{
            //     "Content-Type" : 'application/json'
            // },
            data: currentYearNotices.noticeList
        }).then((res)=>{
            console.log("전송완료");
        })

    }


    const getNoticePicUrl = (noticeNum) =>{

        axios({
            url: "/photobookServer/getPhotoToNoticeNum",
            method: "POST",
            data: {
                noticeNum: 530
            }
        })
        .then((res)=>{
            console.log(res);
        })


        axios.post()
    }

    const [testValue, setTestValue] = useState(
        {
            id : 'test924',
            pw : 'good',
            start_date : "2020-01-01",
            end_data : "2022-12-31",
            child_pid : 161954,
            select_page : 2,
            comm_uid : 959641,
            type : 'note'
        }
    )
>>>>>>> Jayce


    return (       
        <div id="main">
            <div className="wrap">

                <Link to="/SelectThemeComponent">포토북 만들기</Link>

            </div>

        </div>
    );
};


export default MainComponent;