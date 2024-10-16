"use client";
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from 'game/app/store/userSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }));
    };

    return (
		<Container>
			<Row className="p-3">
				<h5>Importante primer paso Login</h5>
				<h6>Email: user@example.com, clave: password</h6>
				<Col xs={4}>
				<form onSubmit={handleSubmit}>
					<Row className="p-2">
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						placeholder="Email"
						required
					/>
					</Row>
					<Row className="p-2">
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						placeholder="Password"
						required
					/>
					</Row>
					<Row className="p-2">
						<button type="submit">Login</button>
					</Row>
				</form>
				</Col>
			</Row>
		</Container>
    );
};

export default LoginForm;

