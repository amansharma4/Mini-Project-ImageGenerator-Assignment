import React from "react";
import "../css/App.css";
import { RotateSpinner } from "react-spinners-kit";
const ImageDisplay = ({ image }) => {
  let img = image ? (
    <div>
      <img src={image} alt="disp" />
    </div>
  ) : (
    <div className="loader">
      <RotateSpinner size={50} color="#ff8a65" loading={true} />
    </div>
  );

  return img;
};
export default ImageDisplay;
