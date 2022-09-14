import { render, screen } from '@testing-library/react';
import App from './App';
import './__mock__/matchMedia';

test('renders search', () => {
  render(<App />);
  const linkElement = screen.getByText(/search by/i);
  expect(linkElement).toBeInTheDocument();
});
