"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../validation/loginSchema';
import { LoginFormData } from '../types';
import { useLogin } from '../context/LoginContext';

export const useLoginForm = () => {
    const { loggedIn, setLoggedIn } = useLogin();
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
            alert('No registration data found.');
            return;
        }

        const parsedData = JSON.parse(storedData);
        if (
            parsedData.email === data.email &&
            parsedData.password === data.password
        ) {
            setLoggedIn(true);
            console.log(`logged in : ${loggedIn}`);
            window.alert("Logged In Successfully")
            if (typeof window !== "undefined") {
            }
        } else {
            alert('Invalid email or password.');
        }
    };

    return {
        register,
        handleSubmit,
        errors,
        onSubmit,
    };
};
