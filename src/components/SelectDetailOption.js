import React from 'react';
import { useMediaQuery } from 'react-responsive';


const SelectDetailOption = () => {

    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
      });

      const isPc = useMediaQuery({
        query: "(min-width:769px)"
      });


    return (
        <div id="wrap">
            
        </div>
    );
};

export default SelectDetailOption;