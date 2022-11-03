import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-accordion/dist/index.css';
import { Accordion } from 'react-bootstrap-accordion';
import { Link } from 'react-router-dom';
import Note from './Note';
import Album from './Album';
import { Container } from 'react-bootstrap';
import Sampleimg from './Sampleimg';


const SelectDetailOption = () => {
    


    const [noteCheckList, setNoteCheckList] = useState([])

    // const [noteCheckList, setNoteCheckList] = useState({
    //   notevalue:[],
    //   checked1:true,
    //   checked2:false,
    //   checked3:false
    // })

    const [albumCheckList, setAlbumCheckList] = useState([])

    const noteCheckElement = (checked, item) => {
      if(checked){
        setNoteCheckList([...noteCheckList, item]);
        console.log("알림장체크반영")
      }else if(!checked){
        setNoteCheckList(noteCheckList.filter((el) => el !== item));

      }
    }


    const albumCheckElement = (checked, item) => {
      if(checked){
        setAlbumCheckList([...albumCheckList, item]);
        console.log("사진앨범체크반영")
      }else if(!checked){
        setAlbumCheckList(albumCheckList.filter((el) => el !== item));
        console.log("사진앨범체크해제")
      }
    }


    const [content, setContent] = useState();

    const handleClickButton = (id) => {
      // const {value} = content
      // setContent(value);

      console.log("clickbuttontest")
      console.log("zz" + id)
      Sampleimg(id.toString)
    }

    const selectComponent = {
      note : <Note/>,
      album : <Album />,
    }


    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
      });

      const isPc = useMediaQuery({
        query: "(min-width:769px)"
      });


    return (
      <>
        <div id="selectDetail">

            <h2>
            Step2. 삽입할 항목을 선택하세요.            
            </h2>
              
            <Container>
            <div className="sampleimg">
              
            {/* <img src='./img/sampleimg_2.PNG' alt="test"></img> */}

              {/* {sampleimg(1)} */}
              <Sampleimg/>
              "ddd"
            </div>
            </Container>

            
            <div className="detailOption">
              <Accordion title="알림장 선택" name="Note" id="Note">

                  <input type="checkbox" className="btn-check" id="btn-check-2-outlined" value="check1"
                  onChange={e=>{noteCheckElement(e.currentTarget.checked, e.target.value);}}
                  checked = {noteCheckList.includes('check1')? true :false }
                  onClick = {(e)=>handleClickButton(e.target.value.substring(5)-1)}>
                  </input>
                  <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined"> 사진 없는 알림장 선택
                  </label>

                  <input type="checkbox" className="btn-check" id="btn-check-2-outlined2" value="check2"
                  onChange={e=>{noteCheckElement(e.currentTarget.checked, e.target.value);}}
                  checked = {noteCheckList.includes('check2')? true:false}
                  onClick = {(e)=>handleClickButton(e.target.value.substring(5)-1)}>
                  </input>
                  <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined2">내용 없는 알림장 선택
                  </label>

                  <input type="checkbox" className="btn-check" id="btn-check-2-outlined3" value="check3"
                  onChange={e=>{noteCheckElement(e.currentTarget.checked, e.target.value);}}
                  checked = {noteCheckList.includes('check3')? true:false}
                  onClick = {(e)=>handleClickButton(e.target.value.substring(5)-1)}>
                  </input>
                  <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined3">가정에서 보낸 알림장 선택
                  </label>

              </Accordion>


              <Accordion title="사진앨범 선택" >

                  <input type="checkbox" className="btn-check" id="btn-check-2-outlined4" value="check4"
                  onChange={e=>{albumCheckElement(e.currentTarget.checked, e.target.value);}}
                  checked = {albumCheckList.includes('check4')? true:false}
                  onClick = {(e)=>handleClickButton(e.target.value.substring(5)-1)}>
                  </input>
                  <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined4">내용 없는 앨범 선택
                  </label>

                  <input type="checkbox" className="btn-check" id="btn-check-2-outlined5" value="check5"
                  onChange={e=>{albumCheckElement(e.currentTarget.checked, e.target.value);}}
                  checked = {albumCheckList.includes('check5')? true:false}
                  onClick = {(e)=>handleClickButton(e.target.value.substring(5)-1)}>
                  </input>
                  <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined5">댓글 없는 앨범 선택
                  </label>


              </Accordion>
              
            </div>

            <div className="next-btn">
                    <div className="next-btn-gap">
                        <div className="next-btn-wrap">
                            <Link to="/">다음</Link>
                        </div>
                    </div>
                </div>

            
        </div>
      </>
    );
};

export default SelectDetailOption;