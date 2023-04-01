import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdAdd } from 'react-icons/md';
import { useTodoDispatch, useTodoNextId } from '../todoContext';

// 추가 버튼 스타일
const CircleButton = styled.button`
  background: #0F9D58;
  &:hover {
    background: #38d9a9;
  }
  &:active {
    background: #20c997;
  }

  z-index: 5;
  cursor: pointer;
  width: 50px;
  height: 50px;
  display: flex;
  
  font-size: 50px;
  position: absolute;
  left: 50%;
  bottom: 0px;
  {/*버튼 자체의 위치를 변경시켜준다*/}
  transform: translate(-20px, -10px);
  color: #fff;
  border-radius: 50%;
  border: none;
  outline: none;


  transition: 0.125s all ease-in;
  ${props =>
    props.open &&
    css`
      background: #DB4437;
      &:hover {
        background: #ff8787;
      }
      &:active {
        background: #fa5252;
      }
      transform: translate(-20px, -10px) rotate(45deg);
    `}
`;
// 추가 버튼을 눌렀을 때 나오는 칸 뒷 배경 스타일의 뒷배경
const InsertFormPositioner = styled.div`
  width: 100%;
  bottom: 0;
  left: 0;
  position: absolute;
`;

// 플러스 버튼을 눌렀을 때 나오는 칸의 스타일
const InsertForm = styled.form`
  background: ${props => props.theme.addColor};
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9ecef;
`;

// 할일을 입력하는 칸 스타일
const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  width: 100%;
  outline: none;
  font-size: 18px;
  text-align: center;
  box-sizing: border-box;
  background: ${props => props.theme.adbxColor};
`;

function TodoCreate() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  const dispatch = useTodoDispatch();
  const nextId = useTodoNextId();

  const onToggle = () => setOpen(!open);
  const onChange = e => setValue(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // 새로고침 방지
    dispatch({
      type: 'CREATE',
      todo: {
        id: nextId.current,
        text: value,
        done: false
      }
    });
    setValue('');
    setOpen(false);
    nextId.current += 1;
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={onSubmit}>
            <Input
              autoFocus
              placeholder="내용을 입력해주세요!"
              onChange={onChange}
              value={value}
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton onClick={onToggle} open={open}>
        <MdAdd />
      </CircleButton>
    </>
  );
}

export default React.memo(TodoCreate);