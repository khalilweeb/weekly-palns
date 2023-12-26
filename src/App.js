import Header from "./Components/Header";
import Days from "./Components/Days";
import AddTask from "./Components/addTask";
import { useState } from "react";
const week = ["Monday" , "Tuesday" , "Wednesday" , "Thursday" , "Friday" , "Saturday" , "Sunday"];
function App() {
  const [backDrop, setBackDrop] = useState(false);

  const backDropHandler = () => {
    setBackDrop(!backDrop);
  };

  return (
    <div className="App">
      <Header />
      {week.map((day) => {
        return  <Days day={day} click={backDropHandler} key={day} />
      })}
     
      {backDrop ? <AddTask click={backDropHandler}></AddTask> : null}
    </div>
  );
}

export default App;
