'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormData } from '../types';
import { registerSchema } from '../validation/registerSchema';
import { toast } from 'react-toastify';

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    const existingData = localStorage.getItem('registerFormData');

    if (existingData) {
      toast.warning("You have already signed up!");
    } else {
      localStorage.setItem('registerFormData', JSON.stringify(data));
      toast.success("Signed Up Successfully");
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    onSubmit,
  };
};

export { registerSchema };
