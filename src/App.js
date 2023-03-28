import "./App.css";
import TaskAdder from "./components/TaskAdder/TaskAdder";
import ToDo from "./components/ToDo/ToDo";
import InProgress from "./components/InProgress/InProgress";
import Done from "./components/Done/Done";
import { useState } from "react";
import initial_data from "./Server";

function App() {
  const [addMode, updateaddMode] = useState(false);
  const [input, updateInput] = useState('');
  const [todoData, updatetodoData] = useState(initial_data);
  const [inprogressData, updateinprogData] = useState([]);
  const [doneData, updatedoneData] = useState([]);

  const addHandler2 = (event) => {
    event.preventDefault();
    updatetodoData((p) => [...p, input]);
    updateInput('');
    updateaddMode((p) => !p);
  };

  const changeHandler = (event) => {
    updateInput(event.target.value);
  };

  const addHandler = () => {
    updateaddMode((p) => !p);
  };

  const rightHandler = (event) => {
    const text = event.target.parentElement.innerHTML;
    const index = text.search("<p>");
    const index_2 = text.search("</p>");
    const new_str = text.slice(index + 3, index_2);

    const temparr_1 = todoData.filter((task) => task != new_str);
    const temparr_2 = todoData.filter((task) => task == new_str);

    updateinprogData((p) => [...p, ...temparr_2]);
    updatetodoData(temparr_1);
  };

  const leftHandler = (event) => {
    const text = event.target.parentElement.innerHTML;
    const index = text.search("<p>");
    const index_2 = text.search("</p>");
    const new_str = text.slice(index + 3, index_2);

    const temparr_1 = inprogressData.filter((task) => task != new_str);
    const temparr_2 = inprogressData.filter((task) => task == new_str);

    updatetodoData((p) => [...p, ...temparr_2]);
    updateinprogData(temparr_1);
  };

  const rightHandler2 = (event) => {
    const text = event.target.parentElement.innerHTML;
    const index = text.search("<p>");
    const index_2 = text.search("</p>");
    const new_str = text.slice(index + 3, index_2);

    const temparr_1 = inprogressData.filter((task) => task != new_str);
    const temparr_2 = inprogressData.filter((task) => task == new_str);

    updateinprogData(temparr_1);
    updatedoneData((p) => [...p, temparr_2]);
  };

  const leftHandler2 = (event) => {
    const text = event.target.parentElement.innerHTML;
    const index = text.search("<p>");
    const index_2 = text.search("</p>");
    const new_str = text.slice(index + 3, index_2);

    const temp_arr_1 = doneData.filter((item) => item == new_str);
    const temp_arr_2 = doneData.filter((item) => item != new_str);

    updateinprogData((p)=>[...p, temp_arr_1]);
    updatedoneData(temp_arr_2);
  };

  return (
    <>
      <h1>ToDoList</h1>
      {addMode && <TaskAdder add={addHandler2} change={changeHandler} state={input}/>}
      <ToDo
        title="to do"
        data={todoData}
        right={rightHandler}
        left_button="none"
        addH={addHandler}
      />
      <InProgress
        title="in progress"
        data={inprogressData}
        left={leftHandler}
        right={rightHandler2}
      />
      <Done
        title="done"
        data={doneData}
        left={leftHandler2}
        right_button="none"
      />
      <p>© Andz</p>
    </>
  );
}

export default App;
