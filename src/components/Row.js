// Row.js
import React from "react";

export default function Row({ item, deleteTask }) {
  console.log("Row item:", item);  // Debugging log to check if item contains id
  
  return (
    <li>
      {item.description}
      <button
        className="delete-button"
        onClick={() => deleteTask(item.id)}  // Pass item.id correctly
      >
        Delete
      </button>
    </li>
  );
}
