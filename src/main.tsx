import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LoginScreen from './components/LoginScreen/index.jsx'
import MainScreen from './components/MainScreen/index.jsx'
createRoot(document.getElementById('root')!).render(

  <StrictMode>
    {/* <LoginScreen /> */}
    <MainScreen />
  </StrictMode>

)
