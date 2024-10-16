"use client";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectUserScores } from 'game/app/store/scoreSlice';

const ScoreList = ({ userId }) => {
    const userScores = useSelector(state => selectUserScores(state, userId));

    return (
		<Container className="p-3">
		<Row className="p-2">
			<ul>
				{userScores.map(score => (
					<li key={score.id}>{score.value}</li>
				))}
			</ul>
		</Row>
	</Container>
    );
};

export default ScoreList;


