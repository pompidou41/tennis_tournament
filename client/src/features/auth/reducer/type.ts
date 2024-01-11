export type User = {
    id: number;
    name: string;
    email: string;
    password: string;
    isAdmin: boolean;
  };
  
  export type StateAuth = {
    user: User | undefined;
  };