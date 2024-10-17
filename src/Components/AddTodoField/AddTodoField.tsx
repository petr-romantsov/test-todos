import { FC, FormEventHandler, useState } from 'react';

type AddTodoFieldProps = {
  addTodo: (text: string) => void;
};

export const AddTodoField: FC<AddTodoFieldProps> = ({ addTodo }) => {
  const [todoText, setTodoText] = useState<string>('');

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    addTodo(todoText);
    setTodoText('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        name="add-todo"
        value={todoText}
        onChange={(event) => setTodoText(event.target.value)}
      />
      <button>Add</button>
    </form>
  );
};
