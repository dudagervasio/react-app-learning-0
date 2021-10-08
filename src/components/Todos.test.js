import { render, screen } from '@testing-library/react';
import { Todos } from './Todos';

const todos = [
	{ text: 'textobase'},
	{ text: 'textotoremove'},
];

test('Renders TODOS', () => {
  render(<Todos todos={todos} />);
  
  const textElement1 = screen.getByText(/textobase/i);
  expect(textElement1).toBeInTheDocument();

  const textElement2 = screen.getByText(/textotoremove/i);
  expect(textElement2).toBeInTheDocument();

});