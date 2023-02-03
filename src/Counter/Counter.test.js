import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './Counter';

let counter;
let increaseAction;
let initialCount = '10';

beforeEach(() => {
  render(<Counter initialCount={initialCount} />);
  counter = screen.getByTestId('counter');
  increaseAction = screen.getByTestId('increase');
});

test('Counter is initialy set to 0 and can be increased to 1 after a click', async () => {
  expect(counter.textContent).toBe(initialCount);
  await userEvent.click(increaseAction);
  expect(counter.textContent).toBe((parseInt(initialCount) + 1).toString());
});
