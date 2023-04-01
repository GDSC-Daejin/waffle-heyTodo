import React from 'react';
import { useState } from 'react';
import GlobalStyles from './GlobalStyles';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';
import TodoList from './components/TodoList';
import TodoCreate from './components/TodoCreate';
import Header from './components/TodoHeader';
import { TodoProvider } from './todoContext';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/TodoTheme';


function App() {

  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className="App">
      {/* globalstyle 을 쓰지 않았다고 오류가 떠서 넣어줫더니 해결*/}
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <GlobalStyles />
          <TodoProvider>
            <Header isDark={isDark} toggleTheme={toggleTheme} />
            <TodoTemplate>
              <TodoHead />
              <TodoList />
              <TodoCreate />
            </TodoTemplate>
          </TodoProvider>  
      </ThemeProvider>
    </div>
  );
}

export default App;
