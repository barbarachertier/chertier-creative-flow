
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
      aria-hidden="true"
    >
      {/* Large pink glow - positioned behind content */}
      <div 
        className="absolute w-[800px] h-[800px] rounded-full opacity-70 mix-blend-soft-light"
        style={{
          background: 'radial-gradient(circle, rgba(248, 187, 208, 1) 0%, rgba(248, 187, 208, 0) 70%)',
          transform: `translate(${position.x - 400}px, ${position.y - 400}px)`,
          transition: 'transform 0.15s ease-out',
          filter: 'blur(35px)',
          willChange: 'transform',
        }}
      />
      
      {/* Medium white glow for highlight effect */}
      <div 
        className="absolute w-[450px] h-[450px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 75%)',
          transform: `translate(${position.x - 225}px, ${position.y - 225}px)`,
          transition: 'transform 0.12s linear',
          mixBlendMode: 'screen',
          filter: 'blur(15px)',
          willChange: 'transform',
        }}
      />
      
      {/* Small focused highlight */}
      <div 
        className="absolute w-[150px] h-[150px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0) 80%)',
          transform: `translate(${position.x - 75}px, ${position.y - 75}px)`,
          transition: 'transform 0.08s linear',
          mixBlendMode: 'overlay',
          willChange: 'transform',
        }}
      />
    </div>
  );
};

export default MouseLightEffect;
