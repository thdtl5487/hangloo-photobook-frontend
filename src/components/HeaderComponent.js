import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import imsiLogo from '../images/logo_imsi.png';

export const HeaderComponent = () => {
    return (
        <div id="header">
            <div className="wrap">
                <div className="header-gap">
                    <div className="header-wrap">
                        <div className="logo">
                            <div className="logo-gap">
                                <div className="logo-wrap">
                                    <Link to="/MainComponent"><img src={imsiLogo} alt="imsi-logo" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="title">
                            <div className="title-gap">
                                <div className="title-wrap">
                                    <p>한그루 포토북</p>
                                </div>
                            </div>
                        </div>
                        <div className="cart">
                            <div className="cart-gap">
                                <div className="cart-wrap">
                                    <Link to="/MainComponent"><i className="material-icons">shopping_cart</i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;