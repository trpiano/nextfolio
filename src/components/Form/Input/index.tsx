import { ComponentProps } from 'react';
import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Container } from './styles';


type InputProps = ComponentProps<typeof motion.input> & {
  name: string;
  register: UseFormRegister<any>;
  required?: boolean;
  requiredMessage?: string;
  errors: FieldErrors<any>;
};

export const Input = ({
  name,
  register,
  required = false,
  requiredMessage,
  errors,
  ...rest
}: InputProps) => {
  return (
    <Container>
      <motion.input {...register(name, { required })} {...rest} />

      {errors[name] ? <span>{requiredMessage}</span> : null}
    </Container>
  );
};
