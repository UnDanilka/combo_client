import { ITodo } from '../Types/types'

const paramsBuilder = (body: any) => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  }
}

export const getTodos = async () => {
  const todos = await fetch('http://localhost:4000/todos')
    .then((res) => res.json())
    .then((res) => res)
  return todos
}

export const addTodos = async (todo: ITodo) => {
  const params = paramsBuilder(todo)

  const updatedTodo = await fetch('http://localhost:4000/add', params)
    .then((res) => res.json())
    .then((res) => res)

  return updatedTodo
}
export const setDoneTodos = async (id: string) => {
  const params = paramsBuilder({ id })

  const updatedTodo = await fetch('http://localhost:4000/done', params)
    .then((res) => res.json())
    .then((res) => res)

  return updatedTodo
}
export const removeTodos = async (id: string) => {
  const params = paramsBuilder({ id })

  const updatedTodo = await fetch('http://localhost:4000/delete', params)
    .then((res) => res.json())
    .then((res) => res)

  return updatedTodo
}
