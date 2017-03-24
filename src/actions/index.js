
export const ADD_TO_SCORE = 'ADD_TO_SCORE';

export function updateScore(points) {
  return {
    type: ADD_TO_SCORE,
    payload: points
  }
}
