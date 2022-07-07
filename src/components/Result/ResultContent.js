import React from 'react';
import styled from 'styled-components';

const ResultContent = () => {
  const RecommendArr = {
    imgAdd: `https://ccdn.lezhin.com/v2/comics/5791250995609600/images/tall.webp?updated=1618363369165&width=177`,
    title: `별과 하나의 시`,
    tag: ['#힐링물', '#잔잔물'],
  };
  return (
    <ResultContentWrap>
      <img src={RecommendArr.imgAdd} alt="추천 웹툰 이미지" />
      <TitleInfo>
        <Title>{RecommendArr.title}</Title>
        <TagList>
          {RecommendArr.tag.map((value) => (
            <li key={value}>{value}</li>
          ))}
        </TagList>
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
  p {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 10px;
  }
`;

const TagList = styled.ul`
  display: flex;
  gap: 10px;
  li {
    font-size: 15px;
  }
`;

const Title = styled.p`
  width: 145px;
  white-space: wrap;
`;

export default ResultContent;
