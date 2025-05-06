
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
      {/* Main pink glow - positioned behind content */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full opacity-60 mix-blend-soft-light"
        style={{
          background: 'radial-gradient(circle, rgba(248, 187, 208, 1) 0%, rgba(248, 187, 208, 0) 70%)',
          transform: `translate(${position.x - 300}px, ${position.y - 300}px)`,
          transition: 'transform 0.15s ease-out',
          filter: 'blur(25px)',
          willChange: 'transform',
        }}
      />
      
      {/* Secondary white glow for highlight effect */}
      <div 
        className="absolute w-[350px] h-[350px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0) 70%)',
          transform: `translate(${position.x - 175}px, ${position.y - 175}px)`,
          transition: 'transform 0.1s linear',
          mixBlendMode: 'screen',
          willChange: 'transform',
        }}
      />
      
      {/* Small focused highlight */}
      <div 
        className="absolute w-[120px] h-[120px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0) 80%)',
          transform: `translate(${position.x - 60}px, ${position.y - 60}px)`,
          transition: 'transform 0.05s linear',
          mixBlendMode: 'overlay',
          willChange: 'transform',
        }}
      />
    </div>
  );
};

export default MouseLightEffect;
