import React from 'react';
import styled from 'styled-components';
import FirstSection from '../components/Result/FirstSection';
import SecondSection from '../components/Result/SecondSection';

const Result = () => {
  return (
    <ResultWrap>
      <SrOnly>테스트 결과페이지 입니다.</SrOnly>
      <FirstSection />
      <SecondSection />
    </ResultWrap>
  );
};

const ResultWrap = styled.div`
  height: inherit;
  overflow-x: hidden;
`;

const SrOnly = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;

export default Result;
