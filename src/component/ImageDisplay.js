import React from "react";
import "../css/App.css";
import { RotateSpinner } from "react-spinners-kit";
const ImageDisplay = (props) => {
  const { image } = props;
  if (image) {
    return (
      <div>
        <img src={image} alt="disp" />
      </div>
    );
  } else {
    return (
      <div className="loader">
        <RotateSpinner size={50} color="#ff8a65" loading={true} />
      </div>
    );
  }
};
export default ImageDisplay;
