import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import FirstSection from '../components/Result/FirstSection';
import SecondSection from '../components/Result/SecondSection';

const Result = () => {
  const result = useSelector((state) => state.mbti.result);
  const mbti = result ?? 'ISFP';

  const [RecommendArr, setRecommendArr] = useState({});
  const [rankArr, setRankArr] = useState();

  const resultData = (result) => {
    fetch(`/getData?name=${result}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRecommendArr({
          title: data.recommendRandomData.title,
          link: data.recommendRandomData.link,
          img: data.recommendRandomData.img,
          artist: data.recommendRandomData.artist,
        });
        setRankArr(data.rankData);
      });
  };
  const mbtiResultData = (mbti) => {
    switch (mbti) {
      case 'ISFP':
      case 'INTP':
      case 'INTJ':
      case 'ENTP':
        console.log('판타지');
        resultData('fantasy');
        break;
      case 'ENFJ':
      case 'ENTJ':
      case 'ESTP':
      case 'ISTP':
        console.log('소년만화');
        resultData('boys');
        break;
      case 'INFP':
      case 'ENFP':
      case 'ESFP':
      case 'ESFJ':
        console.log('일상툰');
        resultData('drama');
        break;
      case 'INFJ':
      case 'ISFJ':
      case 'ISTJ':
      case 'ESTJ':
        console.log('힐링툰');
        resultData('romance');
        break;
      default:
        console.log('올바르지 않은 정보');
        break;
    }
  };

  useEffect(() => {
    mbtiResultData(mbti);
  }, []);

  return (
    <ResultWrap>
      <SrOnly>테스트 결과페이지 입니다.</SrOnly>
      <FirstSection getData={RecommendArr} />
      <SecondSection rankData={rankArr} />
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
