import React, {useEffect, useRef} from 'react';
import kids2 from '../images/kidsdummy2.jpeg';
import kids3 from '../images/kidsdummy3.jpeg';

const ModalComponent = ({modal, setModal, modalCloseFn}) => {
    // useEffect(() => {
    //     document.body.style.cssText = `
    //       position: fixed; 
    //       top: -${window.scrollY}px;
    //       overflow-y: scroll;
    //       width: 100%;`;
    //     return () => {
    //       const scrollY = document.body.style.top;
    //       document.body.style.cssText = '';
    //       window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    //     };
    //   }, []);

    const outSection = useRef();
    const outSection2 = useRef();
    
    return (
        modal.isShow && (
        <div id="modal" ref={outSection} onClick={(e)=>{
            if(outSection.current === e.target) {
                modalCloseFn();
            }
        }}>
            <div className="modal-gap">
                <div className="modal-wrap">
                    <div className="month">
                        <div className="month-gap">
                            <div className="month-wrap">
                                <div className="sub"><i className="material-icons">keyboard_arrow_left</i></div>
                                <div className="month-box">10월</div>
                                <div className="add"><i className="material-icons">keyboard_arrow_right</i></div>
                            </div>
                        </div>
                    </div>
                    <div className="select-or-not">
                        <div className="select-or-not-gap">
                            <ul className="select-or-not-wrap">
                                <li>
                                    <label htmlFor="selectallNote">
                                        <input type="checkbox" id="selectallNote" name="selectallNote" value="selselectallNoteectall" />
                                        <div className="text">
                                            <p>전체 선택</p>
                                        </div>
                                    </label>
                                </li>
                                <li>
                                    <label htmlFor="selectnoneNote">
                                        <input type="checkbox" id="selectnoneNote" name="selectnoneNote" value="selectnoneNote" />
                                        <div className="text">
                                            <p>전체 해제</p>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="photo-list">
                        <div className="photo-list-gap">
                            <ul className="photo-list-wrap">
                                <li className="photo-date">
                                    <div className="date">
                                        <p>10월 21일</p>
                                    </div>
                                    <ul className="photo">
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <label htmlFor="a">
                                                        <input type="checkbox" id="a" name="a" value="a"/>
                                                        <img src={kids2} alt="" />
                                                    </label>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="photo-date">
                                    <div className="date">
                                        <p>10월 22일</p>
                                    </div>
                                    <ul className="photo">
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="photo-date">
                                    <div className="date">
                                        <p>10월 23일</p>
                                    </div>
                                    <ul className="photo">
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids2} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                        <li className="photo-frame">
                                            <div className="photo-frame-gap">
                                                <div className="photo-frame-wrap">
                                                    <img src={kids3} alt="" />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="done">
                        <div className="done-gap">
                            <div className="done-wrap">
                                <button onClick={modalCloseFn}>선택 완료</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    );
};

export default ModalComponent;