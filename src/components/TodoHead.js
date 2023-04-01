import React from 'react';
import styled from 'styled-components';
import { useTodoState } from '../todoContext';

const TodoHeadBlock = styled.div`
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 2px solid #e9ecef;

    h1 {
        margin-top: 30px;
        font-size: 20px;
        color: ${props => props.theme.dColor};
    }

    .tasksLeft {
        color: ${props => props.theme.dColor};
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;


function TodoHead() {
    const todos = useTodoState();
    const undoneTasks = todos.filter(todo => !todo.done);

    const today = new Date();
    const dateString = today.toLocaleDateString('ko-KR', {
       year: 'numeric',
       month: 'long',
       day: 'numeric'
    });
    const dayName = today.toLocaleDateString('ko-KR', { weekday: 'long' });

    return (
        <TodoHeadBlock>
            <div className="LOGO"><img src="img/todologo.png" alt="todo logo" className="todoLogo"/> 야! 투두!</div>
            <div className="blockContents">   
                <h1> {dateString} {dayName} </h1>        
                <div className="tasksLeft">남은 할 일 {undoneTasks.length}개!</div>      
            </div>
        </TodoHeadBlock>
    );
}

export default TodoHead;