import QuestionsReducer from './reducer_questions';
import { ADD_TO_SCORE } from '../actions/index';

const INITIAL_STATE = {
   questions: QuestionsReducer,
   score: 0
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_TO_SCORE:
      return {
        ...state,
        score: action.payload
      };
    
    default:
      return state;
  }
}
