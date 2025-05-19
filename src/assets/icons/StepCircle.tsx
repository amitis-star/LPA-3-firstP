import React from "react";

interface StepCircleProps {
  currentStep: number; 
}

const StepCircle: React.FC<StepCircleProps> = ({ currentStep }) => {
  const totalSteps = 8;

  return (
    <div className="relative w-24 h-24 rounded-full bg-white">
      {[...Array(totalSteps)].map((_, index) => {
        const isActive = index < currentStep;
        const rotateDeg = (360 / totalSteps) * index;

        return (
          <div
            key={index}
            className={`absolute w-1/2 h-1 left-1/2 top-1/2 origin-left rounded-full ${
              isActive ? "bg-green-600" : "bg-gray-200"
            }`}
            style={{
              transform: `rotate(${rotateDeg}deg) translateX(-50%)`,
              transformOrigin: "0% 50%",
            }}
          />
        );
      })}
    </div>
  );
};

export default StepCircle;
