import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GloblalContextProvider from './utilitie/GloblaContext.jsx'

createRoot(document.getElementById("root")).render(
  <GloblalContextProvider>
  
    <StrictMode>
      <App />
    </StrictMode>
  </GloblalContextProvider>
);
