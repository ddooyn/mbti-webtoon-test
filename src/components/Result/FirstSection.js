import React from 'react';
import styled from 'styled-components';

const FirstSection = () => {
  return (
    <Section>
      <BackWrap>
        <TextWrap>
          <p>당신을 위한</p>
          <p>폭발적 추천</p>
        </TextWrap>
        <ResultContent>
          <img
            src="https://ccdn.lezhin.com/v2/comics/5791250995609600/images/tall.webp?updated=1618363369165&width=177"
            alt="추천 웹툰 이미지"
          />
          <TitleInfo>
            <p>별과 하나의 시</p>
            <TagList>
              <li>#힐링물</li>
              <li>#잔잔물</li>
            </TagList>
          </TitleInfo>
        </ResultContent>
      </BackWrap>
    </Section>
  );
};

const Section = styled.section`
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

const ResultContent = styled.div`
  position: absolute;
  left: 270px;
  top: 225px;
  display: flex;
  gap: 20px;
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

export default FirstSection;
