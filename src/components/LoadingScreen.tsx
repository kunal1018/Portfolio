import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative">
        {/* Animated background gradient */}
        <motion.div
          className="absolute inset-0 blur-3xl opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 50% 50%, #6366f1, transparent 60%)',
              'radial-gradient(circle at 50% 50%, #8b5cf6, transparent 60%)',
              'radial-gradient(circle at 50% 50%, #6366f1, transparent 60%)',
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Glass morphism container */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative backdrop-blur-xl bg-white/5 rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
          style={{
            width: '600px',
            height: '200px',
          }}
        >
          {/* Animated border gradient */}
          <div className="absolute inset-0 p-[1px] rounded-2xl overflow-hidden">
            <motion.div
              className="absolute inset-0"
              animate={{
                background: [
                  'linear-gradient(to right, #6366f1, #8b5cf6, #6366f1)',
                  'linear-gradient(to right, #8b5cf6, #6366f1, #8b5cf6)',
                  'linear-gradient(to right, #6366f1, #8b5cf6, #6366f1)',
                ],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </div>

          {/* Content */}
          <div className="relative h-full flex flex-col items-center justify-center px-8 py-6">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.2
              }}
              className="text-5xl font-bold text-white mb-4"
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                letterSpacing: '0.05em'
              }}
            >
              KUNAL GANDHI
            </motion.h1>

            {/* Loading bar */}
            <motion.div
              className="w-48 h-1 bg-white/10 rounded-full overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{
                  duration: 2,
                  ease: [0.22, 1, 0.36, 1]
                }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;