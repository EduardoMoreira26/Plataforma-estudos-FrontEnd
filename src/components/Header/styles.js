import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 0;
  background: var(--color-white);
  color: var(--color-title);
`;

export const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


export const Logo = styled.div`
  font-weight: 700;

  h2 {
    font-weight: bold;
  }

  span {
    color: #616262;
  }
`;

export const Nav = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;

  font-weight: bold;

  li {
    padding: 0 40px 0 0;
    
  }

  a {
    text-decoration: none;
    color: #616262;
    transition: all ease 0.3s;

    &:hover {
      color: var(--color-secundary);
      }
    

    button {
      background: var(--color-secundary);
      height: 50px;
      min-width: 150px;
      border: none;
      border-radius: 5px;
      color: #eee;
      font-weight: bold;
      position: relative;
      transition:  0.3s;
      -webkit-tap-highlight-color: transparent;

      &:hover {
      background: var(--color-secundary-light);
      }
    }
  }
`;