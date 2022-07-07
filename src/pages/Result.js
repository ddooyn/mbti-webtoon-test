import React from 'react';
import styled from 'styled-components';
import FirstSection from '../components/Result/FirstSection';
import { BsMouse } from 'react-icons/bs';

const Result = () => {
  return (
    <ResultWrap>
      <SrOnly>테스트 결과페이지 입니다.</SrOnly>
      <FirstSection />
      <Section>
        <p>다른 인기작품 보기</p>
        <IconWrap>
          <BsMouse />
        </IconWrap>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
      </Section>
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

const Section = styled.section`
  display: flex;
  flex-direction: column;
  p {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
  }
`;

const IconWrap = styled.div`
  font-size: 50px;
  color: #ed1c24;
`;

export default Result;
