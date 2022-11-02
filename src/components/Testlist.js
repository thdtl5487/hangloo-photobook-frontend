import React from "react";
import Testitem from './Testitem';

const Testlist = (props)=>{
    return (
        <div>
            {props.photos.map(photo => (
                <Testitem key = {photo.id} photo={photo} />
            ))}
        </div>
    );
};

export default Testlist;