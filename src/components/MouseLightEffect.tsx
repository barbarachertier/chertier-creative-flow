
import { useEffect, useState } from 'react';

const MouseLightEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Show the effect after a short delay to prevent flash on initial load
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    
    const updateMousePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div 
      className={`fixed inset-0 pointer-events-none z-0 transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <div 
        className="absolute w-[500px] h-[500px] rounded-full bg-radial-gradient opacity-50 mix-blend-overlay"
        style={{
          background: 'radial-gradient(circle, rgba(248, 187, 208, 0.9) 0%, rgba(248, 187, 208, 0) 70%)',
          transform: `translate(${position.x - 250}px, ${position.y - 250}px)`,
          transition: 'transform 0.15s ease-out',
          filter: 'blur(15px)',
        }}
      />
      <div 
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 70%)',
          transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
          transition: 'transform 0.1s linear',
          mixBlendMode: 'screen',
        }}
      />
    </div>
  );
};

export default MouseLightEffect;
