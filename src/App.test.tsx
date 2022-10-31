import React from 'react';
import { render, screen, fireEvent, } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('ToDO testing', () => {
  test('Input Event', () => {
    render(<App />);
    const mainInput = screen.getByTestId('main-input')
    expect(mainInput).toBeInTheDocument();
    fireEvent.input(mainInput, {
      target: { value: 'test' }
    })
    expect(screen.getByDisplayValue('test')).toBeInTheDocument()
  });

  test('Input value -> Input keyEvent -> add 1 item', () => {
    render(<App />);
    const mainInput = screen.getByTestId('main-input')
    expect(mainInput).toBeInTheDocument();
    userEvent.type(mainInput, 'test')
    fireEvent.keyPress(mainInput, { key: "Enter", code: 13, charCode: 13 });
    const todoItem = screen.getByText('test')
    expect(todoItem).toBeInTheDocument()
  })

  test('Input value -> Input keyEvent -> add 1 item -> delete item', () => {
    render(<App />);
    const deleteButton = screen.getByTestId('delete-button')
    fireEvent.click(deleteButton)
    const todoItem = screen.queryByText('test')
    expect(todoItem).toBeNull()
  })
})

