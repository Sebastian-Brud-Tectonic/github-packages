import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Rocket from './Rocket.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Rocket />
  </StrictMode>,
)
