import { render, screen } from '@testing-library/react';
import App from './App';

test('renders nenhum todo', () => {
  render(<App />);
  const textElement = screen.getByText(/Nenhum todo/i);
  expect(textElement).toBeInTheDocument();
});