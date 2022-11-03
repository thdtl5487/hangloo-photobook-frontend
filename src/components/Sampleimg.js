import React from 'react';
import { useState } from 'react';

const Sampleimg = (num) => {
    console.log("num 타입 머냐"+ num)
    const img = [
        {id:1, image:'./img/sampleimg_1.PNG', title:'noPhotoNote'},
        {id:2, image:'./img/sampleimg_2.PNG', title:'noTextAlbum'}
    ]
    const numCasting = num.toString;
    console.log(num);
    
    // const [num, setNum] = useState(0);

    const onView = (id)=>{
        console.log(id)
        const mola = id;
        return(
            <div>
                <img src={img[id].image} alt={img[id].title}></img>
                
            </div>
        )
    }


    return (
        <div>
            <div className='wrap' >
                <img src={img[1].image} alt={img[1].title}></img>
            </div>
        </div>
    );
};

export default Sampleimg;