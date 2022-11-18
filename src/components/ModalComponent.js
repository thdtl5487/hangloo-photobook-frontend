import axios from 'axios';
import React, {useState, useEffect, useRef} from 'react';
import kids2 from '../images/kidsdummy2.jpeg';
import kids3 from '../images/kidsdummy3.jpeg';

const ModalComponent = ({modal, setModal, modalCloseFn, monthData}) => {
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

    const reciveDataTest= ()=>{
        console.log(monthData)
    }
    const [question, setQuestion] = useState(
        {
            question:[]
        }
    )
  
    const axiosFn=()=>{
        //let tempuid = list.linkUrl.split('?id=note&type=view&uid=').slice(1);
        let tempuid = [];
        if(monthData.monthData.length >= 1){
            for(let i=0; i<monthData.monthData.length; i++){
                tempuid.push(monthData.monthData[i].linkUrl.split('?id=note&type=view&uid=').slice(1));
            }
        }

        //let result = '';
        console.log('tempuid', tempuid);
        tempuid.map(()=>{
            axios({
                url: "/photobook/api/photos.php?comm_uid="+tempuid+"&type=note",
                method: "GET",
                headers: {  
                    "Content-Type": 'application/json'
                }        
            }).then((res)=>{
                    console.log('959641', res.data.list.photo_list);
                    setQuestion({...question, question:[res.data.list.photo_list]})
                }
            )
        })
    }
    useEffect(()=>{
        axiosFn();
    },[monthData])

    const photoList = question.question.map((question,index)=>{
        return (
            <li className="photo-frame" key={index}>
            <div className="photo-frame-gap">
                <div className="photo-frame-wrap">
                    <label htmlFor={index}>
                        <input type="checkbox" id={index} name={index} value="a"/>
                        {/* {axiosFn()} */}
                        <img src={question} alt={question} />
                        {/* <img src={printNotePicture(list.linkUrl.split('?id=note&type=view&uid='))} alt="" /> */}
                        {/* {printNotePicture(list.linkUrl.split('?id=note&type=view&uid='))}
                        {/* <img src={"/photobook/api/photos.php?comm_uid="+list.linkUrl.split('?id=note&type=view&uid=').slice(1)+"&type=note"} alt="" />
                        {list.linkUrl.split('?id=note&type=view&uid=').slice(1)} */}
                    </label>
                </div>
            </div>
        </li>
        )
    })
    //const test = (e) => {
        //console.log('작동하는지 테스트', monthData.monthData[0]);
        // let tempuid = monthData.monthData[0].linkUrl.split('?id=note&type=view&uid=').slice(1);
        // axios({
        //     url: "/photobook/api/photos.php?comm_uid="+tempuid+"&type=note",
        //     method: "GET",
        //     headers: {
        //         "Content-Type": 'application/json'
        //     }        
        // }).then((res)=>{
        //     console.log(res.data);
        // })
    //}
    // useEffect(()=>{
    //     test();
    // },[monthData])
    

    // const photoList = (e) =>  {
    //     for(let i=0; i<monthData.monthData.length; i++){
    //         return(
    //         <li className="photo-frame">
    //             <div className="photo-frame-gap">
    //                 <div className="photo-frame-wrap">
    //                     <label htmlFor="a">
    //                         <input type="checkbox" id="a" name="a" value="a"/>
    //                         {/* <img src={kids2} alt="" /> */}
    //                             {i}
    //                     </label>
    //                 </div>
    //             </div>
    //         </li>
    //         )
    //     }    
    // }

    // const printNotePicture = (uid) =>{
    //     var tempuid = uid.slice(1);
    //     var result;
    //     const axiosFn=()=>{
    //         axios({
    //             url: "/photobook/api/photos.php?comm_uid="+tempuid+"&type=note",
    //             method: "GET",
    //             headers: {
    //                 "Content-Type": 'application/json'
    //             }        
    //         }).then((res)=>{
    //             // if(res.data.list.photo_list===undefined){
    //             //     return;
    //             // }
    //             // else {
    //                 //let result = res.data.list.photo_list;
    //                 console.log(res.data.list.photo_list[0]);
    //                 //return (
    //                 //    result
    //                 //)
    //                 result = res.data.list.photo_list[0];
    //                 setQuestion({...question, question:res.data.list.photo_list[0]});
    //             //}
    //             }
    //         )
    //         console.log("result : ", result);
    //     }
    //     axiosFn();
    //     console.log('resultresult', result);

    // //     console.log("result out axios : ",result);
    // //     return (
    // //         <img src={result} alt="zz" />
    // //     )
        
    // }


    // const photoList = monthData.monthData.map((photoList,index)=>{    
    //     return (
    //         <li className="photo-frame" key={index}>
    //             <div className="photo-frame-gap">
    //                 <div className="photo-frame-wrap">
    //                     <label htmlFor={index}>
    //                         <input type="checkbox" id={index} name={index} value="a"/>
    //                         <img src={printNotePicture(photoList.linkUrl.split('?id=note&type=view&uid='))} alt="" />
    //                         {/* {printNotePicture(photoList.linkUrl.split('?id=note&type=view&uid='))} */}
    //                         {/* {printNotePicture(photoList.linkUrl.split('?id=note&type=view&uid='))} */}
    //                     </label>
    //                 </div>
    //             </div>
    //         </li>
    //     )
    // })
    // const photoList = monthData.monthData.map((photoList,index)=>{    
    //     return (
    //         <li className="photo-frame" key={index}>
    //             <div className="photo-frame-gap">
    //                 <div className="photo-frame-wrap">
    //                     <label htmlFor={index}>
    //                         <input type="checkbox" id={index} name={index} value="a"/>
    //                         <img src={printNotePicture(photoList.linkUrl.split('?id=note&type=view&uid='))} alt="" />
    //                         {/* {printNotePicture(photoList.linkUrl.split('?id=note&type=view&uid='))} */}
    //                         {/* {printNotePicture(photoList.linkUrl.split('?id=note&type=view&uid='))} */}
    //                     </label>
    //                 </div>
    //             </div>
    //         </li>
    //     )
    // })        

    // const photoList = printNotePicture(monthData.monthData.linkUrl.split('?id=note&type=view&uid=')).map((photolist,index)=>{
    //     console.log(index);
    //     console.log(photolist);
    // })

    // const photoList = question.question.map(question=>{
    //     return (
    //     <img src={question} alt={question} />
    //     )
    // })

    const list = monthData.monthData.map((list,index)=>{    
        return (
            <li className="photo-date" key={index}>
                <div className="date">
                    <p>{list.dateWeek}</p>
                </div>
                <ul className="photo">
                    {photoList}
                </ul>
            </li>
        )
    })  


    return (
        modal.isShow && (
            <div id="modal" ref={outSection} onClick={(e)=>{
                if(outSection.current === e.target) {
                    modalCloseFn();
                }
            }}>
            {reciveDataTest()}
            <div className="modal-gap">
                <div className="modal-wrap">
                    <div className="month">
                        <div className="month-gap">
                            <div className="month-wrap">
                                <div className="sub"><i className="material-icons">keyboard_arrow_left</i></div>
                                <div className="month-box">
                                    {/* {notice[0].dateWeek.slice(3,5)}월 */}
                                    10월
                                </div>
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
                                {list}
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