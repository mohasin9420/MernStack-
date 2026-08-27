import Remote from "./componant/Remote";
import Camera from "./componant/camera";
import Tablet from "./componant/Tablet";
import Television from "./componant/Television";


import "./App.css";

function App() {
  return (
    <div className="container">

      <Remote />
      <Television />
      <Camera />
      <Tablet />

     

     

    </div>
  );
}

export default App;