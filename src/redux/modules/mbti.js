// Actions
const UPDATE = 'mbti/UPDATE';
const CREATE = 'mbti/CREATE';

const initialState = {
  map: ['E', 'I', 'S', 'N', 'F', 'T', 'J', 'P'].reduce((map, key) => {
    map.set(key, 0);
    return map;
  }, new Map()),
};

// Action Creators
export function updateCount(key) {
  return { type: UPDATE, key };
}
export function createResult() {
  return { type: CREATE };
}

// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case 'mbti/UPDATE': {
      const newMap = state.map.set(action.key, +state.map.get(action.key) + 1);
      console.log(newMap);
      return { map: newMap };
    }
    case 'mbti/CREATE': {
      let mbti = '';
      for (let [key, val] of state.map) {
        if (val >= 2) {
          mbti += key;
        }
      }
      return { map: [...state.map], result: mbti };
    }
    default:
      return state;
  }
}
