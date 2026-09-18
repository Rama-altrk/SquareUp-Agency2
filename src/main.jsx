import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {COLORS} from './assets/constants/colors.js'
import './assets/styles/colors.css'
import {FONTS} from './assets/constants/fonts.js'
import './assets/styles/fonts.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
