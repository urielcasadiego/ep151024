export const fetchScores = async () => {
	const response = await fetch('/api/scores');
	return await response.json();
  };

  export const createScore = async (scoreData) => {
	const response = await fetch('/api/scores', {
	  method: 'POST',
	  headers: {
		'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(scoreData),
	});
	return await response.json();
  };
