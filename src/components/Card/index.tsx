import React, { FC } from 'react';

type Props = {
  children: React.ReactNode;
};

const Card: FC<Props> = ({ children }) => {
  return (
    <div className="card">
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
