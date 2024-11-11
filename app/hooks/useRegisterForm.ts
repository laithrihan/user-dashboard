'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormData } from '../types';
import { registerSchema } from '../validation/registerSchema';

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    localStorage.setItem('registerFormData', JSON.stringify(data));
    window.alert("Signed Up Successfully")

  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};
export { registerSchema };
