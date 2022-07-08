import React, { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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

  return (
    <>
      <strong>Q{testIdx}.</strong>
      <em>{curTest.question}</em>

      <ProgressBar>
        <Highlight width={(checkCnt.current / 12) * 100 + '%'} />
      </ProgressBar>

      <ul>
        {curTest.answer.map((v, i) => (
          <li
            key={i}
            onClick={() => {
              let key = curTest.result[i];
              dispatch(updateCount(key));
              dispatch(updateCheck(testIdx));
              if (testIdx == 12) {
                dispatch(createResult());
                navigate('/result');
              } else {
                navigate(`/test/${parseInt(testIdx) + 1}`);
              }
            }}
          >
            <button>{v}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MbtiTest;

const ProgressBar = styled.div`
  width: 370px;
  height: 6px;
  background: #dbdee3;
`;

const Highlight = styled.div`
  width: ${(props) => props.width};
  height: 6px;
  background: #170512;
  transition: width 1s;
`;
