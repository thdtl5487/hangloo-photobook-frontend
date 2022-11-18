import React from 'react';
import kids2 from '../images/kidsdummy2.jpeg';
import {format} from 'date-fns';

const ImgModalComponent = ({selectedDate, imgModal, imgModalClose}) => {

    // const { selectedDate, open, close, imgModal, imgModalClose} = props;
    // console.log("모달창"+selectedDate);


    const PhotoList = () => {
        return(
            <img src={kids2} alt="" />
        )
    }

    return (
        imgModal.isShow && (

        <div id="img-modal">
            <div className="modal-gap">
                <div className="modal-wrap">
                    <div className="photo-list">
                        <div className="date-gap">
                            <div className="date-wrap">
                                <div className="date-box">
                                    <p>{format(new Date(selectedDate), "MM월 dd일")}</p>
                                </div>
                            </div>
                        </div>
                        <ul className="photo">
                            <li className="photo-frame">
                                <div className="photo-frame-gap">
                                    <div className="photo-frame-wrap">
                                        <label htmlFor="a">
                                            <input type="checkbox" id="a" name="a" value="a"/>
                                            <PhotoList/>
                                        </label>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="done">
                        <div className="done-gap">
                            <div className="done-wrap">
                                <button onClick={imgModalClose}>선택 완료</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    );
};

export default ImgModalComponent;