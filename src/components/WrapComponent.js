import React from 'react';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';

import { useMediaQuery } from 'react-responsive';
import {useState, useEffect} from 'react';
import axios from 'axios';
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
    const [modal, setModal] = useState(
        {
            isShow:false
        }
    );
    const modalCloseFn=()=>{
        setModal({...modal, isShow:false});
        document.body.style.overflow = "unset";
    }
    const modalOpenFn=()=>{
        setModal({...modal, isShow:true});
        document.body.style.overflow = "hidden";
    }
    const [albumnote, setAlbumnote] = useState({
        themeNum:'',
        albumnote:[]
    });

    return (
        <div id="wrap">
            <HeaderComponent />
            <Routes>
                <Route index element={<MainComponent/>} />
                <Route path='/HeaderComponent' element={<HeaderComponent/>} />
                <Route path='/MainComponent' element={<MainComponent/>} />
                <Route path='/FooterComponent' element={<FooterComponent/>} />
                <Route path='/SelectThemeComponent' element={<SelectThemeComponent albumnote={albumnote} setAlbumnote={setAlbumnote}/>}  />
                <Route path='/SelectKidsComponent' element={<SelectKidsComponent/>} />
                <Route path='/SelectDetailOptionComponent' element={<SelectDetailOptionComponent albumnote={albumnote} setAlbumnote={setAlbumnote}/>} />
                <Route path='/SelectDetailOptionNote' element={<SelectDetailOptionNote albumnote={albumnote} setAlbumnote={setAlbumnote}/>} />
                <Route path='/SelectDetailOptionAlbum' element={<SelectDetailOptionAlbum/>} />
                <Route path='/SelectDateNote' element={<SelectDateNote modalOpenFn={modalOpenFn}/>} />
                <Route path='/SelectOptionChangeTheme' element={<SelectOptionChangeTheme albumnote={albumnote} setAlbumnote={setAlbumnote}/>} />

                <Route path='/MakeCoverComponent' element={<MakeCoverComponent albumnote={albumnote} setAlbumnote={setAlbumnote}/>} />

                <Route path='/MakeDetailComponent' element={<MakeDetailComponent/>} />
                <Route path='/MakeDetailNote' element={<MakeDetailNote/>} />
                <Route path='/MakeDetailAlbum' element={<MakeDetailAlbum/>} />

            </Routes>
            <ModalComponent modal={modal} modalCloseFn={modalCloseFn}/>
            <FooterComponent />
        </div>
    );
};

export default WrapComponent;