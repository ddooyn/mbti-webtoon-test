import React, { useState, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MbtiTest = () => {
  const qnaArr = [
    { check: true },
    {
      question: '혼자 여행을 떠난 당신, 숙소는 어떤 숙소로 정했을까?',
      answer: [
        '게스트 하우스에서 다른 사람 얘기도 들어보고, 재밌게 놀고 싶다.',
        '호텔에서 맘 편하게 누워서 쉬고 싶다.',
      ],
      result: ['E', 'I'],
      check: false,
    },
    {
      question: '시드머니가 생겨 주식을 시작했다. 어디 투자할까?',
      answer: [
        '누가봐도 안전하고 든든해보이는 A사!',
        '조만간 떡상할 것 같은 B사!',
      ],
      result: ['S', 'N'],
      check: false,
    },
    {
      question: '친구가 아는 지인에 대해 안 좋은 소문을 이야기했다.',
      answer: [
        '친구 말을 믿는다 걔가 그랬다니!!',
        '내가 겪지 않은 일이다. 크게 신경쓰지 않는다.',
      ],
      result: ['F', 'T'],
      check: false,
    },
    {
      question: '오늘은 상당히 센치한 날이다. 나는..',
      answer: [
        '집에서 맥주 한 잔하면서 영화라도 보자.',
        '야, 나와 한잔하게! 친구를 부른다.',
      ],
      result: ['I', 'E'],
      check: false,
    },
    {
      question: '회사 부사수가 업무를 물어본다.',
      answer: [
        '현재 상황에서 어떻게 해야하는지 알려 준다.',
        '다 알려주지 않고 힌트를 줘서 업무를 해결하게 한다.',
      ],
      result: ['S', 'N'],
      check: false,
    },
    {
      question: '친구가 면접에서 떨어졌다.',
      answer: [
        '일단 한잔해~! 마시고 털어내자!',
        '왜? 너무 긴장했나? 컨디션이 안 좋았어?',
      ],
      result: ['F', 'T'],
      check: false,
    },
    {
      question: '오늘은 데이트가 있다.',
      answer: [
        '어제 준비한 옷을 그대로 입고 나간다.',
        '오늘은 이게 더 이쁜데? 끌리는 옷을 입고 나간다.',
      ],
      result: ['J', 'P'],
      check: false,
    },
    {
      question:
        'A는 다같이 먹을 것을 챙겨왔는데, B는 혼자 먹을 것만 챙겨왔다. A가 섭섭함을 보인다. 그걸 본 나는?',
      answer: [
        '나 같아도 B는 나를 생각 안하나 싶어서 섭섭할거 같은데..',
        '섭섭할거까지 있나? 자기 먹고싶은 거 가져와서 먹는다는데… 미리 가져오기로 한 것도 아니고..',
      ],
      result: ['F', 'T'],
      check: false,
    },
    {
      question: '여행 중 계획 장소가 아닌 곳을 지나가게 됐다.',
      answer: [
        '궁금하니까 여기도 가보자!',
        '일정이 있는데.. 흐트러질 수도 있으니까 지나간다.',
      ],
      result: ['P', 'J'],
      check: false,
    },
    {
      question: '첫 회사에 출근 후 친구가 회사에 대해 물어본다.',
      answer: [
        '구체적으로 오늘 있었던 일을 말한다.',
        '전체적인 그날의 분위기를 묘사한다.',
      ],
      result: ['S', 'N'],
      check: false,
    },
    {
      question: '가기로 한 식당이 있는데 문이 닫혀있다.',
      answer: ['살짝 기분이 상했다..', '그럴 수도 있지. 별 생각 안든다.'],
      result: ['J', 'P'],
      check: false,
    },
    {
      question: '난 이미 나왔는데 친구와 약속이 취소됐다.',
      answer: [
        '마침! 혼자 하고 싶었던 걸 하다가 집으로 간다.',
        '바로 다른 친구들에게 연락을 돌려서 불러본다.',
      ],
      result: ['I', 'E'],
      check: false,
    },
  ];
  const [qna, setQna] = useState(qnaArr);

  const navigate = useNavigate();
  const testIdx = useParams().id;
  const curTest = qna[testIdx];

  const resultArr = [
    { key: 'E', val: 0 },
    { key: 'I', val: 0 },
    { key: 'S', val: 0 },
    { key: 'N', val: 0 },
    { key: 'F', val: 0 },
    { key: 'T', val: 0 },
    { key: 'J', val: 0 },
    { key: 'P', val: 0 },
  ];
  const resultMap = resultArr.reduce((map, obj) => {
    map.set(obj.key, obj.val);
    return map;
  }, new Map());
  const [resMap, setResMap] = useState(resultMap);

  const checkCnt = useRef(1);
  checkCnt.current = qna.filter((v) => v.check).length;
  // useEffect(() => {

  // }, [qna]);
  // console.log(checkCnt.current);

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
              let result = curTest.result[i]; // MBTI 값
              setResMap(resMap.set(result, +resMap.get(result) + 1));
              setQna(() => {
                qna[testIdx].check = true;
                return qna;
              });
              // console.log(qna);
              console.log(resMap);
              let mbti = '';
              if (testIdx == 12) {
                for (let [key, val] of resMap) {
                  if (val == 2) {
                    mbti += key;
                  }
                }
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
