import React, { useState } from 'react';
import CategoryFilter from './CategoryFilter';
import NewTaskForm from './NewTaskForm';
import TaskList from './TaskList';

import { CATEGORIES, TASKS } from '../data';

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [currentCategory, setCurrentCategory] = useState('All');

  const handleTaskFormSubmit = newTask => {
    setTasks([...tasks, newTask]);
  };

  const deleteTask = text => {
    setTasks(tasks.filter(task => task.text !== text));
  };

  const tasksToDisplay = [...tasks];

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <NewTaskForm
        categories={CATEGORIES.slice(1)}
        onTaskFormSubmit={handleTaskFormSubmit}
      />
      <TaskList
        tasks={tasksToDisplay}
        category={currentCategory}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;
