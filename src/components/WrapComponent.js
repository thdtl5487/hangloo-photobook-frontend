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

            </Routes>
            <FooterComponent />
        </div>
    );
};

export default WrapComponent;