import { useState } from "react";

export default function TextField(props) {
  const { item, isEditable, onChangeVal, updateVal, type } = props;
  const [value, setValue] = useState(item.title);
  const [id, setId] = useState(item.id);
  console.log(item);
  function handleChange(e) {
    setValue(e.target.value);
    setId(item.id);
    // updateVal(id);
  }
  function handleClick() {}
  return (
    <div className="list-text">
      <input
        className="list-input"
        type={type}
        name={value}
        value={value}
        disabled={isEditable}
        onChange={handleChange}
        // onKeyDown={(e) => e.key === "Enter" && updateVal(id)}
      ></input>
      <button
        style={{
          width: "100px",
          marginLeft: "10px",
          fontSize: "16px",
          padding: "6px",
          border: "none",
          background: "#58B9FF",
          color: "white",
          height: "40px",
          borderRadius: "5px",
        }}
        onClick={() => updateVal(item, value)}
      >
        Save
      </button>
    </div>
  );
}
