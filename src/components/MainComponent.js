import axios from 'axios';
//import React, { Component, useState } from 'react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


// class MainComponent extends Component{
//     constructor(props){
//         super(props);
//         this.state={
//             text: ""
//         };
//         this.testGetData();
//     };
    
//     testSetData(str){
//         console.log("is testSetdata act?")
//         this.setState({
//             text : str
//         })
//         console.log("setData Text : " + this.state.text)
//     }

//     testGetData(){
//         axios.get("/home").then((zzzz)=>{
//             const data = zzzz.data;
//             console.log("data : " + data);
//             this.testSetData(data)
//         })
//         console.log("state : " + this.state.text);
//         return(
//             <>
//                 <div>
//                     {this.state.text}
//                 </div>
//             </>
//         )
//     }

//     render(){

//         return (
//             <div id="main">
//             {this.testGetData()}
            
//             <p>Main 영역</p>
//         </div>
//     );
//     }
// };

function MainComponent(){
    const [photos, setPhotos] = useState([]);

    useEffect(()=> {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
        };

        fetch("https://jsonplaceholder.typicode.com/photos", requestOptions)
        .then(response => response.json())
        .then(result => setPhotos(result))
        .catch(error => console.log('error', error))
    }, [])
    return(
        <>
        <div id="main">

            {/* <Testlist photos={photos} /> */}
            <body>
                <div class="d-grid gap-2 col-6 mx-auto">
                
                    <Link to="/SelectThemeComponent" class="btn btn-primary">포토북 만들기</Link>
                </div>
            </body>
        </div>
        </>
    );

}


export default MainComponent;