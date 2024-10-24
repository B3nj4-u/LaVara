import React from 'react';

const Tree: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="h-full w-full flex flex-col items-center justify-between">
        {/* Copa del árbol */}
        <div className="relative w-full h-40 bg-green-700 rounded-b-full">
          {/* Bultos de hojas grandes */}
          <div className="absolute -top-6 left-1/4 w-32 h-32 bg-green-600 rounded-full"></div>
          <div className="absolute -top-8 left-1/2 w-36 h-36 bg-green-600 rounded-full"></div>
          <div className="absolute -top-5 right-1/4 w-28 h-28 bg-green-600 rounded-full"></div>
          <div className="absolute -top-6 right-1/6 w-34 h-34 bg-green-600 rounded-full"></div>

          {/* Pequeñas hojas flotantes con animación */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 bg-green-500 rounded-full shadow-md animate-sway"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4 + 1}s`,
                animationDuration: `${Math.random() * 4 + 2}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Tronco del árbol */}
        <div className="flex-grow w-24 bg-gradient-to-r from-amber-800 via-amber-900 to-amber-800 relative">
          {/* Detalles del tronco, como arrugas */}
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className={`absolute left-1/2 w-10 h-2 bg-amber-700 rounded-full transform -translate-x-1/2`}
              style={{
                top: `${25 * (i + 1)}%`,
                width: `${50 - i * 10}%`,
                height: `${i % 2 === 0 ? '4px' : '2px'}`,
              }}
            ></div>
          ))}

          {/* Ramas más orgánicas */}
          <div className="absolute top-1/4 left-0 w-32 h-4 bg-amber-800 rounded transform -rotate-12"></div>
          <div className="absolute top-1/2 right-0 w-32 h-4 bg-amber-800 rounded transform rotate-12"></div>
          <div className="absolute top-3/4 left-0 w-28 h-4 bg-amber-800 rounded transform -rotate-6"></div>
        </div>

        {/* Raíces */}
        <div className="w-full h-40 overflow-hidden relative">
          <div className="absolute inset-0 bg-amber-900 rounded-t-full"></div>
          <div className="absolute top-0 left-1/4 w-16 h-24 bg-amber-800 rounded-b-full transform -rotate-15"></div>
          <div className="absolute top-0 right-1/4 w-16 h-24 bg-amber-800 rounded-b-full transform rotate-15"></div>
          <div className="absolute top-0 left-1/2 w-12 h-16 bg-amber-700 rounded-b-full transform -translate-x-1/2"></div>
        </div>
      </div>

      {/* Luces titilantes */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default Tree;
