import React from "react";
import "./Style.css";
import { RotateSpinner } from "react-spinners-kit";
const ImageDisplay = (props) => {
  if (props.image) {
    return (
      <div>
        <img src={props.image} alt="disp" />
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
