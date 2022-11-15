import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import image1 from '../images/hard (1).jpg';
import image2 from '../images/hard (3).jpg';
import 하드커버 from '../images/hard.jpeg';
import 소프트커버 from '../images/soft.jpeg';
import 레더커버 from '../images/leather.jpeg';


const SelectOptionChangeTheme = ({albumnote, setAlbumnote}) => {

    //수량 조절 기능
    const [selectNumber, setSelectNumber] = useState(1);
    const addEvent=(event)=>{
        event.preventDefault();   
        setSelectNumber(selectNumber+1);
    }
    const subEvent=(event)=>{
        event.preventDefault();
        if(selectNumber>1){
            setSelectNumber(selectNumber-1);
        }
    }

    //선택목록 임시저장
    const [optionList, setOptionList] = useState({
        selectedTheme:'',
        size:'',
        cover:'',
        coverCoating:'',
        inside:'',
        case:''
    })

    //툴팁 스테이트
    const [mouseOver, setMouseOver] = useState({
        images:''
    })

    //선택된 테마 데이터
    const [checkTheme, setCheckTheme] = useState({
        pickedTheme:''
    });

    
    const onChangeSize = (e) => {
        setOptionList({...optionList, size:e.target.value});
    }
    const onChangeCover = (e) => {
        setOptionList({...optionList, cover:e.target.value});
    }
    const onChangecoverCoating = (e) => {
        setOptionList({...optionList, coverCoating:e.target.value});
    }
    const onChangeInside = (e) => {
        setOptionList({...optionList, inside:e.target.value});
    }
    const onChangeCase = (e) => {
        setOptionList({...optionList, case:e.target.value});
    }

    //테마 데이터 보관
    const [themeList, setThemeList] = useState({
        themeList:[]
    });

    const axiosGet=()=>{
        axios({
            url:'/photobookServer/getThemeAll',
            method:'GET'
        })
        .then((res)=>{
            console.log(res.data);
            setThemeList({themeList:res.data})
        })
        .catch((err)=>{
            console.log(err);
        });
    }
    
    //테마 이름 변경
    const themeName = () => {
        for(var i = 0; i<themeList.themeList.length; i++){
            var themeNum = themeList.themeList[i]
            if(themeNum.themeNum.toString() === optionList.selectedTheme.toString()){ //테마 전체 목록 === 선택된 목록
                setCheckTheme({...checkTheme, pickedTheme:themeList.themeList[i]});
                localStorage.setItem("theme_name", checkTheme.pickedTheme.themeName);
            }
        }
    }

    useEffect(()=>{
        axiosGet();
    }, []);





    //슬라이드 테마 클릭 변경
    const onClickTheme = (e) => {
        localStorage.setItem("theme_num", e.target.id);
        setOptionList({...optionList, selectedTheme:e.target.id});
        console.log(themeList.themeList.themeName);
    }
    useEffect(()=>{
        themeName();
    },[optionList, checkTheme.pickedTheme]);

    
    //슬라이드 부분 반복문
    const list = themeList.themeList.map(list=>{
        return (
            <li key = {list.themeNum}>
                <div className="in-theme-gap">
                    <div className="in-theme-wrap" id={list.themeNum}>
                        <div className="img-wrap" id={list.themeNum}>
                            <img
                                src={"/photobookServer/getThemeImg/"+list.themeNum} 
                                alt={'Theme'+list.themeNum}
                                id={list.themeNum}
                                onClick={onClickTheme}
                            />
                        </div>
                        <div className="text-wrap">
                            <p id={list.themeNum}>{list.themeName}</p>
                        </div>
                    </div>
                </div>
            </li>
        )
    })    

    //슬라이드 오른쪽 왼쪽 이동
    let cnt = 0;
    const Slide = (e) => {
        let winW = $(window).width();
        let slideW = $('#changeTheme .slide-view').width();
        if(winW>1180){
            slideW = $('#changeTheme .slide-view').width();
            $('#changeTheme .slide-wrap').stop().animate({left:-slideW/5*cnt},600);    
        }
        else if(820<winW && winW<=1180){
            slideW = $('#changeTheme .slide-view').width();
            $('#changeTheme .slide-wrap').stop().animate({left:-slideW/4*cnt},600);    
        }
        else if(winW<=820){
            slideW = $('#changeTheme .slide-view').width();
            $('#changeTheme .slide-wrap').stop().animate({left:-slideW/2*cnt},600);     
        }
    }
    const nextCount = (e) => {
        let winW = $(window).width();
        if(winW>1180){
            if(themeList.themeList.length-5>cnt){
                cnt++;
                Slide();    
            }
            else {
                return;
            }
        }
        else if(820<winW && winW<=1180){
            console.log(winW);
            if(themeList.themeList.length-4>cnt){
                cnt++;
                Slide();    
            }
            else {
                return;
            }
        }
        else if(winW<=820){
            console.log(winW);
            if(themeList.themeList.length-2>cnt){
                cnt++;
                Slide();    
            }
            else {
                return;
            }
        }
    }
    const prevCount = (e) => {
        if(cnt>0){
            cnt--;
            Slide();
        }
        else {
            return;
        }
    }

    //클릭시 서브이미지출력
    const [sub, setSub] = useState({
        isShowMain:true,
        isShowSub:false
    })
    const onClickSub = (e) => {
        setSub({...sub, isShowMain:false, isShowSub:true});
    }
    const onClickMain = (e) => {
        setSub({...sub, isShowMain:true, isShowSub:false});
    }


    return (
        <div id="changeTheme">
            <div className="wrap">
                <div className="step4">
                    <div className="step4-gap">
                        <div className="step4-wrap">
                            <p>Step4. 옵션을 선택하세요.</p>    
                        </div>
                    </div>
                </div>
                <div className="middle">
                    <div className="middle-gap">
                        <div className="middle-wrap">
                            <div className="example">
                                <div className="example-gap">
                                    <div className="example-wrap">
                                        <div className="left" onClick={onClickMain}><i className="material-icons">keyboard_arrow_left</i></div>
                                        <div className="photo-example">
                                            {sub.isShowMain && (
                                            <img
                                            src={"/photobookServer/getThemeImg/"+localStorage.getItem('theme_num')} 
                                            alt={'Theme'+albumnote.themeNum}
                                            />
                                            )}
                                            {sub.isShowSub && (
                                                <img
                                                src={"/photobookServer/getThemeSubImg/"+localStorage.getItem('theme_num')} 
                                                alt={'Theme'+albumnote.themeNum}
                                                />         
                                            )}                               
                                        </div>
                                        <div className="right" onClick={onClickSub}><i className="material-icons">keyboard_arrow_right</i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="option-list">
                                <div className="option-list-gap">
                                    <ul className="option-list-wrap">
                                        <li>
                                            <div className="name"><span>테마</span></div>
                                            <div className="option-content name-content"><p>{localStorage.getItem('theme_name')}</p></div>
                                        </li>
                                        <li>
                                            <div className="name"><span>사이즈</span></div>
                                            <div className="option-content size">
                                                <label htmlFor="eight">
                                                    <input onChange={onChangeSize} type="radio" id="eight" name="size" value="eight" />
                                                    <div className="info"><span>8*8</span></div>
                                                </label>
                                                <label htmlFor="ten">
                                                    <input onChange={onChangeSize} type="radio" id="ten" name="size" value="ten" />
                                                    <div className="info"><span>10*10</span></div>
                                                </label>
                                                <label htmlFor="가로A4">
                                                    <input onChange={onChangeSize} type="radio" id="가로A4" name="size" value="가로A4" />
                                                    <div className="info"><span>가로형A4</span></div>
                                                </label>
                                                <label htmlFor="가로B4">
                                                    <input onChange={onChangeSize} type="radio" id="가로B4" name="size" value="가로B4" />
                                                    <div className="info"><span>가로형B4</span></div>
                                                </label>
                                                <label htmlFor="세로A4">
                                                    <input onChange={onChangeSize} type="radio" id="세로A4" name="size" value="세로A4" />
                                                    <div className="info"><span>세로형A4</span></div>

                                                </label>
                                                <label htmlFor="세로B4">
                                                    <input onChange={onChangeSize} type="radio" id="세로B4" name="size" value="세로B4" />
                                                    <div className="info"><span>세로형B4</span></div>
                                                </label>
                                            </div>
                                        </li>
                                        <li className="cover">
                                            <div className="name"><span>커버</span></div>
                                            <div className="option-content">
                                                <label htmlFor="하드커버">
                                                    <input onChange={onChangeCover} type="radio" id="하드커버" name="cover" value="하드커버" />
                                                    <span>하드커버</span>
                                                    <div className="imgover">
                                                        <img src={하드커버} alt=""/>
                                                    </div>
                                                </label>
                                                <label htmlFor="소프트커버">
                                                    <input onChange={onChangeCover} type="radio" id="소프트커버" name="cover" value="소프트커버" />
                                                    <span>소프트커버</span>
                                                    <div className="imgover">
                                                        <img src={소프트커버} alt=""/>
                                                    </div>
                                                </label>
                                                <label htmlFor="레더커버">
                                                    <input onChange={onChangeCover} type="radio" id="레더커버" name="cover" value="레더커버" />
                                                    <span>레더커버</span>
                                                    <div className="imgover">
                                                        <img src={레더커버} alt=""/>
                                                    </div>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name"><span>커버코팅</span></div>
                                            <div className="option-content">
                                                <label htmlFor="무광">
                                                    <input onChange={onChangecoverCoating} type="radio" id="무광" name="covercoating" value="무광" />
                                                    <span>무광</span>
                                                </label>
                                                <label htmlFor="유광">
                                                    <input onChange={onChangecoverCoating} type="radio" id="유광" name="covercoating" value="유광" />
                                                    <span>유광</span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name"><span>내지</span></div>
                                            <div className="option-content">
                                                <label htmlFor="무광지">
                                                    <input onChange={onChangeInside} type="radio" id="무광지" name="inpaper" value="무광지" />
                                                    <span>무광지</span>
                                                </label>
                                                <label htmlFor="유광지">
                                                    <input onChange={onChangeInside} type="radio" id="유광지" name="inpaper" value="유광지" />
                                                    <span>유광지</span>
                                                </label>
                                                <label htmlFor="레이플릿">
                                                    <input onChange={onChangeInside} type="radio" id="레이플릿" name="inpaper" value="레이플릿" />
                                                    <span>레이플릿</span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name"><span>케이스</span></div>
                                            <div className="option-content">
                                                <label htmlFor="선택">
                                                    <input onChange={onChangeCase} type="radio" id="선택" name="case" value="선택" />
                                                    <span>선택</span>
                                                </label>
                                                <label htmlFor="선택안함">
                                                    <input onChange={onChangeCase} type="radio" id="선택안함" name="case" value="선택안함" />
                                                    <span>선택안함</span>
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name"><span>수량</span></div>
                                            <div className="option-content">
                                                <div className="number">
                                                    <div className="sub" onClick={subEvent}>-</div>
                                                    <div className="num-box">{selectNumber}</div>
                                                    <div className="add" onClick={addEvent}>+</div>
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="name"><span>페이지</span></div>
                                            <div className="option-content"></div>
                                        </li>
                                        <li>
                                            <div className="name"><span>배송비</span></div>
                                            <div className="option-content"></div>
                                        </li>
                                        <hr/>
                                        <li>
                                            <div className="name"><span>예상가격</span></div>
                                            <div className="option-content"></div>
                                        </li>
                                        <li className="next">
                                            <Link to="/MakeCoverComponent">편집하기</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="line">
                    <hr/>
                </div>
                <div className="slide-container">
                    <div className="left" onClick={prevCount}><i className="material-icons">keyboard_arrow_left</i></div>
                    <div className="right" onClick={nextCount}><i className="material-icons">keyboard_arrow_right</i></div>
                    <div className="slide-view">
                        <ul className="slide-wrap">
                            {list}
                        </ul>
                    </div>
                </div>  
            </div>
        </div>   
    );
};

export default SelectOptionChangeTheme;