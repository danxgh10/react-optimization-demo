import { BOARD_SIZE } from './GAME_CONFIG';

/**
 * Create an empty initial board state.
 */
 const createInitialBoardState = () => {
  const state = []

  for (let i = 0; i < BOARD_SIZE; i++) {
    const boardRow = Array(BOARD_SIZE).fill(false)
    state.push(boardRow)
  }

  return state
};

export default createInitialBoardState