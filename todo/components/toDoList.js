import { useState } from "react";
import TextField from "./textField";

export default function ToDoList({
  item,
  isEditable,
  editbtnClick,
  removeItem,
  onChangeVal,
  updateVal,
  onClickList,
}) {
  const [showLabel, setLabel] = useState(true);
  function clickText() {
    if (item.status == "completed") {
      setLabel(true);
      return;
    }
    setLabel(false);
  }
  function handleClick(item) {
    // alert(id);
    removeItem(item);
  }
  function editValue(item, value) {
    console.log(item);
    updateVal(item, value);
    setLabel(true);
  }
  console.log(item);
  return (
    // <div className="list-list-box">
    // {list.map((item) => {
    // onClick={() => onClickList(item)}
    // return (
    <div className="list-box" key={item.id}>
      <input
        type={"checkbox"}
        className={item.status == "completed" ? "completedBox" : "selectbox"}
        checked={item.status == "completed" ? "checked" : 0}
        value={item}
        name={item.title}
        onChange={() => onClickList(item)}
      ></input>
      {showLabel ? (
        <label
          className={
            item.status == "completed" ? "completed-text" : "list-label"
          }
          onClick={() => clickText()}
        >
          {item.title}
        </label>
      ) : (
        <div style={{ display: "flex", width: "60%" }}>
          <TextField
            item={item}
            isEditable={isEditable}
            onChangeVal={onChangeVal}
            updateVal={editValue}
          ></TextField>
        </div>
      )}

      {/* <div className="list-edit-btn" onClick={editbtnClick}>
              edit
            </div> */}
      <div className="list-remove-btn">
        <button
          value={item.id}
          style={{
            border: "none",
            backgroundColor: "white",
            color: "red",
          }}
          onClick={() => handleClick(item)}
        >
          X
        </button>
      </div>
    </div>
    // );
    // })}
    // </div>
  );
}
