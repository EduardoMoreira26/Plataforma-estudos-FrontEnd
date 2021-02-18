import styled from 'styled-components';


export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  height: 60vh;

`;

export const ContentText = styled.div`
  margin: 40px 0 0 0;
  height: 20vh;
  border-radius: 5px 5px 0 0;
  background: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;


export const Intro = styled.div`
  font-weight: bold;
  color: #616262;

  &:after {
    content: "";
    display: block;
    border: 0 solid #616262;
    width: 100px;
    height: 3px; 
    margin: 0 auto;
    margin-top: 30px;
    background: #616262;
  }
`;

export const Content = styled.div`
  margin: 1px 0 0 0;
  border-radius: 0 0 5px 5px;
  background: var(--color-white);
  padding: 10px 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

`;

export const Button = styled.a`
  width: 50%;
  height: 200px;
  background-color: #e3e4e3;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #616262;
  text-decoration: none;
  border: 0 solid #616262;
  border: 0 solid #616262;
  margin: 0 5px 0 5px;
  transition: border 0.3s;
  padding: 50px;
  
  span {
    font-size: 26px;
    margin-left: 20px;
    color: #000;
    font-weight: bold;
  }

  
  img {
    width: 100px;
    height: 100px;
    color: #616262;
  }

  &:hover {
    background: #616262;
  }

`;



