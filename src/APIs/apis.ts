import { ITodo } from '../Types/types'

export const getTodos = async () => {
  const todos = await fetch('http://localhost:4000/todos')
    .then((res) => res.json())
    .then((res) => res)
  return todos
}

export const addTodos = async (todo: ITodo) => {
  const params = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  }

  const updatedTodo = await fetch('http://localhost:4000/add', params)
    .then((res) => res.json())
    .then((res) => res)

  return updatedTodo
}
