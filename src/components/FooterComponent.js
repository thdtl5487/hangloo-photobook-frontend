import React from 'react';
import footerImg from '../images/footer-bg.png'
import footerImgmb from '../images/footer-mobile.png'

const FooterComponent = () => {
    return (
        <div id="footer">
            <div className="wrap">
                <div className="footer-gap">
                    <div className="footer-wrap">
                        <img className="pcfooter" src={footerImg} alt="" />
                        <img className="mbfooter" src={footerImgmb} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FooterComponent;