import React from 'react';
import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import styled from 'styled-components';

const Main = styled.main`
  background-color: var(--black);
  color: var(--white);
  flex: 1;
  padding: 50px 5%;
`;

const Parent = props => {
  return(
    <>
      <Menu />
        <Main>
          {props.children}
        </Main>
      <Footer />
    </>
  );
}

export default Parent;