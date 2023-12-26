import Header from "./Components/Header";
import Days from "./Components/Days";
import AddTask from "./Components/addTask";
import { useState } from "react";

function App() {
const [backDrop, setBackDrop] = useState(false);


  const backDropHandler = () => {
    setBackDrop(!backDrop)
  }

  return (
    <div className="App">
      <Header/>
      <Days day="Monday" click={backDropHandler} />
       
 {  backDrop ?    <AddTask  click={backDropHandler} ></AddTask>  : null}
    </div>
  );
}

export default App;
