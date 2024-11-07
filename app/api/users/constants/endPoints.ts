/* eslint-disable @typescript-eslint/no-unused-expressions */
import { baseUrl } from "./config"
export const endPoints = {
    usersDetails: `${baseUrl}/users`,
    usersRoutesData: (id: string) => `${baseUrl}/users/${id}`
} as const