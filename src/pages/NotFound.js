import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <strong>404</strong>
      <em>페이지가 존재하지 않습니다.</em>
      <button onClick={() => navigate('/')}>폭발적으로 메인으로 가기</button>
    </Wrapper>
  );
};

export default NotFound;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #170512;
  color: #fff;
  strong {
    font-size: 50px;
  }
  em {
    font-size: 22px;
  }
  button {
    padding: 25px 45px;
    margin-top: 30px;
    border: 1px solid #fff;
    border-radius: 20px;
    background: none;
    color: #fff;
    font-size: 17px;
    font-weight: 700;
    transition: background 0.2s ease-in;
    &:hover {
      background: rgba(255, 255, 255, 0.05);
    }
  }
`;
