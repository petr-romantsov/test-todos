export type Todo = {
  text: string;
  id: string;
  isDone: boolean;
};

export type Filter = 'All' | 'Active' | 'Completed';

export type FieldError = string | null;
