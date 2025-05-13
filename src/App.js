import './App.css';
import { useNavigate } from 'react-router-dom' // Hook para navegar entre pantallas
import unicornImg from './assets/unicorn.png'; // Imagen del avatar

export default function App() {
  const navigate = useNavigate() // Instancia para redireccionar

  return (
    // Contenedor principal centrado, fondo índigo y tipografía Jakarta
    <div className="min-h-screen bg-indigo-600 text-white flex flex-col items-center justify-center px-6 text-center font-jakarta">

      {/* Encabezado principal: saludo */}
      <h1 className="text-4xl sm:text-5xl font-light">¡Hola!</h1>

      {/* Subtítulo con énfasis en UniCorn */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-8">
        Soy <span className="font-extrabold">UniCorn</span>
      </h2>

      {/* Imagen del avatar */}
      <img
      src={unicornImg}
      alt="UniCorn"
      className="w-24 h-24 sm:w-32 sm:h-32 mb-6"
      />



      {/* Mensaje de bienvenida con texto explicativo */}
      <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
        Te ayudo con la universidad.<br />¿Por dónde empezamos?
      </p>

      {/* Botón que redirige al chat */}
      <button
        onClick={() => navigate('/chat')} // Redirecciona al componente de chat
        className="bg-white text-indigo-900 font-bold text-lg py-3 px-8 rounded-full shadow-md hover:bg-indigo-100 transition"
      >
        ¡Vamos a chatear!
      </button>
    </div>
  )
}
