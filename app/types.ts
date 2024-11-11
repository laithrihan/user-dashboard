import { z } from "zod";
import { registerSchema } from "./hooks/useRegisterForm";
import { loginSchema } from "./validation/loginSchema";
import { Dispatch, ReactNode, SetStateAction } from "react";

export interface User {
  error?: Error,
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
}

export interface GridCardProps {
  id: number;
  name: string;
  email: string;
  city: string;
}

export interface UserGridProps {
  users: User[] | null;
}

export type RegisterFormData = z.infer<typeof registerSchema>;
export type LoginFormData = z.infer<typeof loginSchema>;
export interface LoginProviderProps {
  children: ReactNode; 
}

export interface LoginContextProps {
  loggedIn: boolean;
  setLoggedIn: Dispatch<SetStateAction<boolean>>;
}
