import { Button, TextField, Typography } from '@mui/material';
import { ChangeEvent, FC, FormEventHandler, useState } from 'react';
import './AddTodoField.css';
import { FieldError } from '../../api/useTodoList.types';

type AddTodoFieldProps = {
  addTodo: (text: string) => void;
  fieldError: FieldError;
  setFieldError: (value: FieldError) => void;
};

export const AddTodoField: FC<AddTodoFieldProps> = ({
  addTodo,
  fieldError,
  setFieldError,
}) => {
  const [todoText, setTodoText] = useState<string>('');

  const onSubmit: FormEventHandler = (event) => {
    event.preventDefault();

    addTodo(todoText);
    setTodoText('');
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setFieldError(null);
    setTodoText(event.target.value);
  };

  return (
    <div className="wrapper">
      <form className="add-form" onSubmit={onSubmit}>
        <TextField
          fullWidth
          id="standard-basic"
          label="What needs to be done?"
          variant="standard"
          type="text"
          name="add-todo"
          value={todoText}
          onChange={onChangeHandler}
        />
        <Button variant="text" color="secondary" onClick={onSubmit}>
          Add
        </Button>
      </form>
      {fieldError && (
        <Typography variant="body2" color="error" className="error">
          {fieldError}
        </Typography>
      )}
    </div>
  );
};
