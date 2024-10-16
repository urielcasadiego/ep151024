import { createSlice, createSelector } from '@reduxjs/toolkit';

const scoreSlice = createSlice({
  name: 'scores',
  initialState: {
    scores: [],
  },
  reducers: {
    addScore: (state, action) => {
      state.scores.push(action.payload);
    },
  },
});

export const selectUserScores = createSelector(
  (state) => state.scores.scores,
  (state, userEmail) => userEmail,
  (scores, userEmail) => scores.filter(score => score.user === userEmail)
);

export const { addScore } = scoreSlice.actions;
export default scoreSlice.reducer;
