import React, { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-accordion/dist/index.css';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { DEFAULT_MIN_BREAKPOINT } from 'react-bootstrap/esm/ThemeProvider';

const SelectDetailOption = () => {
    

  const img = [
    {id:1, image:'./img/sampleimg_1.PNG', title:'noPhotoNote'},
    {id:2, image:'./img/sampleimg_2.PNG', title:'noTextAlbum'},
    {id:3, image:'./img/sampleimg_3.PNG', title:'eeee'},
    {id:4, image:'./img/sampleimg_4.PNG', title:'eee33e'},
    {id:5, image:'./img/sampleimg_5.PNG', title:'eeee3333'},

]



  // const [note, setNote] = useState('note');
  // const [album, setAlbum] = useState('album');

  const [choice, setChoice] = useState({
    choicelist:[]
  });

  const onNote = () =>{
    let imsi=[];
    if(choice.choicelist.includes("note")===false){
      setChoice({...choice, choicelist:[...choice.choicelist, "note"]})
    }else{
     imsi = choice.choicelist.filter((item)=>item !== "note");
     setChoice({...choice, choicelist:imsi})
    }
    console.log(choice)
  }

  const onAlbum = ()=>{
    let imsi=[];
    if(choice.choicelist.includes("album")===false){
      setChoice({...choice, choicelist:[...choice.choicelist, "album"]})
    }else{
     imsi = choice.choicelist.filter((item)=>item !== "album");
     setChoice({...choice, choicelist:imsi})
    }
    console.log(choice)
  }

    const [noteCheckList, setNoteCheckList] = useState({
      noteCheckElement:['check1', 'check2','check3']
    });

    const onNoteChange = (e) => {
      let imsi=[];
      console.log("checked" + e.target)
      console.log(e);
      if(e.target.checked===true){
        setNoteCheckList({...noteCheckList, noteCheckElement:[...noteCheckList.noteCheckElement, e.target.value]})
      }else{
        imsi = noteCheckList.noteCheckElement.filter((item)=>item !== e.target.value);
        setNoteCheckList({...noteCheckList, noteCheckElement:imsi});
      }
      console.log(noteCheckList)
      console.log(choice)
    }
    const [content, setContent] = useState();
    
    const onClick = (e) => {

      console.log(e)
        // e.preventDefault();
      // console.log(e.target.value.substring(5))
      // console.log(img[e.target.value.substring(5)-1].id)

      const idx = e.target.value.substring(5)-1;
      setContent(<img src={img[idx].image} alt={img[idx].title}></img>);

    }

    const [albumCheckList, setAlbumCheckList] = useState({
      albumCheckElement:['check4', 'check5']
    })

    const onAlbumChange = (e) => {
      console.log("tttt")
      let imsi=[];
      if(e.target.checked===true){
        setAlbumCheckList({...albumCheckList, albumCheckElement:[...albumCheckList.albumCheckElement, e.target.value]})
      }else{
        imsi = albumCheckList.albumCheckElement.filter((item)=>item !== e.target.value);
        setAlbumCheckList({...albumCheckList, albumCheckElement:imsi});
      }
      console.log(choice)
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
              <outlet />

                  <img src="./img/sampleimg_1.PNG" alt="check1"></img>
                  {content}

            </div>
            </Container>

            
            <div className="detailOption">
            <Accordion alwaysOpen >
              <Accordion.Item eventKey="0">

                  {/* <input type="checkbox" className="btn-check" id="note-check" value="note"
                  onChange = {onNoteChange}
                  checked = {noteCheckList.noteCheckElement.includes('note')}>
                  </input>
                <label className="note" htmlFor="note-check">
                 */}
              <Accordion.Header onClick={onNote}>
                 알림장 선택
              </Accordion.Header>
                  

              <Accordion.Body>


                  
                  <input type="checkbox" className="btn-check" id="btn-check-2-outlined" value="check1"
                  onChange = {onNoteChange}
                  checked = {noteCheckList.noteCheckElement.includes('check1')}
                  onClick = {onClick}>
                  </input>
                  <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined"> 
                  사진 없는 알림장 제외
                  </label>

                  <input type="checkbox" className="btn-check" id="btn-check-2-outlined2" value="check2"
                  onChange = {onNoteChange}
                  checked = {noteCheckList.noteCheckElement.includes('check2')}
                  onClick = {onClick}>
                  </input>
                  <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined2">내용 없는 알림장 제외
                  </label>

                  <input type="checkbox" className="btn-check" id="btn-check-2-outlined3" value="check3"
                  onChange = {onNoteChange}
                  checked = {noteCheckList.noteCheckElement.includes('check3')}
                  onClick = {onClick}>
                  </input>
                  <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined3">가정에서 보낸 알림장 제외
                  </label>

                  </Accordion.Body>
                  </Accordion.Item>
              
              </Accordion>


              <Accordion >
              <Accordion.Item eventKey="1">
              <Accordion.Header onClick={onAlbum}>
                사진앨범 선택
              </Accordion.Header>
                
              <Accordion.Body>

                  <input type="checkbox" className="btn-check" id="btn-check-2-outlined4" value="check4"
                  onChange = {onAlbumChange}
                  checked = {albumCheckList.albumCheckElement.includes('check4')}
                  onClick = {onClick}>
                  </input>
                  <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined4">내용 없는 앨범 제외
                  </label>

                  <input type="checkbox" className="btn-check" id="btn-check-2-outlined5" value="check5"
                  onChange = {onAlbumChange}
                  checked = {albumCheckList.albumCheckElement.includes('check5')}
                  onClick = {onClick}>
                  </input>
                  <label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined5">댓글 없는 앨범 제외
                  </label>


                    </Accordion.Body>
                    </Accordion.Item>
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