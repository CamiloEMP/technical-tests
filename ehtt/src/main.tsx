import React from 'react'
import ReactDOM from 'react-dom/client'

import { UsersProvider } from '@/User/context/UsersContext'

import App from './App'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <UsersProvider>
      <App />
    </UsersProvider>
  </React.StrictMode>,
)
