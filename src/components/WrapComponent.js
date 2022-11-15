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
import MakeCoverComponent from './MakeCoverComponent';
import MakeDetailComponent from './MakeDetailComponent';
import MakeDetailNote from './MakeDetailNote';
import MakeDetailAlbum from './MakeDetailAlbum';

const WrapComponent = () => {
    return (
        <div id="wrap">
            <HeaderComponent />
            <Routes>
                <Route index element={<MainComponent/>} />
                <Route path='/HeaderComponent' element={<HeaderComponent/>} />
                <Route path='/MainComponent' element={<MainComponent/>} />
                <Route path='/FooterComponent' element={<FooterComponent/>} />
                <Route path='/SelectThemeComponent' element={<SelectThemeComponent/>}  />


                <Route path='/SelectDetailOption' element={<SelectDetailOptionComponent/>}  />

                <Route path='/SelectKidsComponent' element={<SelectKidsComponent/>} />
                <Route path='/SelectDetailOptionNote' element={<SelectDetailOptionNote/>} />
                <Route path='/SelectDetailOptionAlbum' element={<SelectDetailOptionAlbum/>} />
                
                <Route path='/MakeCoverComponent' element={<MakeCoverComponent/>} />
                <Route path='/MakeDetailComponent' element={<MakeDetailComponent/>} />
                <Route path='/MakeDetailNote' element={<MakeDetailNote/>} />
                <Route path='/MakeDetailAlbum' element={<MakeDetailAlbum/>} />



            </Routes>
            <FooterComponent />
        </div>
    );
};

export default WrapComponent;