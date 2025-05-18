import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './assets/index.css' // << Ensure this line exists and path is correct

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)