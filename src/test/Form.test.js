import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Form from '../src/components/Form';

test('renders the form input', () => {
  const addTodo = jest.fn();

  render(<Form addTodo={addTodo} />);

  expect(screen.getByPlaceholderText('Add Todo...')).toBeInTheDocument();
});

test('adds a todo when form is submitted', () => {
  const addTodo = jest.fn();

  render(<Form addTodo={addTodo} />);

  fireEvent.change(screen.getByPlaceholderText('Add Todo...'), {
    target: { value: 'New Todo' },
  });

  fireEvent.submit(screen.getByRole('form'));

  expect(addTodo).toHaveBeenCalledWith('New Todo');
});
