import { useEffect, useState } from "react";
import ToDoInput from "./todoInput";
import ToDoList from "./toDoList";
import axios from "axios";
const BASE_URL = "http://localhost:3001/api/tasks";
export default function Todo() {
  const [todoVal, settoDoval] = useState("");
  // const [editVal, setEditVal] = useState("");
  const [list, setList] = useState([]);
  const [isEditable, setisEditable] = useState(false);
  useEffect(() => {
    // fetchList();
  }, []);
  async function fetchList() {
    const response = await fetch("/api/hello");
    const json = await response.json();
    setList(json.list);
  }
  function editbtnClick() {
    set(false);
  }
  function handleListitemClick(item) {
    // alert(item.title);
    const dupList = [...list];
    dupList.forEach((element) => {
      if (element.title == item.title) {
        element.status = "completed";
      }
    });
    console.log(dupList);
    setList(dupList);
    // setCompletedList(dupList);
  }
  async function updateVal(item, value) {
    alert(value);
    const body = {
      title: value,
    };
    console.log(body, "update");
    const dupList = [...list];
    dupList.forEach((element) => {
      if (element.title == item.title) {
        element.title = value;
      }
    });
    console.log("update list", dupList);
    setList(dupList);
    // const res = await axios.put(`${BASE_URL}/${id}`, body);
    // console.log(res);
    // if (res.status) {
    //   setisEditable(true);
    // } else {
    //   alert(res.error);
    // }
    // console.log(res);
  }
  async function removeItem(item) {
    console.log(item);
    const dupList = [...list];
    var index = dupList.indexOf(item); // Let's say it's Bob.
    dupList.splice(index, 1);
    setList(dupList);
    // const res = await axios.delete(`${BASE_URL}/${id}`);
    // fetchList();
    // console.log(res);
  }
  async function addItem() {
    if (todoVal == "") {
      alert("please enter something");
      return;
    }
    const body = { title: todoVal, status: "todo" };
    setList([...list, body]);
    console.log(body);
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
    // setList([...list, body]);

    // const res = await axios.post(BASE_URL, body);
    // if (res.status) {
    //   fetchList();
    // } else {
    //   alert(res.error);
    // }
  }
  // function onEditChangeVal(value) {
  //   setEditVal(value);
  // }
  return (
    <div className="todo-container">
      {/* <div className="todo-inbox"> */}
      <ToDoInput
        addClick={addItem}
        handleChange={handleChange}
        todoVal={todoVal}
      ></ToDoInput>
      {/* </div> */}
      {list && list.length != 0 ? (
        <div className="todo-list-box">
          <h3>Todo</h3>
          {list.map((item) => {
            return item.status == "todo" ? (
              <div>
                <ToDoList
                  item={item}
                  isEditable={isEditable}
                  editbtnClick={editbtnClick}
                  updateVal={updateVal}
                  removeItem={removeItem}
                  onClickList={handleListitemClick}
                ></ToDoList>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      ) : (
        ""
      )}

      {list && list.length != 0 ? (
        <div className="todo-list-box">
          <h3>Completed</h3>
          {list.map((item) => {
            return item.status == "completed" ? (
              <div>
                <ToDoList
                  item={item}
                  isEditable={true}
                  editbtnClick={editbtnClick}
                  updateVal={updateVal}
                  removeItem={removeItem}
                  onClickList={handleListitemClick}
                ></ToDoList>
              </div>
            ) : (
              ""
            );
          })}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
