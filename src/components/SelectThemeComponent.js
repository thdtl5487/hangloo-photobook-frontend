import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import theme01 from '../images/hard (2).jpg'
import theme011 from '../images/hard (3).png'
import theme02 from '../images/hard (4).jpg'
import theme021 from '../images/hard (5).png'
import theme03 from '../images/hard (6).jpg'
import theme04 from '../images/hard (8).jpg'
import theme05 from '../images/hard (10).jpg'
import axios from 'axios';

const SelectThemeComponent = () => {

    //테마 데이터로 리스트 작성
    const [field, setField] = useState(
        {
            themeList:[]
        }
    )
    
    const axiosGet=()=>{
        axios({
            url:'/getThemeAll',
            method:'GET'
        })
        .then((res)=>{
            console.log(res.data);
            setField({themeList:res.data})
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
        e.target.src = "/getThemeSubImg/" + e.target.id;
    }
    const onMouseOut = (e) => {
        e.target.src = "/getThemeImg/" + e.target.id;
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
    const list = field.themeList.map(list=>{
        return (
            <li key = {list.theme_num}>
                <div className="in-theme-gap">
                    <div className="in-theme-wrap">
                        <div className="img-wrap">
                            <img
                            src={"/getThemeImg/"+list.themeNum} 
                            alt={'Theme'+list.themeNum}
                            id={list.themeNum}
                            onMouseOver={onMouseOver}
                            onMouseOut={onMouseOut}
                            />
                        </div>
                        <div className="text-wrap">
                        <p>{list.themeName}</p>
                        <p className='price-text'>{makeComma(list.themePrice)}원</p>
                        </div>
                    </div>
                </div>
            </li>
        )
    })    

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
                            <Link to="/SelectKidsComponent">다음</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectThemeComponent;