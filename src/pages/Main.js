import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Typeit from 'typeit-react';

const Main = () => {
  const navigate = useNavigate();
  return (
    <>
      <Title>
        <Lezhin>
          <strong>LEZHIN</strong>
        </Lezhin>
        <h1>
        <TypeText>
          <em>폭발</em>💣이라는 것이
          <br />
          <em>&#39;추천&#39;</em> 한다..💥
        </TypeText>
        </h1>
      </Title>
      <Start>
        <StartBtn onClick={() => navigate('/test/1')}>
          테스트하고 웹툰 추천받기
        </StartBtn>
      </Start>
    </>
  );
};

export default Main;

const Lezhin = styled.div`
  margin-bottom: 1em;
  strong {
    padding: 5px 10px;
    background: #170512;
    color: #fff;
  }
`;

const TypeText = styled(Typeit)`
  line-height: 0.8em;
`;

const Title = styled.section`
  margin-top: 200px;
  text-align: center;
  font-size: 3vw;
  h1 {
    font-size: 77px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 23px;
    h1 {
      font-size: 10vw;
    }
  }
`;

const Start = styled.section`
  position: fixed;
  left: -20px;
  right: -20px;
  bottom: -12vh;
  height: 40vh;
  border-radius: 80px;
  background: #ed1c24;
  text-align: center;
  @media only screen and (max-width: 768px) {
    bottom: -8vh;
  }
`;

const StartBtn = styled.button`
  padding: 25px 45px;
  margin-top: 10vh;
  border-radius: 20px;
  background: #fff;
  font-size: 17px;
  font-weight: 700;
  transition: background 0.2s ease-in;
  &:hover {
    background: rgba(255, 255, 255, 0.9);
  }
`;
