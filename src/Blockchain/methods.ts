import { ethers } from 'ethers'
import { ITodo } from '../Types/types'
import { todoABI, todoAddress } from './constants'

export const { ethereum } = window

export const connectWallet = async () => {
  try {
    if (!ethereum) {
      return alert('Wallet is not connected')
    } else {
      const address = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      return address[0]
    }
  } catch (e) {
    console.error(e)
  }
}

export const handleConnectGnosis = () => {
  const testNetParams = [
    {
      chainId: '0x27D8',
      chainName: 'Chiado',
      rpcUrls: ['https://rpc.chiadochain.net'],
      nativeCurrency: {
        name: 'Chiado xDAI',
        symbol: 'xDAI',
        decimals: 18,
      },
      blockExplorerUrls: ['https://blockscout.chiadochain.net'],
    },
  ]

  ethereum
    .request({
      method: 'wallet_addEthereumChain',
      params: testNetParams,
    })
    .catch((e: Error) => {
      console.log(e)
    })
}

export const getTodoContract = () => {
  const provider = new ethers.providers.Web3Provider(ethereum)
  const signer = provider.getSigner()
  const todoContract = new ethers.Contract(todoAddress, todoABI, signer)

  return todoContract
}

export const getTodosBC = async () => {
  const todoContract = getTodoContract()
  const todos = await todoContract.getTodos()
  return todos
}

export const addTodo = async ({ id, value }: ITodo) => {
  const todoContract = getTodoContract()
  const addTodosHash = await todoContract.addTodo(id, value)

  await addTodosHash.wait()
  console.log(addTodosHash)
}
export const deleteTodoBC = async (id: string) => {
  const todoContract = getTodoContract()
  console.log(todoContract)
  const deleteTodosHash = await todoContract.deleteTodo(id)

  await deleteTodosHash.wait()
  console.log(deleteTodosHash)
}
export const updateTodoBC = async (id: string) => {
  const todoContract = getTodoContract()
  console.log(todoContract)
  const updateTodosHash = await todoContract.updateTodo(id)

  await updateTodosHash.wait()
  console.log(updateTodosHash)
}
