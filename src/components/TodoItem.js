import React from 'react';
import styled, { css } from 'styled-components';
import { MdDone, MdDelete } from 'react-icons/md';
import { useTodoDispatch } from '../todoContext';

// 제거버튼 스타일
const Remove = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ab8787;
  font-size: 24px;
  cursor: pointer;
  &:hover {
    color: #DB4437;
  }
`;

// 할 일 항목이 생겼을 때 블록 스타일
const TodoItemBlock = styled.div`
  display: flex;
  background-color: ${props => props.theme.listColor};
  border: 2px solid #fbb1c2;
  border-radius: 10px;
  align-items: center;
  padding: 12px;
  margin-bottom: 5px;
`;

const CheckCircle = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 20px;
  border: 2px solid #ced4da;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
  ${props =>
    props.done &&
    css`
      border: 1px solid #ffa6c9;
      color: #fbb1c2;
    `}
`;

const Text = styled.div`
  flex: 1;
  font-size: 21px;
  color: ${props => props.theme.textColor};
  ${props =>
    props.done &&
    css`
      text-decoration: line-through;
      color: #ced4da;
    `}
`;


function TodoItem({ id, done, text }) {
  const dispatch = useTodoDispatch();
  const onToggle = () => dispatch({ type: 'TOGGLE', id });
  const onRemove = () => dispatch({ type: 'REMOVE', id });
  return (
    <TodoItemBlock>
      <CheckCircle done={done} onClick={onToggle}>
        {done && <MdDone />}
      </CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove onClick={onRemove}>
        <MdDelete />
      </Remove>
    </TodoItemBlock>
  );
}


export default React.memo(TodoItem);