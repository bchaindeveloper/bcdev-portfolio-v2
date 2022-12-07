'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { TitleText, TypingText } from '../components';
import { fadeIn, staggerContainer } from '../utils/motion';

const Mission = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      
      <TypingText title="" textStyles="text-center" />
      <TitleText
        title={(
          <>Mission
          </>
        )}
        textStyles="text-center"
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="./Projects.jpg" alt="USA" className="w-full h-full object-cover" />
        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="absolute mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold">| My mission is to help build technology that the world needs now more than ever. </span>

      </motion.p>
      </motion.div>
    </motion.div>
  </section>
);

export default Mission;