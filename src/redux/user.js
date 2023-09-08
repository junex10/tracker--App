import { SAVE_DATA, RETRIEVE_DATA } from './actions';

const initialState = {
  savedData: '',
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_DATA:
      return {
        ...state,
        savedData: action.payload,
      };
    case RETRIEVE_DATA:
      return state;
    default:
      return state;
  }
};

export default dataReducer;
  