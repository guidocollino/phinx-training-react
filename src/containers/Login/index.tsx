import React, { FC } from 'react';
import styled from 'styled-components';
import Card from '../../components/Card';
import Headline from '../../components/Headline';
import Input from '../../components/Input';
import Hyperlink from '../../components/Hyperlink';
import Button from '../../components/Button';
import Checkbox from '../../components/Checkbox';

const Login: FC = () => {
  return (
    <ContainerStyled>
      <CardContainerStyled>
        <Card>
          <Headline className="text-center" title="Login" />
          <InputContainerStyled>
            <Input label="Email" type="email" placeHolder="Enter email" />
          </InputContainerStyled>
          <InputContainerStyled>
            <Input
              label="Password"
              type="password"
              placeHolder="Enter password"
            />
          </InputContainerStyled>
          <InputContainerStyled>
            <Checkbox label="Remember me" />
          </InputContainerStyled>

          <ButtonContainerStyled>
            <Button title="Save" onClick={() => null} />
          </ButtonContainerStyled>
          <HelpPasswordContainerStyled>
            <span>Forgot</span> <Hyperlink title="password?" href="#" />
          </HelpPasswordContainerStyled>
        </Card>
      </CardContainerStyled>
    </ContainerStyled>
  );
};

export default Login;

const ContainerStyled = styled.div`
  background: #33b5ff;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContainerStyled = styled.div`
  width: 30em;
  padding: 10px;
  .card {
    border-radius: 8px;
  }
`;

const InputContainerStyled = styled.div`
  margin: 30px 0px 30px 0px;
`;

const ButtonContainerStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const HelpPasswordContainerStyled = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px 0px 10px 0px;
  a {
    margin: 0px 0px 0px 5px;
  }
`;
