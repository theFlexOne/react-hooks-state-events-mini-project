import React from 'react';

function Task({ text, category, handleTaskDeletion }) {
  const deleteTask = e => {
    if (e.target.className === 'delete') {
      const task = e.currentTarget;
      const text = task.querySelector('.text').textContent;
      handleTaskDeletion(text);
    }
  };

  return (
    <div className="task" onClick={deleteTask}>
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete">X</button>
    </div>
  );
}

export default Task;
