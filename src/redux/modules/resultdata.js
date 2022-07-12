// Actions
const UPDATE = 'resultdata/UPDATE';

// Action Creators
export function updateRecommned(data) {
  return { type: UPDATE, data };
}

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'resultdata/UPDATE': {
      return action.data;
    }
    default:
      return state;
  }
}
