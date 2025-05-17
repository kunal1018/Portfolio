import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const NetflixIntro = () => {
  const [stage, setStage] = useState<'initial' | 'fullName' | 'k'>('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('fullName'), 500);
    const timer2 = setTimeout(() => setStage('k'), 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="relative w-full h-full flex items-center justify-center perspective">
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: stage !== 'initial' ? 1 : 0,
          y: stage !== 'initial' ? 0 : 20,
          scale: stage === 'k' ? 0.8 : 1
        }}
        transition={{ 
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1]
        }}
      >
        <motion.h1
          className="text-8xl font-medium text-red-600"
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            letterSpacing: '0.05em',
            textShadow: `
              0 0 20px rgba(229, 9, 20, 0.3),
              0 0 40px rgba(229, 9, 20, 0.2),
              0 0 60px rgba(229, 9, 20, 0.1)
            `,
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
          }}
        >
          <motion.span
            initial={{ width: 'auto' }}
            animate={{ 
              width: stage === 'k' ? '1ch' : 'auto',
              scale: stage === 'k' ? 1.4 : 1,
              opacity: 1
            }}
            transition={{ 
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="inline-block overflow-hidden whitespace-nowrap"
            style={{
              transformOrigin: 'center',
              willChange: 'transform, width',
              transform: 'translateZ(0)'
            }}
          >
            KUNAL GANDHI
          </motion.span>
        </motion.h1>

        {/* Bottom reflection */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: stage !== 'initial' ? 0.3 : 0
          }}
          transition={{ delay: 0.2 }}
          className="absolute top-full left-0 right-0 h-20 bg-gradient-to-b from-red-600/30 to-transparent"
          style={{ 
            transform: 'rotateX(180deg) scaleY(0.3)',
            transformOrigin: 'top',
            willChange: 'opacity'
          }}
        />
      </motion.div>
    </div>
  );
};

export default NetflixIntro;