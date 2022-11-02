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


    // <li>
    //     <div className="in-theme-gap">
    //         <div className="in-theme-wrap">
    //         <div className="img-wrap">
    //             <img src={theme.image} alt="theme03" />
    //             </div>
    //             <div className="text-wrap">
    //             <p>{theme.theme}</p>
    //             <p>{theme.price}</p>
    //             </div>
    //         </div>
    //     </div>
    // </li>
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

    const list = field.themeList.map(list=>{
        return (
            <li key = {list.theme_num}>
                <div className="in-theme-gap">
                    <div className="in-theme-wrap">
                    <div className="img-wrap">
                        <img src={"/getThemeImg/"+list.theme_num} alt={'theme'+list.theme_num} />
                        </div>
                        <div className="text-wrap">
                        <p>{list.theme_name}</p>
                        <p>{list.theme_price}</p>
                        </div>
                    </div>
                </div>
            </li>
        )
    })    

    // const menu = theme.map((item)=>{
    //     return (
    //         <tr key = {item.번호}>
    //             <td>
    //                 <input 
    //                 type="checkbox" 
    //                 id={`chk${item.번호}`} 
    //                 name={`chk${item.번호}`} 
    //                 value={item.메뉴}
    //                 checked={chkList.includes(`${item.메뉴}`)?true:false}
    //                 onChange={onChangeCheck}
    //                 />
    //             </td>
    //             <td>{item.번호}</td>
    //             <td>{item.이름}</td>
    //             <td>{item.메뉴}</td>
    //         </tr>
    //     )
    // })    

    // const [isOn, setIsOn] = useState(
    //     {
    //         테마:''
    //     }
    // );
    // const onClickIsOn=(e)=>{
    //     setIsOn({...isOn, 테마:e.target.alt})
    //     console.log(e);
    // }
    // const [isHover1, setIsHover1] = useState(false);
    // const [isHover2, setIsHover2] = useState(false);

    // const [isHover, setIsHover] = useState(
    //     {
    //         hover:''
    //     }
    // );
    // const onMouseOver=(e)=>{
    //     console.log(e.target.alt);
    //     setIsHover(e.target.alt);
    // }
    // const onMouseOut=(e)=>{
    //     setIsHover('');
    // }

    // const axoisGet=()=>{
    //     axios({

    //     })
    // }
    // const getThemaImg=(e)=>{
    //     axios.get("/getThemaImg/1").then((res)=>{
    //         var data = res.data;
    //     })
    // }

    return (
        <div id="selectTheme">
            <div className="wrap">
                <div className="price-btn">
                    <div className="price-btn-gap">
                        <div className="price-btn-wrap">
                            <ul>
                                <li><button>200장</button></li>
                                <li><button>500장</button></li>
                                <li><button>800장</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                <div className="theme">
                    <div className="theme-gap">
                        <div className="theme-wrap">
                            <ul>
                                {list}
                                {/* <li className="theme1">
                                    <div className="in-theme-gap">
                                        <div onClick={onClickIsOn} className={isOn.테마 === "theme01" ? "in-theme-wrap on" : "in-theme-wrap"}>
                                        <div className="img-wrap">
                                            <img src={isHover.hover==="theme01" ? theme011 : theme01} alt="theme01" value="theme01"
                                                onMouseOver={onMouseOver}
                                                onMouseOut={onMouseOut}
                                            />
                                        <img src={"/getThemaImg/1"} alt="" />                                            
                                        </div>
                                        <div className="text-wrap">
                                            <p>테마 이름</p>
                                            <p>예상 가격</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="theme2">
                                    <div className="in-theme-gap">
                                        <div className="in-theme-wrap">
                                        <div className="img-wrap">
                                            <img src={isHover2 ? theme02 : theme021} alt="theme01"
                                                onMouseOver={() =>{ setIsHover2(true);}}
                                                onMouseOut={() => { setIsHover2(false); }}
                                            />
                                        </div>
                                        <div className="text-wrap">
                                            <p>테마 이름</p>
                                            <p>예상 가격</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="theme3">
                                    <div className="in-theme-gap">
                                        <div className="in-theme-wrap">
                                        <div className="img-wrap">
                                            <img src={theme03} alt="theme03" />
                                            </div>
                                            <div className="text-wrap">
                                            <p>테마 이름</p>
                                            <p>예상 가격</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="theme4">
                                    <div className="in-theme-gap">
                                        <div className="in-theme-wrap">
                                        <div className="img-wrap">
                                            <img src={theme04} alt="theme04" />
                                            </div>
                                            <div className="text-wrap">
                                            <p>테마 이름</p>
                                            <p>예상 가격</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="theme5">
                                    <div className="in-theme-gap">
                                        <div className="in-theme-wrap">
                                            <div className="img-wrap">
                                            <img src={theme05} alt="theme05" />
                                            </div>
                                            <div className="text-wrap">
                                            <p>테마 이름</p>
                                            <p>예상 가격</p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                */}
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
// SelectThemeComponent.defaultProps = {
//         theme: [
//             {num:1, image:theme01, theme:'느영나영제주', price:'20000'},
//             {num:2, image:theme02, theme:'my travel diary', price:'30000'},
//             {num:3, image:theme03, theme:'행복한 가족여행', price:'25000'},
//             {num:4, image:theme04, theme:'sweet my love', price:'35000'},
//             {num:5, image:theme05, theme:'여행을 떠나요', price:'30000'},
//         ]
// }
export default SelectThemeComponent;