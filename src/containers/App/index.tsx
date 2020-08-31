import React, { FC } from 'react';
import styled from 'styled-components';
import Login from '../../containers/Login';

const App: FC = () => {
  return (
    <LoginContainerStyled>
      <Login />
    </LoginContainerStyled>
  );
};

export default App;

const LoginContainerStyled = styled.div`
  width: 100%;
  background: #33b5ff;
  display: flex;
  align-items: center;
  justify-content: center;
`;
