import React from 'react';
import Header from '../../components/Header';

import {
  Container,
  ContentText,
  Content,
  Intro,
} from './styles';



const Home = () => {

  return (
    <>
      <Header />
      <Container>
          <ContentText>
            <Intro>
              <h1>APRENDA ONLINE</h1>
              <p>CONECTANDO ALUNOS AOS SEUS SONHOS</p>
            </Intro>
          </ContentText>
          <Content></Content>
     </Container>
    </>
  )
}

export default Home;