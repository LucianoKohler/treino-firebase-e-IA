import React from 'react';

const Welcome = ({ user }) => {
  return (
    <div>
      <h2>Bem-vindo, {user.displayName}!</h2>
      <p>Você está autenticado com sucesso.</p>
    </div>
  );
};

export default Welcome;