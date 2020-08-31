import React, { ReactNode, useState} from 'react';

type Props = {
  text: string,
  type: string,
  placeHolder: string,
  children: ReactNode
}

const Editable = ({ text, type, placeHolder, children}: Props) => {
  const [isEditing, setEditing] = useState<boolean>(false);

  return (
    <section>
      {isEditing ? (
        <div onBlur={() => setEditing(false)} >
          {children}
        </div>
      ) : (
        <div onClick={() => setEditing(true)} >
          <span>
            {text || placeHolder || "Editable content"}
          </span>
        </div>
      )}
    </section>
  );
};

export default Editable;