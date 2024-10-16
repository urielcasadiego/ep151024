"use client";
import { useState } from "react";
import { useDispatch } from 'react-redux';
import { addScore } from '../store/scoreSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ScoreInput = () => {
  const [gameName, setGameName] = useState('');
  const [score, setScore] = useState('');
  const dispatch = useDispatch();

  const handleAddScore = async (e) => {
    e.preventDefault();
    const scoreData = { gameName, score: parseInt(score), user: 'user@example.com' };
    dispatch(addScore(scoreData));
    // Hacer un POST a la API
    await fetch('/api/scores', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(scoreData),
    });
    setGameName('');
    setScore('');
  };

  return (
	<Container>
		<Row className="p-3">
			<form onSubmit={handleAddScore}>
				<input
					type="text"
					value={gameName}
					onChange={(e) => setGameName(e.target.value)}
					placeholder="Nombre del Juego"
					required
				/>
				<input
					type="number"
					value={score}
					onChange={(e) => setScore(e.target.value)}
					placeholder="Puntaje"
					required
				/>
				<button type="submit">Adicionar</button>
			</form>
		</Row>
	</Container>

  );
};

export default ScoreInput;
