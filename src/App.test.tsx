import { render } from '@testing-library/react';
import App from './App';

describe('<App/>', () => {
  it('Make sure App exists', () => {
    const appObj = render(<App />);
    expect(appObj).toBeTruthy();
  });
});
