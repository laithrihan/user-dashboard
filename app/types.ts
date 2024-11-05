
export interface User {
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
    users: User[];
  }