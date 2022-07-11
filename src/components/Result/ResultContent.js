import React from 'react';
import styled from 'styled-components';

const ResultContent = () => {
  const lzURL = 'https://www.lezhin.com';
  const RecommendArr = {
    img: `https://ccdn.lezhin.com/v2/comics/5791250995609600/images/tall.webp?updated=1618363369165&width=177`,
    link: '/ko/comic/sparrow',
    title: `별과 하나의 시`,
    artist: '새별숯, 유나물',
  };
  return (
    <ResultContentWrap>
      <a href={`${lzURL}${RecommendArr.link}`}>
        <img src={RecommendArr.img} alt="추천 웹툰 이미지" />
      </a>
      <TitleInfo>
        <a href={`${lzURL}${RecommendArr.link}`}>
          <Title>{RecommendArr.title}</Title>
        </a>
        <Artist>{RecommendArr.artist}</Artist>
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
