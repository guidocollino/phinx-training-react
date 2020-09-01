import React, { FC } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import Login from '../../containers/Login';

const GlobalStyle = createGlobalStyle`
  html, body {
    width: 100%;
    height: 100%;
    margin: 0px;
    padding: 0px;
  }
`;

const App: FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Login />
    </div>
  );
};

export default App;
