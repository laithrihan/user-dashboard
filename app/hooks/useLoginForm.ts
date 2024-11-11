"use client"
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../validation/loginSchema';
import { LoginFormData } from '../types';
import { useLogin } from '../context/LoginContext';
import {toast} from "react-toastify"
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
            toast.success("Logged In Successfully")
            if (typeof window !== "undefined") {
            }
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
