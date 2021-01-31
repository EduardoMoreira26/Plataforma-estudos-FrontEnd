import React from 'react';
import Header from '../../components/Header';

import {
  Container,
  Intro
} from './styles';


const Home = () => {

  return (
    <>
      <Header />
      <Container>
        <Intro>
          <h1>Aprenda Online</h1>
          <p>Conectando alunos com os seus sonhos.</p>
        </Intro>
     </Container>
    </>
  )
}

export default Home;