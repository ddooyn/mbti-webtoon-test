import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ResultContent from './ResultContent';

const FirstSection = ({ getData }) => {
  FirstSection.propTypes = {
    getData: PropTypes.objectOf(PropTypes.string),
  };
  return (
    <RecommendSection>
      <BackWrap>
        <TextWrap>
          <p>당신을 위한</p>
          <p>폭발적 추천</p>
        </TextWrap>
        <ResultContent getData={getData} />
      </BackWrap>
    </RecommendSection>
  );
};

const RecommendSection = styled.section`
  height: inherit;
  margin-bottom: 100px;
`;

const BackWrap = styled.div`
  width: 1200px;
  height: 463px;

  position: relative;
  right: 352px;
  top: 190px;

  background-color: #ed1c24;
  transform: rotate(-40deg);
  z-index: 10;
`;

const TextWrap = styled.div`
  position: absolute;
  top: -78px;
  right: 309px;
  p:first-child {
    font-size: 65px;
  }
  p:last-child {
    font-size: 95px;
    color: #fff;
  }
  p {
    font-weight: bold;
    text-align: center;
  }
`;

export default FirstSection;
