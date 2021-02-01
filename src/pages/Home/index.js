import React from 'react';
import Header from '../../components/Header';

import {
  Container,
  ContentText,
  Content,
  Intro,
  ButtonsContainer,
  Button
} from './styles';

import studyIcon from '../../assets/book.svg';
import teacherIcon from '../../assets/teacher.svg';

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
          <Content>

            <ButtonsContainer>
              <Button href="">
                <img src={studyIcon} alt="Estudar"/>
                <span>Estudar</span> 
              </Button>
              <Button href="">
                <img src={teacherIcon} alt="Dar Aulas"/>
                <span>Dar Aulas</span>
                
              </Button>
            </ButtonsContainer>

          </Content>
     </Container>
    </>
  )
}

export default Home;