import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useState } from 'react';
import { auth } from '../firebase/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      window.alert('Login efetuado com sucesso!')
    } catch (error) {
      window.alert('Erro ao efetuar login...')
    }
  };

  return (
    <div style={loginStyle}>
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Atualize o estado 'email' ao digitar no campo
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Atualize o estado 'password' ao digitar no campo
          />
        </Form.Group>
        <br />
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
        <br />
      <p style={{opacity: 0.15}}>Dica: Use faustocapivara@gmail.com e a senha faustoCapivara</p>
    </div>
  );
};

const loginStyle = {
  textAlign: 'center',
  maxWidth: '500px',
  margin: '0 auto',
  fontFamily: 'cursive', // Personalize a família da fonte conforme necessário
};

export default Login;