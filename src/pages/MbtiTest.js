import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { updateCheck } from '../redux/modules/mbtiqna';
import styled from 'styled-components';

const MbtiTest = () => {
  const navigate = useNavigate();
  const qnaData = useSelector((state) => state.mbtiqna.list);
  const dispatch = useDispatch();
  const testIdx = useParams().id;
  const curTest = qnaData[testIdx];

  const resultArr = ['E', 'I', 'S', 'N', 'F', 'T', 'J', 'P'];
  const resultMap = resultArr.reduce((map, key) => {
    map.set(key, 0);
    return map;
  }, new Map());
  const [resMap, setResMap] = useState(resultMap);
  
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
              let result = curTest.result[i];
              setResMap(resMap.set(result, +resMap.get(result) + 1));
              dispatch(updateCheck(testIdx));
              console.log(resMap);
              let mbti = '';
              if (testIdx == 12) {
                for (let [key, val] of resMap) {
                  if (val >= 2) {
                    mbti += key;
                  }
                }
                console.log(mbti);
                // navigate('/result');
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
