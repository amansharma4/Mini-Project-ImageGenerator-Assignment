import "./css/App.css";
import React, { useEffect, useState } from "react";
import ImageDisplay from "./component/ImageDisplay";
function App() {
  const [image, setImage] = useState("");
  // const [loading, setLoading] = useState(false);
  const getImage = () => {
    try {
      fetch("https://picsum.photos/200/300").then((data) => {
        const { url } = data;
        setImage(url);
        // console.log(data);
      });
      // setLoading(true);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    getImage();
  }, []);
  return (
    <div className="App">
      <ImageDisplay image={image} />
      <button onClick={getImage} className="custom-file-input">
        {" "}
      </button>
    </div>
  );
}
export default App;
