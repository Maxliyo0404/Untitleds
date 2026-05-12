import "./SectionFour.css";
import React from 'react'
import four_1 from "./image/four_1.svg";


function SectionFour() {
  return (
      <div className="sectionFour">
        <div className="container">
            <div className="sectionFour-wrapper">
                <div className="four-left">
                    <img src={four_1} alt="rasm" />
                </div>
            </div>
        </div>
      </div>
  )
}

export default SectionFour