import React from "react";

const steps = ["-5", "0", "5", "10", "15", "20", "30", "40", "50", "60", "70" , "80"];


const Step = ({ currentIndex }) => {
  return (
    <div className="steps-container">
      {steps.map((step, index) => {
        let color = currentIndex === index ? "#00d4ff" : "black";
        console.log("color", color);

        
        return (
          <div className="steps-item">
            <h3
              style={{
                margin: 0,
                color: color
              }}
            >
              {step}        
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default Step;
