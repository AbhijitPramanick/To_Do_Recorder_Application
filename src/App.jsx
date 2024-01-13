import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [item, setItem] = useState("");
  const [itemArr, setItemArr] = useState([]);
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateIndex, setUpdateIndex] = useState(null);
  const addItem = () => {
    if (item.length > 0) {
      setItemArr([...itemArr, item]);
    }
    setItem("");
  };
  const handleDelete = (elementIndex) => {
    if (itemArr.length > 0) {
      setItemArr(itemArr.filter((_, i) => i !== elementIndex));
    }
  };
  const handleUpdate = (elementIndex) => {
    setIsUpdating(true);
    setUpdateIndex(elementIndex);
  };
  const handleSetUpdate = () => {
    if (item.length > 0) {
      itemArr[updateIndex] = item;
      console.log(`Item Updated`);
    } else {
      console.log(`Item failed to update`);
    }
    setItem("");
    setIsUpdating(false);
    setUpdateIndex(null);
  };
  return (
    <div className="master">
      <div className="inputDiv">
        <input
          type="text"
          placeholder="Enter something"
          onChange={(e) => setItem(e.target.value)}
          value={item}
          className="inputBox"
        />
        <button className="addBtn" onClick={addItem}>
          Add
        </button>
      </div>
      <div className="displayDiv">
        {itemArr.map((element, index) => (
          <div className="displayDivBox">
            {isUpdating && index === updateIndex ? (
              <input
                type="text"
                placeholder="Enter new item"
                onChange={(e) => setItem(e.target.value)}
                value={item}
                className="inputBox"
              />
            ) : (
              <p className="displayText">{`${index + 1}. ${element}`}</p>
            )}
            {!(isUpdating && index === updateIndex) ? (
              <button className="deleteBtn" onClick={() => handleDelete(index)}>
                Delete
              </button>
            ) : null}
            <button
              className={
                isUpdating && index === updateIndex ? "saveBtn" : "updateBtn"
              }
              onClick={() =>
                isUpdating && index === updateIndex
                  ? handleSetUpdate()
                  : handleUpdate(index)
              }
            >
              {isUpdating && index === updateIndex ? `Save` : `Update`}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
