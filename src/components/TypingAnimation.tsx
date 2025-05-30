import { useState, useEffect } from 'react';

interface TypingAnimationProps {
  text: string;
  speed?: number;
  className?: string;
  delay?: number;
}

const TypingAnimation = ({ text, speed = 80, className = "", delay = 0 }: TypingAnimationProps) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    // Start typing after delay
    const startDelay = setTimeout(() => {
      if (currentIndex < text.length) {
        const timer = setTimeout(() => {
          setDisplayText(prev => prev + text[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        }, speed);

        return () => clearTimeout(timer);
      }
    }, delay);

    return () => clearTimeout(startDelay);
  }, [currentIndex, text, speed, delay]);

  // Cursor blinking effect - slightly faster
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 400);

    return () => clearInterval(cursorTimer);
  }, []);

  return (
    <span className={className}>
      {displayText}
      {currentIndex <= text.length && (
        <span className={`inline-block w-0.5 h-8 bg-cyan-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-75`}>
          |
        </span>
      )}
    </span>
  );
};

export default TypingAnimation;