import React from 'react';
import Task from './Task';

function TaskList({ tasks, category, deleteTask }) {
  const handleTaskDeletion = text => {
    deleteTask(text);
  };

  const tasksToDisplay = tasks.filter(task => {
    if (category === 'All') return true;
    return task.category === category;
  });

  return (
    <div className="tasks">
      {tasksToDisplay.map((task, i) => {
        return (
          <Task
            key={i}
            text={task.text}
            category={task.category}
            handleTaskDeletion={handleTaskDeletion}
          />
        );
      })}
    </div>
  );
}

export default TaskList;
