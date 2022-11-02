import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge} from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';

const FooterComponent = () => {

    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
      });

      const isPc = useMediaQuery({
        query: "(min-width:769px)"
      });


    return (
        
        <><div id="footer">
            
            <p>
                <img className="logo" name="logoimage" alt="logo" src="img/logosample.PNG" />
                <div className="footer1">
                    <strong class="name">㈜한그루</strong> &nbsp;대표자 및 정보보호 담당자 : 박우종<br />
                    주소: 경기도 파주시 탄현면 헤이리마을길 93-75<br />
                    사업자등록번호 : 648-81-01362　|　통신판매업신고번호 : 2019-경기파주-1502<br />
                    Copyright © https://www.hangloo.co.kr All rights reserved<br />
                </div>

                <div className="footer2">
                    <strong className="name">고객센터</strong> <strong className="phone">02-3143-7015</strong><br />

                    월-금 09:00~18:00 / 점심시간 12:00~13:00<br />
                    - 고객센터로 연락주시면 언제든지 친절히 안내해드리겠습니다.<br />
                    - 세부적인 문의는 관련 사진을 첨부하여 한그루 카톡채널로 연락 주시면 좀 더 빠르게 확인이 가능합니다.<br />
                </div>
            </p>

        </div><div>

                {/* <div className='test'> {isMobile ? "mobile" : <footer />}</div> */}
            </div></>
        

    );
};

export default FooterComponent;