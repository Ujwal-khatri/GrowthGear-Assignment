import { SUBMIT_QUERY, QUERY_SUCCESS, QUERY_FAILURE } from './actions.jsx';

const initialState = {
  loading: false,
  result: null,
  error: null,
  history: [],
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBMIT_QUERY:
      return {
        ...state,
        loading: true,
        error: null,
        result: null,
        history: [...state.history, action.payload],
      };
    case QUERY_SUCCESS:
      return {
        ...state,
        loading: false,
        result: action.payload,
        error: null,
      };
    case QUERY_FAILURE:
      return {
        ...state,
        loading: false,
        result: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default queryReducer;
