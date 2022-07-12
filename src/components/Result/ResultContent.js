import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const ResultContent = () => {
  const lZ_URL = 'https://www.lezhin.com';
  const recData = useSelector((state) => state.resultdata);

  return (
    <ResultContentWrap>
      <a href={`${lZ_URL}${recData.link}`}>
        <img src={recData.img} alt="추천 웹툰 이미지" />
      </a>
      <TitleInfo>
        <a href={`${lZ_URL}${recData.link}`}>
          <Title>{recData.title}</Title>
        </a>
        <Artist>{recData.artist}</Artist>
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
