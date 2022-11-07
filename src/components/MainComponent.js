
import axios from 'axios';
//import React, { Component, useState } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const MainComponent = () => {
    return (       
        <div id="main">
            <div className="wrap">


                <Link to="/SelectThemeComponent">포토북 만들기</Link>

            </div>

        </div>
    );
};


export default MainComponent;