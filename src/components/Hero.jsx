import { motion } from 'motion/react';

function Hero() {
  return (
    <motion.section
      className="h-screen flex items-center justify-center bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white px-4"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center max-w-3xl">
        <motion.h1
          className="text-5xl md:text-6xl font-bold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Diogo Lima
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl text-zinc-300 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor, voluptas asperiores soluta quidem ea laboriosam nobis unde repellendus fugit debitis excepturi laborum at illo, in consectetur, porro velit quod?
        </motion.p>

        <motion.div
          className="flex justify-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <a
            href="https://github.com/lsodiogo"
            target="_blank"
            rel="noreferrer"
            className="hover:opacity-100 opacity-60 transition-opacity"
          >
            <img src="/icons/github.svg" alt="GitHub" className="w-6 h-6 invert" />
          </a>
          <a
            href="https://linkedin.com/in/diogooslima"
            target="_blank" rel="noreferrer"
            className="hover:opacity-100 opacity-60 transition-opacity"
          >
            <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-6 h-6 invert" />
          </a>
        </motion.div>

        <motion.a
          href="#projects"
          className="inline-block px-6 py-3 border border-white rounded-full text-white hover:bg-white hover:text-black transition-all"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          VIEW MY WORK
        </motion.a>
      </div>
    </motion.section>
  );
};

export default Hero;