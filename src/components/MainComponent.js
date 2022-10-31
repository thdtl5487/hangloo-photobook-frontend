import React from 'react';
import { Route, Routes, BrowerRouter, Link } from 'react-router-dom';
import SelectThemeComponent from './SelectThemeComponent';

const MainComponent = () => {
    return (
        <div id="main">
            <div className="wrap">
                <ul>
                    <li>
                        <Link to="/SelectThemeComponent">포토북 만들기</Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default MainComponent;