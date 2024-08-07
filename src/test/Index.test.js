import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todo from './components/Todo';
import Form from './components/Form';
import '../index';

test('renders the todo list with initial items', () => {
  render(<div id="root"></div>); // Mock the root element

  const todos = [
    { text: 'Click items on list items to remove', isCompleted: false },
    { text: 'Press enter to add items to the list', isCompleted: false },
    { text: 'Get productive', isCompleted: false },
  ];

  todos.forEach((todo) => {
    expect(screen.getByText(todo.text)).toBeInTheDocument();
  });
});

test('adds a new todo', () => {
  render(<div id="root"></div>); // Mock the root element

  fireEvent.change(screen.getByPlaceholderText('Add Todo...'), {
    target: { value: 'New Todo' },
  });

  fireEvent.submit(screen.getByRole('form'));

  expect(screen.getByText('New Todo')).toBeInTheDocument();
});

test('removes a todo item', () => {
  render(<div id="root"></div>); // Mock the root element

  fireEvent.click(screen.getByText('Click items on list items to remove'));

  expect(screen.queryByText('Click items on list items to remove')).not.toBeInTheDocument();
});
