import React from 'react';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';

const WrapComponent = () => {
    return (
        <div id="wrap">
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </div>
    );
};

export default WrapComponent;