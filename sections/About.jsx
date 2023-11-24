'use client';

import { TypingText } from '../components';
import{motion} from 'framer-motion';
import styles from "../styles";
import {fadeIn,staggerContainer} from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.5 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Stellar Vue" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Welcome to Stellar Vue</span>
        <p>Embark on a journey beyond the confines of our world and delve into the mesmerizing expanse of the cosmos with Stellar Vue. We invite you to explore the boundless beauty and mysteries of galaxies, those celestial wonders that adorn the vastness of the universe.</p>
        
      </motion.p>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
