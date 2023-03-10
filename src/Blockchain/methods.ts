import { ethers } from 'ethers'
import openNotification from '../components/Notification/notification'
import { ITodo } from '../Types/types'
import { todoABI, todoAddress } from './constants'

export const { ethereum } = window

export const connectWallet = async () => {
  try {
    if (!ethereum) {
      return openNotification('error', 'Wallet is not installed')
    } else {
      const address = await ethereum.request({
        method: 'eth_requestAccounts',
      })
      return address[0]
    }
  } catch (e) {
    openNotification('error', 'Error with wallet connecting')
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
      openNotification('error', e.message)
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
}
export const deleteTodoBC = async (id: string) => {
  const todoContract = getTodoContract()
  const deleteTodosHash = await todoContract.deleteTodo(id)

  await deleteTodosHash.wait()
}
export const updateTodoBC = async (id: string) => {
  const todoContract = getTodoContract()
  const updateTodosHash = await todoContract.updateTodo(id)

  await updateTodosHash.wait()
}
