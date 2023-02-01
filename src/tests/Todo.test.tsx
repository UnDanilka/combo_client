/* eslint-disable testing-library/prefer-screen-queries */
import { fireEvent, render } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import TodoBlock from '../components/Page2/TodoBlock/TodoBlock'
import { ComboProvider } from '../Context/ComboContext'

describe('main test', () => {
  test('links amount', async () => {
    const { getAllByTestId } = await render(
      <MemoryRouter>
        <ComboProvider>
          <Navbar />
        </ComboProvider>
      </MemoryRouter>,
    )

    const links = getAllByTestId('link')
    expect(links.length).toEqual(3)
  })

  test('todo test', async () => {
    const { getAllByTestId, getByTestId } = await render(
      <MemoryRouter>
        <ComboProvider>
          <TodoBlock text='test' img='img' label='state' />
        </ComboProvider>
      </MemoryRouter>,
    )

    const todoInput = getByTestId('todo_input')
    fireEvent.change(todoInput, { target: { value: 'test' } })
    const todoAdd = getByTestId('todo_add')
    fireEvent.click(todoAdd)
    const todoItems = getAllByTestId('todo_item')
    expect(todoItems.length).toEqual(1)
  })
})

export {}
