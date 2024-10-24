let score = 0;

const addScore = (points) => {
  return score += points;
};

const getScore = () => score;

export { addScore, getScore };
