import React, { FC } from 'react';
import styled from 'styled-components';

type Props = {
  title: string;
  href: string;
};

const Hyperlink: FC<Props> = ({ title, href }) => {
  return <a href={href}>{title}</a>;
};

export default Hyperlink;
