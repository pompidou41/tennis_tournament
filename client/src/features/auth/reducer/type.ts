export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  avatar: string | null;
  isAdmin: boolean;
};

export type StateAuth = {
  user: User | undefined;
};

export type Action = {
  type: string;
  payload: User | undefined;
};
