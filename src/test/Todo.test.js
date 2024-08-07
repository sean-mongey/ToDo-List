import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Todo from './Todo';

test('renders a todo item', () => {
  const todo = { text: 'Test Todo' };
  const index = 0;
  const remove = jest.fn();

  render(<Todo todo={todo} index={index} remove={remove} />);

  expect(screen.getByText('Test Todo')).toBeInTheDocument();
});

test('removes a todo item when clicked', () => {
  const todo = { text: 'Test Todo' };
  const index = 0;
  const remove = jest.fn();

  render(<Todo todo={todo} index={index} remove={remove} />);

  fireEvent.click(screen.getByText('Test Todo'));

  expect(remove).toHaveBeenCalledWith(index);
});
