'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterFormData } from '../types';
import { registerSchema } from '../validation/registerSchema';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const useRegisterForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormData) => {
    const storedData = localStorage.getItem('registeredUsers');
    const users = storedData ? JSON.parse(storedData) : [];

    // Check if any user has the same email or username
    const userExists = users.some(
      (user: RegisterFormData) =>
        user.email === data.email || user.username === data.username
    );

    if (userExists) {
      toast.warning("You already registered.");
    } else {
      // Add the new user to the array
      users.push(data);
      localStorage.setItem('registeredUsers', JSON.stringify(users));
      toast.success("Signed Up Successfully");
      router.push('/login');
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
