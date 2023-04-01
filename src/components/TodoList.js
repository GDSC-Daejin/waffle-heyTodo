import React from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { useTodoState } from '../todoContext';


const TodoListBlock = styled.div`
  flex: 1;
  padding: 20px 32px;
  padding-bottom: 48px;
  overflow-y: auto;
  placeholder="가나다라마바사";
`;

function TodoList() {
  const todos = useTodoState();

  return (
    <TodoListBlock>
    {todos.map(todo => (
      <TodoItem
        placeholder="가나다라마바사"
        key={todo.id}
        id={todo.id}
        text={todo.text}
        done={todo.done}
      />
    ))}
  </TodoListBlock>
  )
}

export default TodoList;