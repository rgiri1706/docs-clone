import React from 'react';
import { Button } from 'antd';

type ModalProps = {
    title: string,
    handleLogin: () => void
}

const ModalComponent: React.FC<ModalProps> = ({title, handleLogin}: ModalProps) => {


  return (
    <>
      <Button type="primary" onClick={handleLogin}>
        {title}
      </Button>
    </>
  );
};

export default ModalComponent;