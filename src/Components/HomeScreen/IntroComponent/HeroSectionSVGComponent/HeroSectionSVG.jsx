import React from 'react';
import { motion } from 'framer-motion';

const HeroSectionSVG = () => {
  return (
    <motion.svg
      width="617"
      height="448"
      viewBox="0 0 617 448"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {/* Cloud Paths (static, no animation) */}
      <path
        d="M407 60C459.122 60 501.377 102.285 501.377 154.445C501.377 157.163 501.263 159.847 501.035 162.505C532.646 166.817 555 200.182 555 233"
        stroke="#0000FF"
        strokeWidth="8.52199"
        strokeMiterlimit="10"
      />
      <path
        d="M61.2113 250C32.763 268.823 14 301.126 14 337.803C14 395.902 61.0645 443 119.122 443H307"
        stroke="#0000FF"
        strokeWidth="8.52199"
        strokeMiterlimit="10"
      />
      <path
        d="M553.08 230C582.693 250.774 612 286.424 612 326.902C612 391.022 563.008 443 502.572 443H307"
        stroke="#0000FF"
        strokeWidth="8.52199"
        strokeMiterlimit="10"
      />

      {/* Animated Icons */}
      {/* Icon 1 - Pulsing + Bounce */}
      <motion.g
        initial={{ scale: 0.9, y: -20, opacity: 0 }}
        animate={{ scale: [1, 1.1, 1], y: [0, -10, 0], opacity: 1 }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "mirror",
        }}
      >
        <path
          d="M477.341 202.456L474.198 199.313L477.341 196.171C477.591 195.921 477.731 195.582 477.731 195.228C477.731 194.874 477.591 194.535 477.341 194.285C477.091 194.035 476.752 193.895 476.398 193.895C476.044 193.895 475.705 194.035 475.455 194.285L472.312 197.428L469.17 194.285C468.92 194.035 468.581 193.895 468.227 193.895C467.873 193.895 467.534 194.035 467.284 194.285C467.034 194.535 466.894 194.874 466.894 195.228C466.894 195.582 467.034 195.921 467.284 196.171L470.427 199.313L467.284 202.456C467.034 202.706 466.894 203.045 466.894 203.399C466.894 203.753 467.034 204.092 467.284 204.342C467.534 204.592 467.873 204.732 468.227 204.732C468.581 204.732 468.92 204.592 469.17 204.342L472.312 201.199L475.455 204.342C475.705 204.592 476.044 204.732 476.398 204.732C476.752 204.732 477.091 204.592 477.341 204.342C477.591 204.092 477.731 203.753 477.731 203.399C477.731 203.045 477.591 202.706 477.341 202.456Z"
          fill="#FED369"
        />
      </motion.g>

      {/* Icon 2 - Left-Right Wobble */}
      <motion.g
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: [0, 10, -10, 0], opacity: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <path
          d="M50 300C100 300 100 200 50 200"
          fill="#FF6384"
        />
      </motion.g>

      {/* Icon 3 - Scale Pulsate */}
      <motion.g
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: [1, 1.2, 1], opacity: 1 }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <circle cx="150" cy="150" r="30" fill="#36A2EB" />
      </motion.g>

      {/* Icon 4 - Rotate */}
      <motion.g
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 360, opacity: 1 }}
        transition={{
          duration: 4,
          ease: "linear",
          repeat: Infinity,
        }}
      >
        <rect x="300" y="100" width="50" height="50" fill="#FFCE56" />
      </motion.g>

      {/* Icon 5 - Floating Up-Down */}
      <motion.g
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: [0, -20, 0], opacity: 1 }}
        transition={{
          duration: 3,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      >
        <polygon points="200,300 250,250 300,300" fill="#4BC0C0" />
      </motion.g>
    </motion.svg>
  );
};

export default HeroSectionSVG;
