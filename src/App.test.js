import { render, screen } from '@testing-library/react'
import App from './App'
import React from 'react'

test('Increase button is in the document', () => {
  render(<App />)
  const linkElement = screen.getByTestId('increase')
  expect(linkElement).toBeInTheDocument()
})

// write a test that checks that the counter is in the document
test('Counter is in the document', () => {
  render(<App />)
  const linkElement = screen.getByTestId('counter')
  expect(linkElement).toBeInTheDocument()
})

// write a test that checks that the counter is 0
test('Counter is initialy set to 0', () => {
  render(<App />)
  const linkElement = screen.getByTestId('counter')
  expect(linkElement.textContent).toBe('0')
})

// write a test that checks that the counter is 1 after clicking the increase button
test('Counter is initialy set to 0 and can be increased to 1 after a click', () => {
  render(<App />)
  const linkElement = screen.getByTestId('increase')
  linkElement.click()
  userEvent.click(screen.getByTestId('increase'))

  const counterElement = screen.getByTestId('counter')
  expect(counterElement.textContent).toBe('1')
})
