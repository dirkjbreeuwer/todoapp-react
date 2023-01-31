import React, { useState } from "react";

const EditableList = () => {
  const [list, setList] = useState([
    { id: 1, description: "Item 1" },
    { id: 2, description: "Item 2" },
    { id: 3, description: "Item 3" },
  ]);
  const [editIndex, setEditIndex] = useState(null);
  const [inputValue, setInputValue] = useState("");

  const handleEdit = (index) => {
    setEditIndex(index);
    setInputValue(list[index].description);
  };

  const handleSave = (index) => {
    setList(
      list.map((item, i) =>
        i === index ? { ...item, description: inputValue } : item
      )
    );
    setEditIndex(null);
    setInputValue("");
  };

  return (
    <ul>
      {list.map((item, index) => (
        <li key={item.id}>
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <button onClick={() => handleSave(index)}>Save</button>
            </>
          ) : (
            <>
              {item.description}
              <button onClick={() => handleEdit(index)}>Edit</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default EditableList;
