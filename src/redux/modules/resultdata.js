// Actions
const UPDATE = 'resultdata/UPDATE';

// Action Creators
export function updateRecommned(rcData, rankData, isLoading) {
  return { type: UPDATE, rcData, rankData, isLoading };
}

// Reducer
export default function reducer(state = {}, action = {}) {
  switch (action.type) {
    case 'resultdata/UPDATE': {
      return {
        rcData: action.rcData,
        rankData: action.rankData,
        isLoading: action.isLoading,
      };
    }
    default:
      return state;
  }
}
