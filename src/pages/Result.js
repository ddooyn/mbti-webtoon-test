import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import FirstSection from '../components/Result/FirstSection';
import SecondSection from '../components/Result/SecondSection';

const Result = () => {
  const result = useSelector((state) => state.mbti.result);
  const mbti = result ?? 'ISFP';
  console.log(mbti);

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
