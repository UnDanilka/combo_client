import { ITodo } from '../Types/types'

const url = 'https://combo-server.onrender.com'

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
  const todos = await getData(`${url}/todos`, {})
  return todos
}

export const addTodos = async (todo: ITodo) => {
  const params = paramsBuilder(todo)
  const updatedTodo = await getData(`${url}/add`, params)
  return updatedTodo
}

export const setDoneTodos = async (id: string) => {
  const params = paramsBuilder({ id })
  const updatedTodo = await getData(`${url}/done`, params)
  return updatedTodo
}

export const removeTodos = async (id: string) => {
  const params = paramsBuilder({ id })
  const updatedTodo = await getData(`${url}/delete`, params)
  return updatedTodo
}
