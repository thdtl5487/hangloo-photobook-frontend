import React from 'react';
import { Link } from 'react-router-dom';

const MakeDetailComponent = () => {








    return (
        <div id="makeDetail">
            <div className="wrap">
                <div className="info-wrap">
                    <div className="info">
                        A테마 총 페이지수 예상 가격 : 
                    </div>
                </div>

                <div className="list-wrap">
                    <li>


                    </li>
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

export default MakeDetailComponent;