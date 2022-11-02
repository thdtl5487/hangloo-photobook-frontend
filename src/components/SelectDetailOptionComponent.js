import React from 'react';
import { useMediaQuery } from 'react-responsive';
import 'bootstrap/dist/css/bootstrap.min.css';


const SelectDetailOption = () => {

    const isMobile = useMediaQuery({
        query: "(max-width:768px)"
      });

      const isPc = useMediaQuery({
        query: "(min-width:769px)"
      });


    return (
      <>
        <div id="selectDetail">
            Step2. 삽입할 항목을 선택하세요.            

            <div className="image">
              <img className="sampleimg" name="sampleimg" alt="sample" src="img/sampleimg_1.PNG"/>
            </div>

            <div className="detailOption">
            <div className="accordion" id="accordionPanelsStayOpenExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="false" aria-controls="panelsStayOpen-collapseOne">
                    알림장 선택
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                  <div className="accordion-body">
                  <input type="checkbox" class="btn-check" id="btn-check-2-outlined" checked autocomplete="off"/>
                  <label className="btn btn-outline-secondary" for="btn-check-2-outlined">사진 없는 알림장 선택</label>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                    사진첩선택
                  </button>
                </h2>
                <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                  <div className="accordion-body">
                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                  </div>
                </div>
              </div>
            </div>

            </div>
            <h1>dddd</h1>
            <h1>dddd</h1>
            <h1>dddd</h1>
            <h1>dddd</h1>
        </div>
      </>
    );
};

export default SelectDetailOption;