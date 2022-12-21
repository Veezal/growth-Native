import React, { useState } from "react";
import './App.css';

function App() {
  const [showDescription, setShowDescription] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  return (
    <div className="App">
      <div class="container">
        <div class="form">
            <div class="input-box" id="input-box">
              <input type="text" required/>
              <span>Roll Number</span>
              <i></i>
            </div>
            {selectedImage && (
              <div>
              <img alt="not found" width={"250px"} src={URL.createObjectURL(selectedImage)} />
              <br />
              {/* <button onClick={()=>setSelectedImage(null)}>Remove</button> */}
              </div>
            )}
            <div class="Imageinput">
              <input
                type="file"
                name="myImage"
                onChange={(event) => {
                  console.log(event.target.files[0]);
                  setSelectedImage(event.target.files[0]);
                }}
              />
            </div>
            <button onClick={() => setShowDescription(!showDescription)}>Submit</button>
            <br/> 
          {showDescription && <div class="input-box2" id="input-box2">
              <input type="text" required/>
              <span>Start Typing</span>
              <i></i>
            </div>}
        </div>
      </div>
    </div>
  );
}

export default App;
