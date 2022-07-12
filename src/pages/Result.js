import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { updateRecommned } from '../redux/modules/resultdata';

import FirstSection from '../components/Result/FirstSection';
import SecondSection from '../components/Result/SecondSection';
import Button from '../components/Button/Button';

const Result = () => {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.mbti.result);
  const mbti = result ?? 'ISFP';

  const resultData = (result) => {
    fetch(`/getData?name=${result}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        dispatch(
          updateRecommned(data.recommendRandomData, data.rankData, true),
        );
      });
  };

  const mbtiResultData = (mbti) => {
    let genre = '';
    switch (mbti) {
      case 'ISFP':
      case 'INTP':
      case 'INTJ':
      case 'ENTP':
        genre = 'fantasy';
        break;
      case 'ENFJ':
      case 'ENTJ':
      case 'ESTP':
      case 'ISTP':
        genre = 'boys';
        break;
      case 'INFP':
      case 'ENFP':
      case 'ESFP':
      case 'ESFJ':
        genre = 'drama';
        break;
      case 'INFJ':
      case 'ISFJ':
      case 'ISTJ':
      case 'ESTJ':
        genre = 'romance';
        break;
      default:
        console.log('올바르지 않은 정보');
        break;
    }
    resultData(genre);
  };

  useEffect(() => {
    mbtiResultData(mbti);
  }, []);

  return (
    <ResultWrap>
      <SrOnly>테스트 결과페이지 입니다.</SrOnly>
      <SectionWrap>
        <FirstSection />
        <SecondSection />
        <ButtonWrap>
          <Button
            text={'테스트 다시 하기'}
            backcolor={'#ed1c24'}
            color={'#fff'}
            goto={'/'}
            opacity={'rgba(237, 28, 36, 0.6)'}
          />
        </ButtonWrap>
      </SectionWrap>
    </ResultWrap>
  );
};

const ResultWrap = styled.div`
  height: inherit;
  background-color: #170512;
  overflow-x: hidden;
`;
const SectionWrap = styled.div`
  width: 390px;
  margin: 0 auto;
  overflow: hidden;
  background-color: #fff;
`;

const SrOnly = styled.h1`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 30px;
`;

export default Result;
