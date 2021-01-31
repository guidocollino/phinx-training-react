import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
};

const Checkbox: FC<Props> = ({ label }) => {
  return (
    <CheckboxContainerStyled>
      <div className="form-group">
        <input className="form-check-input" type="checkbox" />
        <label className="form-check-label">{label}</label>
      </div>
    </CheckboxContainerStyled>
  );
};

export default Checkbox;

const CheckboxContainerStyled = styled.div`
  margin: 0px 0px 0px 20px;
`;
