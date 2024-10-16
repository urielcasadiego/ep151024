"use client";
import { useSelector, useDispatch } from 'react-redux';
import { selectUserScores } from '../store/scoreSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UserScores = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user);
  const userScores = useSelector(state => selectUserScores(state, user.email));

  console.log('User:', user);
  console.log('User Scores:', userScores);

  return (
    <Container className="p-3">
      <h2>Puntuaciones del usuario</h2>
      <ul>
        {userScores.map((score, index) => (
          <li key={index}>{score.gameName}: {score.score}</li>
        ))}
      </ul>
    </Container>
  );
};

export default UserScores;
