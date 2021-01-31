import React from 'react';

import { 
  Container, 
  Content,
  Logo,
  Nav 
} from './styles';

const Header = () => {

  return (
    <Container>
      <Content>
        <Logo>
          <h2>AZIROM | Plataform</h2>
        </Logo>
        <Nav>
            <li><a href="">Sobre</a></li>
            <li><a href="">Nos Conheça</a></li>
            <a href=""><button>Entrar</button></a>
        </Nav>
      </Content>
    </Container>
  );
}

export default Header;