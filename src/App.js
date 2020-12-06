import "./css/App.css";
import React, { useState } from "react";
import ImageDisplay from "./component/ImageDisplay";
function App() {
  const [image, setImage] = useState("");
  const getImage = () => {
    fetch("https://picsum.photos/200/300").then((data) => {
      const { url } = data;
      setImage(url);
      // console.log(data);
    });
  };
  return (
    <div className="App">
      <ImageDisplay image={image} />
      <button onClick={getImage}>Get New Image</button>
    </div>
  );
}
export default App;
