import { useState } from "react";

export default function TextField(props) {
  const { item, isEditable, onChangeVal, updateVal } = props;
  const [value, setValue] = useState(item.title);
  const [id, setId] = useState(item.id);
  console.log(item);
  function handleChange(e) {
    setValue(e.target.value);
    onChangeVal(value);
    setId(item.id);
  }
  return (
    <div className="list-text">
      <input
        className="list-input"
        name={value}
        value={value}
        disabled={isEditable}
        onChange={handleChange}
        onKeyDown={(e) => e.key === "Enter" && updateVal(id)}
      ></input>
    </div>
  );
}
