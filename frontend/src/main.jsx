import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <App />  {/*By wrapping the app component into browserRouter it enables the client-side routing */}
  </BrowserRouter>
    
)
