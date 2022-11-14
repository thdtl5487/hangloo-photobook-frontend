import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { click } from '@testing-library/user-event/dist/click';

const SelectThemeComponent = ({albumnote, setAlbumnote, themeList, setThemeList}) => {

    //테마 데이터로 리스트 작성
    const [field, setField] = useState(
        {
            themeList:[]
        }
    )
    
    const [selectedTheme, setSelectedTheme] = useState(
        {
            selectThemeNum: ""
        }
    )
    
    const axiosGet=()=>{
        axios({
            url:'/photobookServer/getThemeAll',
            method:'GET'
        })
        .then((res)=>{
            console.log(res.data);
            setField({themeList:res.data})
            setThemeList({allThemeList:res.data})
        })
        .catch((err)=>{
            console.log(err);
        });
    }

    useEffect(()=>{
        axiosGet();
    }, []);

    //hover 이미지 변경
    const onMouseOver = (e) => {
        e.target.src = "/photobookServer/getThemeSubImg/" + e.target.id;
    }
    const onMouseOut = (e) => {
        e.target.src = "/photobookServer/getThemeImg/" + e.target.id;
    }

    // 예상 버튼 클릭 시 모든 테마의 가격을 해당 페이지의 가격대로 출력해주는 기능
    const changePrice = (num) =>{
        console.log(num);
        const priceText = document.getElementsByClassName('price-text');
        for(var i = 0; i<field.themeList.length; i++){
            priceText[i].innerText = makeComma(field.themeList[i].themePrice * num) + "원";
            
        }
    }
    
    // 원 단위의 숫자를 출력할 때, 3자릿수마다 쉼표를 찍어주는 기능
    const makeComma = (price) =>{
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    }

    // 클릭한 테마를 저장하고 표시하는 기능 (css적용은 .in-theme-gap이 하게끔 되어있음)
    const clickElement = (e) =>{
        selectedOff();
        if(e.target.id !== ""){ // id가 없는 경우에는 state값이 변동되지 않게 하기 위한 조건문
            e.target.classList.add("on"); // 클릭한 테마 표시를 위한 class 추가
            setSelectedTheme({selectThemeNum:e.target.id});
            setAlbumnote({...albumnote, themeNum:e.target.id});
        }
        if(e.target.alt !== null){ // 이미지인지 체크
            e.target.parentNode.parentNode.classList.add("on")
            const imgEle = document.querySelectorAll("img");
            for(var i = 0; i<imgEle.length; i++){
                imgEle[i].classList.remove("on");
            }
        }
    }

    // 다른 테마를 선택했을 경우, 다른 테마의 선택표시를 제거하는 기능
    const selectedOff = (e) =>{
        const removeClassEle = document.querySelectorAll(".on");
            for(var i = 0; i<removeClassEle.length; i++){
                removeClassEle[i].classList.remove("on");
            }
    }

    const list = field.themeList.map(list=>{
        return (
            <li key = {list.themeNum}>
                <div className="in-theme-gap" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                    <div className="in-theme-wrap" id={list.themeNum} onClick={clickElement}>
                        <div className="img-wrap" id={list.themeNum}>
                            <img
                                src={"/photobookServer/getThemeImg/"+list.themeNum} 
                                alt={'Theme'+list.themeNum}
                                id={list.themeNum}
                            />
                        </div>
                        <div className="text-wrap">
                            <p id={list.themeNum}>{list.themeName}</p>
                            <p className='price-text' id={list.themeNum}>{makeComma(list.themePrice)}원</p>
                        </div>
                    </div>
                </div>
            </li>
        )
    })    

    const createNextBtn = (e) =>{ // 다음 페이지로 이동하기 버튼 생성 (활성화/비활성화를 구분하기 위해 함수로 버튼 생성)
        if(selectedTheme.selectThemeNum !== ""){
            localStorage.setItem("theme_num", selectedTheme.selectThemeNum);
            return(
                <Link to="/SelectKidsComponent">다음</Link>
                
            )
        }else{
            return(
                <Link className='disabled'>다음</Link>
            )
        }
    }

    return (
        <div id="selectTheme">
            <div className="wrap">
                <div className="price-btn">
                    <div className="price-btn-gap">
                        <div className="price-btn-wrap">
                            <ul>
                                <li><button className='page-btn-1' onClick={()=>changePrice(1)}>200장</button></li>
                                <li><button className='page-btn-2' onClick={()=>changePrice(2)}>500장</button></li>
                                <li><button className='page-btn-3' onClick={()=>changePrice(3)}>800장</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="theme">
                    <div className="theme-gap">
                        <div className="theme-wrap">
                            <ul>
                                {list}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="next-btn">
                    <div className="next-btn-gap">
                        <div className="next-btn-wrap">
                            {createNextBtn()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectThemeComponent;