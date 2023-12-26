import Header from "./Components/Header";
import Days from "./Components/Days";
import AddTask from "./Components/addTask";
import { useState } from "react";

function App() {
  const [backDrop, setBackDrop] = useState(false);

  const backDropHandler = () => {
    setBackDrop(!backDrop);
  };

  const [data, setData] = useState(
    [
      {name: "Monday" , tasks : ["hello my name is khalil asdaa dsdjkhf fsdkafhd sdfu" , "hello"] , from: ["12:00" , "13:30"] , to : ["13:00" , "16:00"]},
      {name: "Tuesday" , tasks : [] , from: [] , to : []},
      {name: "Wednesday" , tasks : [] , from: [] , to : []},
      {name: "Thursday" , tasks : [] , from: [] , to : []},
      {name: "Friday" , tasks : [] , from: [] , to : []},
      {name: "Saturday" , tasks : [] , from: [] , to : []},
      {name: "Sunday" , tasks : [] , from: [] , to : []}
    ]
  );

  return (
    <div className="App">
      <Header />
      {data.map((day) => {
        return <Days day={day.name} click={backDropHandler} key={day.name}  task={day.tasks} from={day.from} to={day.to}/>;
      })}

      {backDrop ? <AddTask click={backDropHandler}></AddTask> : null}
    </div>
  );
}

export default App;
