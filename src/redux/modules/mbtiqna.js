// Actions
const UPDATE = 'mbtiqna/UPDATE';

const initialState = {
  list: [
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
      question: '친구가 좋아하는 노래를 추천해달라고 한다.',
      answer: [
        '멜로디가 좋은 노래를 추천했다!',
        '가사가 참 예쁜 노래를 추천했다!',
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
      question: '처음으로, 회사 부사수가 업무를 물어본다.',
      answer: [
        '현재 상황에서 어떻게 해야하는지 자세히 알려 준다.',
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
      question: '오늘은 데이트가 있다. 준비 중에 나는?',
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
        '섭섭할거까지 있나? 미리 가져오기로 한 것도 아니고..',
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
      question: '레시피를 보면서 요리를 하고 있다.',
      answer: [
        '정량에서 조금이라도 벗어나는 것은 용납하지 못한다.',
        '정량에서 대충 근사치라면 다음 단계로 넘어간다.',
      ],
      result: ['S', 'N'],
      check: false,
    },
    {
      question: '가기로 한 식당이 있는데 문이 닫혀있다.',
      answer: [
        '일부러 시간도 맞췄는데.. 살짝 기분이 상했다..',
        '에이 그럴 수도 있지. 별 생각 안든다.',
      ],
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
  ],
};

// Action Creators
export function updateCheck(index) {
  return { type: UPDATE, index };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'mbtiqna/UPDATE': {
      state.list[action.index].check = true;
      // index번째 질문 체크 여부를 false에서 true로 변경
      return { list: [...state.list] };
    }
    default:
      return state;
  }
}
