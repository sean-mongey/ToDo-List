import React from 'react';
import ReactDOM from 'react-dom';
import Todo from '/components/Todo';
import Form from '/components/Form';
import './styles.css';

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: 'Click items on list items to remove',
      isCompleted: false,
    },
    {
      text: 'Press enter to add items to the list',
      isCompleted: false,
    },
    {
      text: 'Get productive',
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text, isCompleted: false }];
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    let temp = [...todos];
    temp.splice(index, 1);
    setTodos(temp);
  };

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, i) => (
          <Todo key={i} index={i} todo={todo} remove={removeTodo} />
        ))}
        <Form addTodo={addTodo} />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
