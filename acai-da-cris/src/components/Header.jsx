import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <h1>Açaí da Cris</h1>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/order">Fazer Pedido</Link>
        <Link to="/prices">Preços</Link>
      </nav>
    </header>
  );
}

export default Header;
