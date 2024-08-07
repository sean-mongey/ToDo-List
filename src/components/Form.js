import React from 'react';

function Form({ addTodo }) {
  const [value, setValue] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} role="form">
      <input
        type="text"
        className="input"
        value={value}
        placeholder="Add Todo..."
        onChange={(e) => setValue(e.target.value)}
      />
    </form>
  );
}

export default Form;
