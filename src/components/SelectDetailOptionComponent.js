import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-accordion/dist/index.css';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { DEFAULT_MIN_BREAKPOINT } from 'react-bootstrap/esm/ThemeProvider';
import apiloader from '../apiutil/apiloader';

const SelectDetailOption = ({albumnote, setAlbumnote}) => {
  
	useEffect(()=>{
		setAlbumnote({...albumnote, albumnote:[], notenophoto:0, notenocontent:0, notefromhome:0, albumnocontent:0, albumnocomment:0})
    },[]);
	const onClickdisabled = (e) => {
		alert('알림장과 노트를 선택해 주세요');
	}

	apiloader.childCheck();

	const noteAlbumSelect = (e) =>{
        if(albumnote.albumnote.length<=0){
			return (
				<Link className='disabled' onClick={onClickdisabled}>다음</Link>
			)
        }else{
			if(albumnote.albumnote.includes('note')===true){
				return(
					<Link to="/SelectDetailOptionNote">다음</Link>
				)
			}
			else {
				return(
					<Link to="/SelectDetailOptionAlbum">다음</Link>
				)
			}
        }
    }

	const img = [
		{id:1, image:'./img/sampleimg_1.PNG', title:'noPhotoNote'},
		{id:2, image:'./img/sampleimg_2.PNG', title:'noTextAlbum'},
		{id:3, image:'./img/sampleimg_3.PNG', title:'eeee'},
		{id:4, image:'./img/sampleimg_4.PNG', title:'eee33e'},
		{id:5, image:'./img/sampleimg_5.PNG', title:'eeee3333'},
	]





//   const [note, setNote] = useState('note');
//   const [album, setAlbum] = useState('album');

	const [choice, setChoice] = useState({
		choicelist:[]
	});

  const [checkNoteText, setCheckNoteText] = useState('선택');
  const [checkAlbumText, setCheckAlbumText] = useState('선택');

  const onNote = () =>{
    let imsi=[];
	let imsi2=[];
    if(choice.choicelist.includes("note")===false){
      setChoice({...choice, choicelist:[...choice.choicelist, "note"]})
	  setAlbumnote({...albumnote, albumnote:[...albumnote.albumnote, "note"], notenophoto:1, notenocontent:1, notefromhome:1})
	  setCheckNoteText(<>선택</>)
    }else{
     imsi = choice.choicelist.filter((item)=>item !== "note");
	 imsi2 = albumnote.albumnote.filter((item)=>item !=="note")
     setChoice({...choice, choicelist:imsi})
	 setAlbumnote({...albumnote, albumnote:imsi2, notenophoto:0, notenocontent:0, notefromhome:0})
	 setCheckNoteText(<>해제</>)
    }
    //console.log(choice)
  }

  const onAlbum = ()=>{
    let imsi=[];
	let imsi2=[];
    if(choice.choicelist.includes("album")===false){
      setChoice({...choice, choicelist:[...choice.choicelist, "album"]})
	  setAlbumnote({...albumnote, albumnote:[...albumnote.albumnote, "album"], albumnocontent:1, albumnocomment:1})
	  setCheckAlbumText(<>선택</>)
    }else{
     imsi = choice.choicelist.filter((item)=>item !== "album");
	 imsi2 = albumnote.albumnote.filter((item)=>item !=="album")
     setChoice({...choice, choicelist:imsi})
	 setAlbumnote({...albumnote, albumnote:imsi2, albumnocontent:0, albumnocomment:0})
	 setCheckAlbumText(<>해제</>)
    }
    //console.log(choice)
  }

    const [noteCheckList, setNoteCheckList] = useState({
		noteCheckElement:['check1', 'check2','check3']
    });
	

	// const textChocie = "선택";
	// const textCancle = "제외";

	const [check1Text, setCheck1Text] = useState('제외');
	const [check2Text, setCheck2Text] = useState('제외');
	const [check3Text, setCheck3Text] = useState('제외');
	const [check4Text, setCheck4Text] = useState('제외');
	const [check5Text, setCheck5Text] = useState('제외');

	const textCheck1Change = (e) => {
		if(e.target.checked===false){
			//console.log("text"+ e.target.checked)
			setCheck1Text(<>선택</>)
		}else{
			
			setCheck1Text(<>제외</>)
		}

	}

	const textCheck2Change = (e) => {
		if(e.target.checked===false){
			//console.log("text"+ e.target.checked)
			setCheck2Text(<>선택</>)
		}else{
			
			setCheck2Text(<>제외</>)
		}

	}

	const textCheck3Change = (e) => {
		if(e.target.checked===false){
			//console.log("text"+ e.target.checked)
			setCheck3Text(<>선택</>)
		}else{
			
			setCheck3Text(<>제외</>)
		}

	}
	
	const textCheck4Change = (e) => {
		if(e.target.checked===false){
			//console.log("text"+ e.target.checked)
			setCheck4Text(<>선택</>)
		}else{
			
			setCheck4Text(<>제외</>)
		}

	}

	const textCheck5Change = (e) => {
		if(e.target.checked===false){
			//console.log("text"+ e.target.checked)
			setCheck5Text(<>선택</>)
		}else{
			
			setCheck5Text(<>제외</>)
		}

	}


    const onNoteChange = (e) => {
		let imsi=[];
		//console.log("checked" + e.target)
		//console.log(e);
		if(e.target.checked===true){ //등록하기 위해 누를 때
			setNoteCheckList({...noteCheckList, noteCheckElement:[...noteCheckList.noteCheckElement, e.target.value]})
			if(e.target.value==='check1'){
				if(noteCheckList.noteCheckElement.includes('check1')===false){
					setAlbumnote({...albumnote, notenophoto:1});
				}
			}
			if(e.target.value==='check2'){
				if(noteCheckList.noteCheckElement.includes('check2')===false){
					setAlbumnote({...albumnote, notenocontent:1});
				}
			}
			if(e.target.value==='check3'){
				if(noteCheckList.noteCheckElement.includes('check3')===false){
					setAlbumnote({...albumnote, notefromhome:1});
				}
			}
		}else{ //해제하기 위해 누를 때
			imsi = noteCheckList.noteCheckElement.filter((item)=>item !== e.target.value);
			setNoteCheckList({...noteCheckList, noteCheckElement:imsi});
			if(e.target.value==='check1'){
				if(noteCheckList.noteCheckElement.includes('check1')===true){
					setAlbumnote({...albumnote, notenophoto:0});
				}
			}
			if(e.target.value==='check2'){
				if(noteCheckList.noteCheckElement.includes('check2')===true){
					setAlbumnote({...albumnote, notenocontent:0});
				}
			}
			if(e.target.value==='check3'){
				if(noteCheckList.noteCheckElement.includes('check3')===true){
					setAlbumnote({...albumnote, notefromhome:0});
				}
			}
		}
		//console.log(noteCheckList)
		//console.log(choice)
    }


    const [content, setContent] = useState();
    
    const onImgClick = (e) => {
      	//console.log(e)
        // e.preventDefault();
      // console.log(e.target.value.substring(5))
      // console.log(img[e.target.value.substring(5)-1].id)

      	const idx = e.target.value.substring(5)-1;
      	setContent(<img className="sub" src={img[idx].image} alt={img[idx].title}></img>);
    }

    const [albumCheckList, setAlbumCheckList] = useState({
      albumCheckElement:['check4', 'check5']
    })

    const onAlbumChange = (e) => {
      let imsi=[];
      if(e.target.checked===true){
        setAlbumCheckList({...albumCheckList, albumCheckElement:[...albumCheckList.albumCheckElement, e.target.value]})
		if(e.target.value==='check4'){
			if(albumCheckList.albumCheckElement.includes('check4')===false){
				setAlbumnote({...albumnote, albumnocontent:1});
			}
		}
		if(e.target.value==='check5'){
			if(albumCheckList.albumCheckElement.includes('check5')===false){
				setAlbumnote({...albumnote, albumnocomment:1});
			}
		}
      }else{
        imsi = albumCheckList.albumCheckElement.filter((item)=>item !== e.target.value);
        setAlbumCheckList({...albumCheckList, albumCheckElement:imsi});
		if(e.target.value==='check4'){
			if(albumCheckList.albumCheckElement.includes('check4')===true){
				setAlbumnote({...albumnote, albumnocontent:0});
			}
		}
		if(e.target.value==='check5'){
			if(albumCheckList.albumCheckElement.includes('check5')===true){
				setAlbumnote({...albumnote, albumnocomment:0});
			}
		}
      }
      //console.log(choice)
    }


    return (
        <div id="selectDetail">
            <div className="wrap">
              
                <div classNmae="step2">
                  <div className="step2-gap">
                    <div className="step2-wrap">
                      <p>Step2. 삽입할 항목을 선택하세요.</p>    
                    </div>
                  </div>
                </div>
                
                  
                <div className="detail">
					<div className="img-wrap">
							<img className="main" src="./img/sampleimg_1.PNG" alt="check1"/>
							{content}
					</div>  

					
					<div className="detailOption">
						<div className="select-wrap">

							<Accordion alwaysOpen >
								<Accordion.Item eventKey="0">

									{/* <input type="checkbox" className="btn-check" id="note-check" value="note"
									onChange = {onNoteChange}
									checked = {noteCheckList.noteCheckElement.includes('note')}>
									</input>
									<label className="note" htmlFor="note-check">
								*/}
								<Accordion.Header onClick={onNote}>
									알림장 {checkNoteText}
								</Accordion.Header>
									

								<Accordion.Body> 
									<input type="checkbox" className="btn-check" id="btn-check-2-outlined" value="check1"
									onChange = {onNoteChange}
									checked = {noteCheckList.noteCheckElement.includes('check1')}
									onClick = {(e) => {onImgClick(e);
														textCheck1Change(e);}}>
									</input>
									<label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined"> 
										사진 없는 알림장 {check1Text}
									</label>

									<input type="checkbox" className="btn-check" id="btn-check-2-outlined2" value="check2"
									onChange = {onNoteChange}
									checked = {noteCheckList.noteCheckElement.includes('check2')}
									onClick = {(e) => {onImgClick(e);
														textCheck2Change(e);}}>
									</input>
									<label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined2">
										내용 없는 알림장 {check2Text} 
									</label>

									<input type="checkbox" className="btn-check" id="btn-check-2-outlined3" value="check3"
									onChange = {onNoteChange}
									checked = {noteCheckList.noteCheckElement.includes('check3')}
									onClick = {(e) => {onImgClick(e);
														textCheck3Change(e);}}>
									</input>
									<label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined3">
										가정에서 보낸 알림장 {check3Text}
									</label>

								</Accordion.Body>
								</Accordion.Item>
								
							</Accordion>


							<Accordion>
								<Accordion.Item eventKey="1">
								<Accordion.Header onClick={onAlbum}>
									사진앨범 {checkAlbumText}
								</Accordion.Header>
								
								<Accordion.Body>

									<input type="checkbox" className="btn-check" id="btn-check-2-outlined4" value="check4"
									onChange = {onAlbumChange}
									checked = {albumCheckList.albumCheckElement.includes('check4')}
									onClick = {(e) => {onImgClick(e);
														textCheck4Change(e);}}>
									</input>
									<label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined4">
										내용 없는 앨범 {check4Text}
									</label>

									<input type="checkbox" className="btn-check" id="btn-check-2-outlined5" value="check5"
									onChange = {onAlbumChange}
									checked = {albumCheckList.albumCheckElement.includes('check5')}
									onClick = {(e) => {onImgClick(e);
														textCheck5Change(e);}}>
									</input>
									<label className="btn btn-outline-secondary" htmlFor="btn-check-2-outlined5">
										댓글 없는 앨범 {check5Text}
									</label>


									</Accordion.Body>
								</Accordion.Item>
								</Accordion>
						</div>
						
					</div>
				</div>

                
                
				<div className="next-btn">
					<div className="next-btn-gap">
						<div className="next-btn-wrap">
							{noteAlbumSelect()}
						</div>
					</div>
				</div>
          </div>
        </div>
    );
};

export default SelectDetailOption;