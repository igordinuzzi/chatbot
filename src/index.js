import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Importa los componentes de las pantallas
import App from './App'              // Pantalla de bienvenida
import ChatScreen from './ChatScreen' // Pantalla del chatbot

// Importa los estilos base (incluye Tailwind CSS)
import './index.css'

// Punto de entrada de la aplicación React
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Habilita el enrutamiento con react-router y configura la base para GitHub Pages */}
    <BrowserRouter basename="/chatbot">
      <Routes>
        {/* Ruta raíz → muestra el componente App */}
        <Route path="/" element={<App />} />

        {/* Ruta /chat → muestra el componente ChatScreen */}
        <Route path="/chat" element={<ChatScreen />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
