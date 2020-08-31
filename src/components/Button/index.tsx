import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  onClick: () => null;
};

const Button: FC<Props> = ({ title, onClick }) => {
  return (
    <button className="btn btn-primary btn-block" onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
