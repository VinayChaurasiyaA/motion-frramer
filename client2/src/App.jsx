import { useState } from "react";
import "./App.scss";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
];

function App() {
  return (
    <>
      <main className="main">
        <div className="gallery">
          <Column images={[images[3], images[1], images[2]]} />
          <Column images={[images[4], images[5], images[6]]} />
          <Column images={[images[9], images[8], images[7]]} />
          <Column images={[images[10], images[11], images[10]]} />
        </div>
      </main>
    </>
  );
}

function Column({ images }) {
  return (
    <div className="column">
      {images.map((image, index) => {
        return (
          <div className="imageContainer">
            <img src={`./images/${image}`} alt="image" />
          </div>
        );
      })}
    </div>
  );
}

export default App;
