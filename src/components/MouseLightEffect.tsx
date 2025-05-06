
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
        className="absolute w-[400px] h-[400px] rounded-full bg-radial-gradient opacity-30 mix-blend-overlay"
        style={{
          background: 'radial-gradient(circle, rgba(248, 187, 208, 0.7) 0%, rgba(248, 187, 208, 0) 70%)',
          transform: `translate(${position.x - 200}px, ${position.y - 200}px)`,
          transition: 'transform 0.2s ease-out',
        }}
      />
    </div>
  );
};

export default MouseLightEffect;
