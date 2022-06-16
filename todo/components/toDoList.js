import TextField from "./textField";

export default function ToDoList({
  list,
  isEditable,
  editbtnClick,
  removeItem,
  onChangeVal,
  updateVal,
}) {
  function handleClick(id) {
    alert(id);
    removeItem(id);
  }
  console.log(list);
  return (
    <div className="list-container">
      {list.map((item) => {
        return (
          <div className="list-box" key={item.id}>
            <TextField
              item={item}
              isEditable={isEditable}
              onChangeVal={onChangeVal}
              updateVal={updateVal}
            ></TextField>
            <div className="list-edit-btn" onClick={editbtnClick}>
              edit
            </div>
            <div className="list-remove-btn">
              <button
                value={item.id}
                style={{
                  border: "none",
                  backgroundColor: "white",
                  color: "red",
                }}
                onClick={() => handleClick(item.id)}
              >
                X
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
