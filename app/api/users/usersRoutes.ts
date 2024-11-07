import { User } from "../../types";
import { endPoints } from "./constants";
export type Out = { user: User; error?: undefined; } | { user: null; error?: Error; }
export async function getUsersRoutesData(id: string): Promise<Out> {
    try {
        const response = await fetch(endPoints.usersRoutesData(id));
        if (!response.ok) {
            throw new Error(`Failed to fetch user page`);
        }
        const user: User = await response.json();
        return { user, error: undefined };
    } catch (error) {
        console.error(error);
        return {
            user: null,
            error: new Error("Failed to fetch user page")
        };
    }
}
