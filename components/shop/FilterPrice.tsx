import React, { FC, useState, Dispatch, SetStateAction } from "react";
import ReactSlider from "react-slider";

interface Price {
  min: number;
  max: number;
  setMin: Dispatch<SetStateAction<number>>;
  setMax: Dispatch<SetStateAction<number>>;
}

const FilterPrice = ({ min, setMin, max, setMax }: Price) => {
  return (
    <div>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[25, 75]}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={(state) => `Thumb value ${state.valueNow}`}
        pearling
        minDistance={10}
        onChange={([min, max]) => {
          setMin(min);
          setMax(max);
        }}
      />
    </div>
  );
};

export default FilterPrice;
