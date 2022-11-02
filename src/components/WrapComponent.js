import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';
import FooterComponent from './FooterComponent';
import HeaderComponent from './HeaderComponent';
import MainComponent from './MainComponent';
import SelectKidsComponent from './SelectKidsComponent';
import SelectThemeComponent from './SelectThemeComponent';
import SelectDetailOptionComponent from './SelectDetailOptionComponent';

import { useMediaQuery } from 'react-responsive';



const WrapComponent = () => {

    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
      });

      const isPc = useMediaQuery({
        query: "(min-width:769px)"
      });

    // const [field, setField] = useState(
    //     {
    //         themeList:[]
    //     }
    // )
    // const axiosGet=()=>{
    //     axios({
    //         url:'/getThemeAll',
    //         method:'GET'
    //     })
    //     .then((res)=>{
    //         console.log(res.data);
    //         setField({themeList:res.data})
    //     })
    //     .catch((err)=>{
    //         console.log(err);
    //     });
    // }

    // useEffect(()=>{
    //     axiosGet();
    // }, []);
    

    return (
        <div id="wrap">
            <HeaderComponent />
            <Routes>
                <Route index element={<MainComponent/>} />
                <Route path='/HeaderComponent' element={<HeaderComponent/>} />
                <Route path='/MainComponent' element={<MainComponent/>} />
                <Route path='/FooterComponent' element={<FooterComponent/>} />
                <Route path='/SelectThemeComponent' element={<SelectThemeComponent/>}  />
                {/* <Route path='/SelectKidsComponent' element={<SelectKidsComponent/>} /> */}
                <Route path='/SelectDetailOption' element={<SelectDetailOptionComponent/>}  />
            </Routes>
            <FooterComponent />
        </div>
    );
};

export default WrapComponent;