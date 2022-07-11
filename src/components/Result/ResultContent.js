import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const ResultContent = ({ getData }) => {
  ResultContent.propTypes = {
    getData: PropTypes.objectOf(PropTypes.string),
  };
  const lzURL = 'https://www.lezhin.com';

  return (
    <ResultContentWrap>
      <a href={`${lzURL}${getData.link}`}>
        <img src={getData.img} alt="추천 웹툰 이미지" />
      </a>
      <TitleInfo>
        <a href={`${lzURL}${getData.link}`}>
          <Title>{getData.title}</Title>
        </a>
        <Artist>{getData.artist}</Artist>
      </TitleInfo>
    </ResultContentWrap>
  );
};

const ResultContentWrap = styled.div`
  position: absolute;
  left: 270px;
  top: 225px;
  display: flex;
  gap: 10px;
  transform: rotate(40deg);
  z-index: 20;
  img {
    border-radius: 25px;
  }
`;

const TitleInfo = styled.div`
  color: #fff;
  font-weight: bold;
`;

const Artist = styled.p`
  font-size: 15px;
`;

const Title = styled.p`
  width: 145px;
  font-size: 25px;
  margin-bottom: 10px;
  white-space: wrap;
`;

export default ResultContent;
