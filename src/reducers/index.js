import QuestionsReducer from './reducer_questions';

const INITIAL_STATE = {
   questions: QuestionsReducer
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {

    default:
      return state;
  }
}
