import { useEffect, useState } from "react";
import ToDoInput from "./todoInput";
import ToDoList from "./toDoList";
import axios from "axios";
const BASE_URL = "http://localhost:3001/api/tasks";
export default function Todo() {
  const [todoVal, settoDoval] = useState("");
  const [editVal, setEditVal] = useState("");
  const [list, setList] = useState([]);
  const [isEditable, setisEditable] = useState(true);
  useEffect(() => {
    fetchList();
  }, []);
  async function fetchList() {
    const response = await fetch("/api/hello");
    const json = await response.json();
    setList(json.list);
  }
  function editbtnClick() {
    setisEditable(false);
  }
  async function updateVal(id) {
    alert(id);
    const body = {
      title: editVal,
    };
    const res = await axios.put(`${BASE_URL}/${id}`, body);
    console.log(res);
    if (res.status) {
      setisEditable(true);
    } else {
      alert(res.error);
    }
    console.log(res);
  }
  async function removeItem(id) {
    console.log(id);
    const res = await axios.delete(`${BASE_URL}/${id}`);
    fetchList();
    console.log(res);
  }
  async function addItem() {
    if (todoVal == "") {
      alert("please enter something");
      return;
    }
    // await setList([...list, { title: todoVal }]);
    settoDoval("");
    await addToApi();
  }
  function handleChange(e) {
    settoDoval(e.target.value);
  }
  async function addToApi() {
    const body = {
      title: todoVal,
    };

    const res = await axios.post(BASE_URL, body);
    if (res.status) {
      fetchList();
    } else {
      alert(res.error);
    }
  }
  function onEditChangeVal(value) {
    setEditVal(value);
  }
  return (
    <div className="todo-container">
      <div className="todo-inbox">
        <ToDoInput
          addClick={addItem}
          handleChange={handleChange}
          todoVal={todoVal}
        ></ToDoInput>
      </div>
      <div className="todo-list-box">
        <ToDoList
          list={list}
          isEditable={isEditable}
          editbtnClick={editbtnClick}
          onChangeVal={onEditChangeVal}
          updateVal={updateVal}
          removeItem={removeItem}
        ></ToDoList>
      </div>
    </div>
  );
}
