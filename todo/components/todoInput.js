export default function ToDoInput({ addClick, handleChange, todoVal }) {
  return (
    <div className="input-container">
      <input
        type={"text"}
        name={todoVal}
        value={todoVal}
        required
        placeholder="Enter something"
        onChange={handleChange}
      ></input>
      <button className="add-btn" onClick={addClick}>
        Add
      </button>
    </div>
  );
}
