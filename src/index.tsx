import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './components/App/App'
import { ComboProvider } from './Context/ComboContext'
import './styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ComboProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </ComboProvider>
  </React.StrictMode>,
)
