import React from 'react'


import step0 from "../images/1.png";
import step1 from "../images/2.png";
import step2 from "../images/3.png";
import step3 from "../images/4.png";
import step4 from "../images/5.png";
import step5 from "../images/6.png";
import step6 from "../images/7.png";
import step7 from "../images/8.png";




const Figure = ({ wrongLetters }) => {
    const errors = wrongLetters.length

    return (
      <>

        {errors === 0 && <img src={step0} alt="" />}
        {errors === 1 && <img src={step1} alt="" />}
        {errors === 2 && <img src={step2} alt="" />}
        {errors === 3 && <img src={step3} alt="" />}
        {errors === 4 && <img src={step4} alt="" />}
        {errors === 5 && <img src={step5} alt="" />}
        {errors === 6 && <img src={step6} alt="" />}
        {errors === 7 && <img src={step7} alt="" />}
        <p className="totalLives">
          Total lives left <span className="errorNo">{7 - errors}</span>
        </p>
      </>
    );
}

export default Figure
