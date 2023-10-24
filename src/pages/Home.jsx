import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => {
  const contentStyle = {
    textAlign: 'center',
    fontFamily: 'cursive', // Você pode ajustar a família de fontes conforme desejado
  };

  return (
    <Container>
      <Row>
        <Col md={12} style={contentStyle}>
          <h1>Bem-vindo ao Meu Site</h1>
          <p>Este é um site de exemplo criado com React, React Router, e React Bootstrap.</p>
          <p>Exploração de componentes, navegação e design responsivo são os principais objetivos deste projeto.</p>
          <p>Esperamos que você aproveite a sua visita!</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
