import React, { useRef } from 'react';
import { useParams, useNavigate, Navigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCheck } from '../redux/modules/mbtiqna';
import { updateCount, createResult } from '../redux/modules/mbti';
import styled from 'styled-components';

const MbtiTest = () => {
  const navigate = useNavigate();
  const qnaData = useSelector((state) => state.mbtiqna.list);
  const dispatch = useDispatch();
  const testIdx = useParams().id;
  const curTest = qnaData[testIdx];
  const checkCnt = useRef(1);
  checkCnt.current = qnaData.filter((v) => v.check).length;

  if (testIdx != 1 && checkCnt.current == 1) {
    return <Navigate to="/test/1" replace={true} />
  }

  const onClickAnswer = (ansIdx) => {
    let key = curTest.result[ansIdx];
    dispatch(updateCount(key));
    dispatch(updateCheck(testIdx));
    if (testIdx == 12) {
      dispatch(createResult());
      navigate('/result');
    } else {
      navigate(`/test/${parseInt(testIdx) + 1}`);
    }
  };

  return (
    <>
      <Question>
        <strong>Q{testIdx}.</strong>
        <em>{curTest.question}</em>
      </Question>

      <ProgressBar>
        <Highlight width={(checkCnt.current / 12) * 100 + '%'} />
      </ProgressBar>

      <Answer>
        <ul>
          {curTest.answer.map((v, i) => (
            <li key={i}>
              <button onClick={() => onClickAnswer(i)}>{v}</button>
            </li>
          ))}
        </ul>
      </Answer>
    </>
  );
};

export default MbtiTest;

const Question = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 130px 50px 220px;
  min-height: 70vh;
  background: #ed1c24;
  color: #fff;
  strong {
    margin-bottom: 20px;
    font-size: 50px;
  }
  em {
    display: block;
    width: 95%;
    height: 2em;
    font-size: 46px;
    @media only screen and (max-width: 768px) {
      font-size: 6vw;
    }
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 6px;
  margin-bottom: 15px;
  background: #dbdee3;
`;

const Highlight = styled.div`
  position: relative;
  width: ${(props) => props.width};
  height: 6px;
  background: #170512;
  transition: width 1s;
  &::after {
    content: '';
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 51px;
    height: 67px;
    background: url(/img/lzdang.png);
  }
`;

const Answer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  min-height: 23vh;
  padding: 0 30px;
  button {
    width: 100%;
    padding: 25px;
    margin-bottom: 15px;
    border-radius: 10px;
    background: #eff1f4;
    font-size: 22px;
    transition: background 0.2s ease-in;
    font-weight: 500;
  }
  @media only screen and (max-width: 550px) {
    padding: 0 20px;
    button {
      padding: 1em;
      margin-bottom: 2vh;
      font-size: 4vw;
    }
  }
`;
