import React from 'react';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import { useMediaQuery } from 'react-responsive';



const WrapComponent = () => {

    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
      });

      const isPc = useMediaQuery({
        query: "(min-width:769px)"
      });


    return (
        <div id="wrap">
            <HeaderComponent />
            <MainComponent />
            <FooterComponent />
        </div>
    );
};

export default WrapComponent;