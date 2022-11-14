import React, {useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import $ from 'jquery';
import image1 from '../images/hard (1).jpg';
import image2 from '../images/hard (3).jpg';

const SelectOptionChangeTheme = ({albumnote, setAlbumnote}) => {
    const [selectNumber, setSelectNumber] = useState(0);
    const addEvent=(event)=>{
        event.preventDefault();   
        setSelectNumber(selectNumber+1);
    }
    const subEvent=(event)=>{
        event.preventDefault();
        if(selectNumber>0){
            setSelectNumber(selectNumber-1);
        }
    }

    const [optionList, setOptionList] = useState({
        size:'',
        cover:'',
        coverCoating:'',
        inside:'',
        case:''
    })
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
                                        <div className="left"><i className="material-icons">keyboard_arrow_left</i></div>
                                        <div className="photo-example">
                                        <img
                                        src={"/photobookServer/getThemeImg/"+localStorage.getItem('theme_num')} 
                                        alt={'Theme'+albumnote.themeNum}
                                        />
                                        </div>
                                        <div className="right"><i className="material-icons">keyboard_arrow_right</i></div>
                                    </div>
                                </div>
                            </div>
                            <div className="option-list">
                                <div className="option-list-gap">
                                    <ul className="option-list-wrap">
                                        <li>
                                            <div className="name"><span>테마</span></div>
                                            <div className="option-content"><p>테마이름</p></div>
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
                                        <li>
                                            <div className="name"><span>커버</span></div>
                                            <div className="option-content">
                                                <label htmlFor="하드커버">
                                                    <input onChange={onChangeCover} type="radio" id="하드커버" name="cover" value="하드커버" />
                                                    <span>하드커버</span>
                                                </label>
                                                <label htmlFor="소프트커버">
                                                    <input onChange={onChangeCover} type="radio" id="소프트커버" name="cover" value="소프트커버" />
                                                    <span>소프트커버</span>
                                                </label>
                                                <label htmlFor="레더커버">
                                                    <input onChange={onChangeCover} type="radio" id="레더커버" name="cover" value="레더커버" />
                                                    <span>레더커버</span>
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
                                            <Link to="/SelectOptionChangeTheme">편집하기</Link>
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
                    <div className="slide-view">
                        <ul className="slide-wrap"></ul>
                    </div>
                </div>  
            </div>
        </div>   
    );
};

export default SelectOptionChangeTheme;