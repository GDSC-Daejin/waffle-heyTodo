import React from 'react';
import styled from 'styled-components';

const TodoTemplateBlock = styled.div`
  width: 600px;
  height: flex;

  position: relative; 
  background: ${props => props.theme.boxColor};
  border-radius: 16px;
  box-shadow: ${props => props.theme.shadow};

  margin: 0 auto; /* 페이지 중앙에 나타나도록 설정 */

  margin-top: 50px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  padding-bottom: 25px;
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;