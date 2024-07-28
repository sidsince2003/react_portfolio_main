import { RiReactjsLine } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { SiJupyter } from "react-icons/si";
import { BiLogoDjango } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { SiAnaconda } from "react-icons/si";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
  initial: {y:-10},
  animate: {
    y: [10, -10],
    transition: { 
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
      
    },
    
  },
  
});

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Technologies</h1>
      <motion.div
      whileInView={{opacity: 1, x: 0 }}
      initial={{opacity: 0, x: -100}} 
      transition={{ duration: 1.5}}
      className="flex flex-wrap items-center justify-center gap-4">

      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
          <motion.div
            variants={iconVariants(2.5)}
            initial="initial"
            animate="animate"
            className="rounded-2xl border-4 border-neutral-800 p-4"
          >
            <RiReactjsLine className="text-7xl text-cyan-400" />
          </motion.div>
        </a>

        <a href="https://www.mysql.com/" target="_blank" rel="noopener noreferrer">
          <motion.div 
          variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiMysql className="text-7xl" />
          </motion.div>
        </a>

        <a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer">
          <motion.div
           variants={iconVariants(5)}
           initial="initial"
           animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiJupyter className="text-7xl text-orange-600" />
          </motion.div>
        </a>

        <a href="https://www.djangoproject.com/" target="_blank" rel="noopener noreferrer">
          <motion.div
          variants={iconVariants(4)}
          initial="initial"
          animate="animate"
           className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiLogoDjango className="text-7xl text-green-900" />
          </motion.div>
        </a>

        <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer">
          <motion.div
          variants={iconVariants(7)}
          initial="initial"
          animate="animate" 
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiTailwindcss className="text-7xl text-sky-500" />
          </motion.div>
        </a>

        <a href="https://www.anaconda.com/" target="_blank" rel="noopener noreferrer">
          <motion.div 
          variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          className="rounded-2xl border-4 border-neutral-800 p-4">
            <SiAnaconda className="text-7xl text-green-600" />
          </motion.div>
        </a>
        
      </motion.div>
    </div>
  );
}

export default Technologies;
