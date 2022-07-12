import React from 'react';
import styled from 'styled-components';
import Typeit from 'typeit-react';

import Button from '../components/Button/Button';

const Main = () => {
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
        <Button
          text={'테스트하고 웹툰 추천받기'}
          backcolor={'#fff'}
          color={'#000'}
          goto={'/test/1'}
          opacity={'rgba(255, 255, 255, 0.9)'}
        />
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
  padding-top: 60px;
  height: 40vh;
  border-radius: 80px;
  background: #ed1c24;
  text-align: center;
  @media only screen and (max-width: 768px) {
    bottom: -8vh;
  }
`;
