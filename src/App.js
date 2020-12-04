import "./css/App.css";
import React, { useState } from "react";
// import ImageDisplay from "./component/ImageDisplay";
function App() {
  const [image, setImage] = useState("");
  const getImage = () => {
    fetch("https://picsum.photos/200/300")
      // .then((result) => result.json())
      .then((data) => {
        const { url } = data;

        // console.log(url);
        setImage(url);
      });
  };
  return (
    <div className="App">
      {/* <ImageDisplay /> */}
      <br />
      <h1>{image}</h1>
      <button onClick={getImage}>Get New Image</button>
    </div>
  );
}

export default App;
