import { ComponentProps } from 'react';
import { motion } from 'framer-motion';

import { Container } from './styles';

type ButtonProps = ComponentProps<typeof motion.button> & {
  children: React.ReactNode;
  color: 'blue' | 'white';
};

export const Button = ({ children, color, ...rest }: ButtonProps) => {
  return (
    <motion.button
      className={Container}
      style={
        color === 'blue'
          ? {
              background: 'var(--blue-500)',
              border: '1px solid var(--blue-500)',
            }
          : color === 'white'
          ? { border: '1px solid var(--white)' }
          : {}
      }
      whileHover={{
        transition: { duration: 0.2 },
        filter: 'brightness(0.7)',
      }}
      {...rest}
    >
      {children}
    </motion.button>
  );
};
