/* eslint-disable @typescript-eslint/no-unused-vars */
import { User } from "../../types";
import { endPoints } from "./constants";
export type Out = { users: User[]; error?: undefined } | { users: null; error: Error };
export async function getUsersData(): Promise<Out> {
    try {
        const response = await fetch(endPoints.usersDetails);
                if (!response.ok) {
            throw new Error(`Failed to fetch user page`);
        }
        const users: User[] = await response.json(); 
        return { users, error: undefined }; 
    } catch (error) {
        console.error(error);
        return {
            users: null,
            error: new Error("Failed to fetch users data"),
        };
    }
}
