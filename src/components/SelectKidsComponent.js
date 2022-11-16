import axios from 'axios';
import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import dummy from '../dummydb/data.json';
import kids1 from '../images/kidsdummy1.jpeg';
import kids2 from '../images/kidsdummy2.jpeg';
import kids3 from '../images/kidsdummy3.jpeg';

const SelectKidsComponent = () => {

    const [selectedKids, setSelectedKids] = useState({
        selectedKidsNum:""
    });
    const clickKids = (e) => {
        if(e.target.id !== ""){ // 클릭 가능한 구역 제한
            selectedOff();
            e.target.classList.add("on"); // 클릭한 테마 표시를 위한 class 추가
            console.log(e);
            setSelectedKids({selectedKidsNum:e.target.id});
            localStorage.setItem("kids_num", e.target.id);
            console.log(e.target.id);
        }
        if(e.target.alt !== null){ // 이미지인지 체크
            e.target.parentNode.parentNode.classList.add("on")
            const imgEle = document.querySelectorAll("img");
            for(var i = 0; i<imgEle.length; i++){
                imgEle[i].classList.remove("on");
            }
        }

        setSelectedKids({selectedkidsNum:e.target.id});
    }

    // 다른 테마를 선택했을 경우, 다른 테마의 선택표시를 제거하는 기능
    const selectedOff = (e) =>{
        const removeClassEle = document.querySelectorAll(".on");
            for(var i = 0; i<removeClassEle.length; i++){
                removeClassEle[i].classList.remove("on");
            }
    }

    const [kids, setKids] = useState(
        {
            kidsList:[]
        }
    )

    const axiosGet=()=>{
        axios({
            url: "/photobook/api/children.php",
            method: "GET"
        }).then((res)=>{
            console.log("API의 아동 정보 불러오기 기능 실행");
            console.log(res);
            setKids({kidsList:res.data.list});
        }).catch((err)=>{
            console.log(err);
        })
    }

    useEffect(()=>{
        axiosGet();
    }, []);

    // 썸네일 유무를 확인하기 위한 기능
    const checkThumbnail = (photo) =>{
        if(photo){
            return "https://s3.ap-northeast-2.amazonaws.com/test.hangloo.erp/" + photo
        }else{
            return "http://dev3.hangloo.co.kr/m/img/app-noimg2.png"
        }
    }

    const printKidsList = kids.kidsList.map(kidsList=>{
        return (
            <li key = {kidsList.child_uid}>
                <div className="in-kids-gap">
                    <div className="in-kids-wrap" id={kidsList.child_uid} onClick={clickKids}>
                        <div className="img-wrap" id={kidsList.child_uid}>
                            <img
                            src={checkThumbnail(kidsList.photo)}
                            alt={"kids"+kidsList.child_uid}
                            id={kidsList.child_uid}
                            />
                        </div>
                        <div className="text-wrap" id={kidsList.child_uid}>
                        <p id={kidsList.child_uid}>{kidsList.name}</p>
                        <p id={kidsList.child_uid}>{kidsList.birthday}</p>
                        </div>
                    </div>
                </div>
            </li>
        )
    })
    
    const createNextBtn = (e) =>{
        console.log(e)
        if(selectedKids.selectedKidsNum !== ""){
            return(
                <Link to="/SelectDetailOptionComponent">다음</Link>
            )
        }else{
            return(
                <Link className='disabled'>다음</Link>
            )
        }
    }

    return (
        <div id="selectkids">
            <div className="wrap">
                <div className="step1">
                    <div className="step1-gap">
                        <div className="step1-wrap">
                            <p>Step1. 아이를 선택해 주세요.</p>
                        </div>
                    </div>
                </div>
                
                <div className="kids">
                    <div className="kids-gap">
                        <div className="kids-wrap">
                            <ul>
                                {printKidsList}
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

export default SelectKidsComponent;