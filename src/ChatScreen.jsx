// Hooks de React y librerías externas
import { useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send } from 'lucide-react';
import unicornImg from './assets/unicorn.png'; // Imagen del avatar

// Primer bloque de mensajes de bienvenida
const firstMessages = [
  {
    type: 'bot',
    content: (
      <p>
        ¡Hola! Soy <strong>UniCorn</strong>, tu asistente.<br />
        <strong>¿Sobre qué te gustaría saber más?</strong>
      </p>
    ),
  },
  { type: 'option', content: '📚 Carreras y programas' },
  { type: 'option', content: '🏛️ Vida en el campus' },
  { type: 'option', content: '📝 Admisiones y requisitos' },
  { type: 'option', content: '💰 Becas y ayuda financiera' },
];

// Segundo bloque de opciones más específicas
const followUp = [
  {
    type: 'bot',
    content: (
      <p>
        ¡Genial! Tenemos más de 50 programas de grado y posgrado.<br />
        <strong>¿Te interesa alguna área en particular?</strong>
      </p>
    ),
  },
  { type: 'option', content: '🖥️ Tecnología' },
  { type: 'option', content: '💼 Negocios' },
  { type: 'option', content: '🎨 Arte y Humanidades' },
  { type: 'option', content: '🧬 Ciencias de la Salud' },
];

// Tercer bloque de detalles sobre tecnología
const techDetails = [
  {
    type: 'bot',
    content: (
      <p>
        Aquí tienes más información sobre nuestros programas de Tecnología:
      </p>
    ),
  },
  {
    type: 'option',
    content: '🔗 Ver programa de Tecnología',
    link: 'https://www.uoc.edu/en',
    bold: true,
  },
  {
    type: 'bot',
    content: '¿Quieres que te envíe también el folleto completo?'
  },
  { type: 'option', content: 'Descargar folleto' },
  { type: 'option', content: 'Hablar con un asesor' },
];

export default function ChatScreen() {
  const [visibleMessages, setVisibleMessages] = useState([]);
  const [isThinking, setIsThinking] = useState(true);
  const hasAnimated = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    firstMessages.forEach((item, i) => {
      setTimeout(() => {
        setVisibleMessages((prev) => [...prev, item]);
        if (i === firstMessages.length - 1) setIsThinking(false);
      }, i * 1000);
    });
  }, []);

  const handleOptionClick = (msg) => {
    if (msg.content.includes('Carreras y programas')) {
      setVisibleMessages([]);
      setIsThinking(true);
      followUp.forEach((item, i) => {
        setTimeout(() => {
          setVisibleMessages((prev) => [...prev, item]);
          if (i === followUp.length - 1) setIsThinking(false);
        }, i * 900);
      });
    }
    if (msg.content.includes('Tecnología')) {
      setVisibleMessages([]);
      setIsThinking(true);
      techDetails.forEach((item, i) => {
        setTimeout(() => {
          setVisibleMessages((prev) => [...prev, item]);
          if (i === techDetails.length - 1) setIsThinking(false);
        }, i * 900);
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center px-4">
      <div className="w-full max-w-[350px] bg-indigo-50 font-jakarta flex flex-col rounded-xl shadow-lg">
        
        {/* Cabecera superior con botón de cierre */}
        <div className="bg-indigo-950 text-white px-4 py-3 flex items-center justify-between rounded-t-xl">
          <div className="flex items-center gap-2">
            <img src={unicornImg} alt="UniCorn" className="w-6 h-6 sm:w-7 sm:h-7" />
            <h1 className="text-sm sm:text-base font-bold">UniCorn</h1>
          </div>
          <button
            onClick={() => navigate('/')}
            className="w-8 h-8 bg-white text-indigo-950 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Mensajes del chatbot y opciones */}
        <div className="flex-1 px-4 pt-6 space-y-4">
          <AnimatePresence>
            {visibleMessages.map((msg, index) => {
              const showTimestamp =
                msg.type === 'bot' &&
                (index === 0 || visibleMessages[index - 1].type !== 'bot');

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  {msg.type === 'bot' && (
                    <div className="flex flex-col items-start">
                      {showTimestamp && (
                        <div className="text-xs text-gray-400 mb-1 flex justify-between w-full max-w-[80%]">
                          <span>Now</span>
                        </div>
                      )}
                      <div className="bg-indigo-200 text-indigo-900 rounded-2xl px-4 py-3 w-fit max-w-[80%]">
                        {msg.content}
                      </div>
                    </div>
                  )}

                  {msg.type === 'option' && (
                    <div className="flex flex-col items-start">
                      <div className="bg-indigo-200 text-indigo-900 rounded-2xl px-4 py-3 w-fit max-w-[80%]">
                        {msg.link ? (
                          <a
                            href={msg.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-left font-bold hover:underline hover:text-indigo-700 transition-colors duration-200"
                          >
                            {msg.content}
                          </a>
                        ) : (
                          <button
                            onClick={() => handleOptionClick(msg)}
                            className={`text-left font-medium transition-colors duration-200 ${
                              ['Carreras y programas', 'Tecnología'].some(keyword =>
                                msg.content.includes(keyword)
                              )
                                ? 'hover:underline hover:text-indigo-700'
                                : ''
                            } ${msg.bold ? 'font-bold' : ''}`}
                          >
                            {msg.content}
                          </button>
                        )}
                      </div>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Animación de "pensando..." */}
          {isThinking && (
            <div className="flex items-center gap-2 text-sm text-gray-400 mt-2">
              <span className="animate-pulse">UniCorn está pensando</span>
              <span className="flex gap-1">
                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce"></span>
                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-1 h-1 bg-gray-400 rounded-full animate-bounce delay-200"></span>
              </span>
            </div>
          )}
        </div>

        {/* Área de entrada de texto */}
        <div className="mt-auto px-4 pt-4 pb-6">
          <div className="flex items-center border rounded-full px-4 py-2 bg-white focus-within:ring-2 ring-indigo-500">
            <input
              type="text"
              placeholder="Escribe tu mensaje aquí..."
              className="flex-1 text-sm outline-none bg-transparent text-gray-700"
            />
            <button
              className="ml-2 bg-indigo-600 text-white w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-200 hover:scale-110 hover:bg-indigo-700"
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
