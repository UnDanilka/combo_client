import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './components/App/App'
import { ComboProvider } from './Context/ComboContext'
import './styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ComboProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ComboProvider>
  </React.StrictMode>,
)
