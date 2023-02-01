import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './components/App/App'
import { ComboProvider } from './Context/ComboContext'
import { ThemeProvider } from './Context/ThemeContext'
import './styles/styles.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <ComboProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </ComboProvider>
    </ThemeProvider>
  </React.StrictMode>,
)
