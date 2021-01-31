import React, { FC } from 'react';

type Props = {
  title: string;
  className: string;
};

const Headline: FC<Props> = ({ title, className }) => <h3 className={className}>{title}</h3>;

export default Headline;
