import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  className: string;
};

const Headline: FC<Props> = ({ title, className }) => {
  return <h3 className={className}>{title}</h3>;
};

export default Headline;
