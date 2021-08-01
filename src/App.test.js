import React from 'react'
import App from './App'
import { fireEvent, render, within } from '@testing-library/react'

describe('General test of the App', () => {
  test('App loads and shows `My Life` as the initial page', () => {
    const { getAllByText } = render(<App />)
    expect(getAllByText('My Life').length).toBe(3)
  })

  test('App `Navs` render correctly', () => {
    const { getAllByRole } = render(<App />)
    const [mainNav, socialNav] = getAllByRole('navigation')
    // Main Nav
    within(mainNav).getByText('My Life')
    within(mainNav).getByText('Experience')
    within(mainNav).getByText('Skills')
    // Social Nav
    within(socialNav).getByText('Github')
    within(socialNav).getByText('LinkedIn')
  })

  test('`Main Nav` works correctly', () => {
    const { getAllByRole, getByRole } = render(<App />)
    const [mainNav] = getAllByRole('navigation')
    const mainContent = getByRole('main')
    // Visit `Skills`
    let navLink = within(mainNav).getByText('Skills')
    fireEvent.click(navLink)
    within(mainContent).getByText('Skills')
    // Visit `My Life`
    navLink = within(mainNav).getByText('My Life')
    fireEvent.click(navLink)
    within(mainContent).getByText('My Life')
    // Visit `Experience`
    navLink = within(mainNav).getByText('Experience')
    fireEvent.click(navLink)
    within(mainContent).getByText('Experience')
  })
})
