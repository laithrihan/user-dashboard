"use client";
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../validation/loginSchema';
import { LoginFormData } from '../types';
import { useLogin } from '../context/LoginContext';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export const useLoginForm = () => {
    const { loggedIn, setLoggedIn } = useLogin();
    const router = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data: LoginFormData) => {
        const storedData = localStorage.getItem('registerFormData');
        if (!storedData) {
            toast.error('No registration data found.');
            return;
        }

        const parsedData = JSON.parse(storedData);
        if (
            parsedData.email === data.email &&
            parsedData.password === data.password
        ) {
            setLoggedIn(true);
            console.log(`logged in : ${loggedIn}`);
            toast.success("Logged In Successfully");
            router.replace('/');
        } else {
            toast.error('Invalid email or password.');
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
    };
};
