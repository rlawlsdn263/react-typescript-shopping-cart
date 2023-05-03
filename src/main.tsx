import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
//부트스트랩 CSS import
import "bootstrap/dist/css/bootstrap.min.css"
//라우터 설정
import { BrowserRouter } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> 
    </BrowserRouter>
  </React.StrictMode>,
)
