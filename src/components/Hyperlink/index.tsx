import React, { FC } from 'react';

type Props = {
  title: string;
  href: string;
};

const Hyperlink: FC<Props> = ({ title, href }) => {
  return <a href={href}>{title}</a>;
};

export default Hyperlink;
