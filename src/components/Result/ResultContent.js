import React from 'react';
import styled, { keyframes } from 'styled-components';
import { useSelector } from 'react-redux';
import BounceLoader from 'react-spinners/BounceLoader';

const ResultContent = () => {
  const lZ_URL = 'https://www.lezhin.com';
  const recData = useSelector((state) => state.resultdata.rcData);
  let isLoading = useSelector((state) => state.resultdata.isLoading);

  return (
    <>
      {isLoading ? (
        <ResultContentWrap>
          <a href={`${lZ_URL}${recData?.link}`}>
            <img src={recData?.img} alt="추천 웹툰 이미지" />
          </a>
          <TitleInfo>
            <a href={`${lZ_URL}${recData?.link}`}>
              <Title>{recData?.title}</Title>
            </a>
            <Artist>{recData?.artist}</Artist>
          </TitleInfo>
        </ResultContentWrap>
      ) : (
        <LodingAnimWrap>
          <BounceLoader color="#fff" size={100} speedMultiplier={1.5} />
        </LodingAnimWrap>
      )}
    </>
  );
};

const FadeIn = keyframes`
  0%{
    opacity:0;
  }
  100%{
    opacity:1;
    }
`;

const ResultContentWrap = styled.div`
  position: absolute;
  left: 270px;
  top: 225px;
  display: flex;
  gap: 10px;
  transform: rotate(40deg);
  z-index: 20;
  animation: ${FadeIn} 500ms forwards;
  img {
    border-radius: 25px;
  }
`;

const LodingAnimWrap = styled.div`
  position: absolute;
  left: 400px;
  top: 280px;
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
