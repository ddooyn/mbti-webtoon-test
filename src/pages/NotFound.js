import React from 'react';
import styled from 'styled-components';

import Button from '../components/Button/Button';

const NotFound = () => {
  return (
    <Wrapper>
      <strong>404</strong>
      <em>페이지가 존재하지 않습니다.</em>
      <Button
        text={'폭발적으로 메인으로 가기'}
        backcolor={'none'}
        color={'#fff'}
        goto={'/'}
        opacity={'rgba(255, 255, 255, 0.05)'}
      />
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
    margin-bottom: 30px;
  }
`;
