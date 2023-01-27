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

const getData = async (url: string, params: any) => {
  const updatedTodo = await fetch(url, params)
    .then((res) => res.json())
    .then((res) => res)
  return updatedTodo
}

export const getTodos = async () => {
  const todos = await getData('http://localhost:4000/todos', {})
  return todos
}

export const addTodos = async (todo: ITodo) => {
  const params = paramsBuilder(todo)
  const updatedTodo = await getData('http://localhost:4000/add', params)
  return updatedTodo
}

export const setDoneTodos = async (id: string) => {
  const params = paramsBuilder({ id })
  const updatedTodo = await getData('http://localhost:4000/done', params)
  return updatedTodo
}

export const removeTodos = async (id: string) => {
  const params = paramsBuilder({ id })
  const updatedTodo = await getData('http://localhost:4000/delete', params)
  return updatedTodo
}
