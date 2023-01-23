import { useState, useEffect } from "react";
import Heading from "./components/Heading";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

function App() {
  const [textData, setTextData] = useState([]);

  useEffect(() => {
    fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1")
      .then((response) => response.json())
      .then((data) => {
        setTextData(data.texts);
        console.log(textData);
        
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Navbar />
      <Heading/>
      <Section texts={textData}/>
      
      {/* <h1>data</h1>
      {textData.map((item) => {
        console.log(item);

        return (
          <div >
            <p>{item.heading}</p>
          </div>
        );
      })} */}
    </>
  );
}

export default App;
