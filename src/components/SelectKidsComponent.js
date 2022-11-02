import React from 'react';
import { Link } from 'react-router-dom';
import dummy from '../dummydb/data.json';
import kids1 from '../images/kidsdummy1.jpeg'
import kids2 from '../images/kidsdummy2.jpeg'
import kids3 from '../images/kidsdummy3.jpeg'

const SelectKidsComponent = () => {
    const kidsList = dummy.kids.map(kidsList=>{
        return (
            <li key = {kidsList.id}>
                <div className="in-kids-gap">
                    <div className="in-kids-wrap">
                        <div className="img-wrap">
                            <img src={kids1} alt="" />
                            {/* <img
                            src="../images/kidsdummy1.jpeg"
                            alt={"kids"+kidsList.id}
                            id={kidsList.id}
                            /> */}
                        </div>
                        <div className="text-wrap">
                        <p>{kidsList.kidsName}</p>
                        <p>{kidsList.kidsBirth}</p>
                        </div>
                    </div>
                </div>
            </li>
        )
    })    

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
                                {kidsList}
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="next-btn">
                    <div className="next-btn-gap">
                        <div className="next-btn-wrap">
                            <Link to="/SelectDetailOption">다음</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectKidsComponent;