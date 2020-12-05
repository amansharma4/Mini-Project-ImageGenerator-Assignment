import React from "react";
const ImageDisplay = (props) => {
  if (props.image) {
    return (
      <div>
        <img src={props.image} alt="disp" />
      </div>
    );
  } else {
    return <div>Loading.........</div>;
  }
};
export default ImageDisplay;
