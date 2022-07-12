import React from 'react';
import styled from 'styled-components';
import RankList from './RankList';
import { BsMouse, BsChevronDown } from 'react-icons/bs';

const SecondSection = () => {
  return (
    <OtherSection>
      <OtherPopularText>다른 인기작품 보기</OtherPopularText>
      <IconWrap>
        <BsMouse />
        <BsChevronDown />
      </IconWrap>
      <RankList />
    </OtherSection>
  );
};

const OtherSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const OtherPopularText = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;

const IconWrap = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 50px;
  color: #ed1c24;
`;

export default SecondSection;
