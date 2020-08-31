import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  type: string;
  placeHolder: string;
};

const Input: FC<Props> = ({ label, type, placeHolder }) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type={type} className="form-control" placeholder={placeHolder} />
    </div>
  );
};

export default Input;
