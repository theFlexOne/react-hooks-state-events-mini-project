import React, { useState } from 'react';

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [inputText, setInputText] = useState('');
  const [inputCategory, setInputCategory] = useState(categories[0]);

  const handleNewTask = e => {
    e.preventDefault();
    onTaskFormSubmit({ text: inputText, category: inputCategory });
  };

  return (
    <form className="new-task-form" onSubmit={handleNewTask}>
      <label>
        Details
        <input
          required
          type="text"
          name="text"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={inputCategory}
          onChange={e => setInputCategory(e.target.value)}
        >
          {categories.map((category, i) => {
            return (
              <option value={category} key={i}>
                {category}
              </option>
            );
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
