import React from 'react';
import { useNavigate } from 'react-router-dom';

const Main = () => {
  const navigate = useNavigate();
  return (
    <div>
      <button onClick={() => navigate('/test/1')}>시작하기</button>
    </div>
  );
};

export default Main;
