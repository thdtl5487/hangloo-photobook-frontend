import React from 'react';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';

import {useState, useEffect} from 'react';
import { Routes, Route } from 'react-router-dom';

import SelectKidsComponent from './SelectKidsComponent';
import SelectThemeComponent from './SelectThemeComponent';
import SelectDetailOptionComponent from './SelectDetailOptionComponent';
import SelectDetailOptionNote from './SelectDetailOptionNote';
import SelectDetailOptionAlbum from './SelectDetailOptionAlbum';
import SelectDateNote from './SelectDateNote';
import SelectOptionChangeTheme from './SelectOptionChangeTheme';
import ModalComponent from './ModalComponent';
import MakeCoverComponent from './MakeCoverComponent';
import MakeDetailComponent from './MakeDetailComponent';
import MakeDetailNote from './MakeDetailNote';
import MakeDetailAlbum from './MakeDetailAlbum';

const WrapComponent = () => {

    //새로고침 막기 기능
    const preventClose = (e) => {
        e.preventDefault();
        e.returnValue = ""; //Chrome에서 동작하도록; deprecated
    };
       
    useEffect(() => {
        (() => {
          window.addEventListener("beforeunload", preventClose);
        })();
       
        return () => {
          window.removeEventListener("beforeunload", preventClose);
        };
    }, []);

    //모달 여닫
    const [modal, setModal] = useState(
        {
            isShow:false
        }
    );
    
    //모달 오픈 시 해당하는 월 알림장 데이터 저장
    const [selectDateNote_monthData, setSelectDateNote_monthData] = useState({
        monthData: []
    })

    const modalCloseFn=()=>{
        setModal({...modal, isShow:false});
        document.body.style.overflow = "unset";
    }
    const modalOpenFn=(monthData)=>{
        setModal({...modal, isShow:true});
        document.body.style.overflow = "hidden";
        setSelectDateNote_monthData({
            monthData:monthData
        })
    }
    //앨범, 알림장 디테일 옵션 항목들
    const [albumnote, setAlbumnote] = useState({
        themeNum:'',
        albumnote:[],

        notenophoto:0,
        notenocontent:0,
        notefromhome:0,
        albumnocontent:0,
        albumnocomment:0
    });

    const [note, setNote] = useState({
        notephotoqr:0,
        notevideoqr:0,
        notestatus:0,
        notecontent:0,
        notecomment:0
    });

    const [album, setAlbum] = useState({
        albumphotoqr:0,
        albumvideoqr:0,
        albumcontent:0,
        albumcomment:0
    });

    const [uid, setUid] = useState({
        uid:''
    });

    return (
        <div id="wrap">
            <HeaderComponent />
            <Routes>
                <Route index element={<MainComponent/>} />
                <Route path='/HeaderComponent' element={<HeaderComponent/>} />
                <Route path='/MainComponent' element={<MainComponent setUid={setUid} uid={uid}/>} />
                <Route path='/FooterComponent' element={<FooterComponent/>} />
                <Route path='/SelectThemeComponent' element={<SelectThemeComponent albumnote={albumnote} setAlbumnote={setAlbumnote}/>}  />
                <Route path='/SelectKidsComponent' element={<SelectKidsComponent/>} />
                <Route path='/SelectDetailOptionComponent' element={<SelectDetailOptionComponent albumnote={albumnote} setAlbumnote={setAlbumnote}/>} />
                <Route path='/SelectDetailOptionNote' element={<SelectDetailOptionNote albumnote={albumnote} setAlbumnote={setAlbumnote} note={note} setNote={setNote}/>} />
                <Route path='/SelectDetailOptionAlbum' element={<SelectDetailOptionAlbum setAlbum={setAlbum} album={album}/>} />
                <Route path='/SelectDateNote' element={<SelectDateNote modalOpenFn={modalOpenFn}/>} />
                <Route path='/SelectOptionChangeTheme' element={<SelectOptionChangeTheme albumnote={albumnote} setAlbumnote={setAlbumnote}/>} />
                <Route path='/MakeCoverComponent' element={<MakeCoverComponent albumnote={albumnote} setAlbumnote={setAlbumnote}/>} />
                <Route path='/MakeDetailComponent' element={<MakeDetailComponent/>} />
                <Route path='/MakeDetailNote' element={<MakeDetailNote/>} />
                <Route path='/MakeDetailAlbum' element={<MakeDetailAlbum/>} />

            </Routes>
            <ModalComponent modal={modal} monthData={selectDateNote_monthData} modalCloseFn={modalCloseFn} setModal={setModal}/>
            <FooterComponent />
        </div>
    );
};

export default WrapComponent;