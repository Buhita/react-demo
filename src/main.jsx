import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import JsonDB from './components/JsonDB.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <section>
      <App />
    </section>    
    <section>
      <JsonDB />
    </section>    
  </StrictMode>,
)
