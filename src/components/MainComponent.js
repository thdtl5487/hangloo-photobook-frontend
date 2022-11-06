import axios from 'axios';
//import React, { Component, useState } from 'react';
import { useEffect, useState } from 'react';
import { json, Link } from 'react-router-dom';
import 'animate.css';
import pickNote from '../dummydb/data/dummy_PickNote.json';
import pickNotePhoto from '../dummydb/data/dummy_PicNotePhoto.json';
import $ from 'jquery';


const MainComponent = () => {

    const makeJsonTest = (e)=>{
        const getNoteNumList = [];
        for(var i = 0; i<pickNote.length; i++){
            getNoteNumList.push(pickNote[i].noteNum);
        }

        console.log(getNoteNumList)

        const uniqueNoteNumList = [];

        getNoteNumList.forEach((element)=>{
            if(!uniqueNoteNumList.includes(element)){
                uniqueNoteNumList.push(element);
            }
        })

        console.log(uniqueNoteNumList);
        const notePicData = [];
        for(var i = 0; i<uniqueNoteNumList.length; i++){
            notePicData[i] = uniqueNoteNumList[i];
            notePicData[i] = [];
            for(var j = 0; j<pickNotePhoto.length; j++){
                console.log("uNum : " + uniqueNoteNumList[i])
                if(uniqueNoteNumList[i] == pickNotePhoto[j].noteNum){
                    
                    notePicData[i].push(pickNotePhoto[j]);
                }
            }
        }

        console.log(notePicData);

        var jsonData = JSON.stringify(notePicData);
        console.log(jsonData);

        $.ajax({
            type:"POST",
            url:'/jsonTest',
            data: JSON.stringify({
                pickNotePhoto
                }),
            contentType: 'application/json',
            dataType: 'json',
        }).done(function(res){
            if(res.statusCode === 200){
                alert("보내기 성공");
            }else{
                alert("오류 발생");
            }
        })


    }

    return (       
        <div id="main">
            {makeJsonTest()}
            <div className="wrap">
                <ul>
                    <li>
                        <Link to="/SelectThemeComponent" className='animate__animated animate__fadeInUp'>포토북 만들기</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default MainComponent;