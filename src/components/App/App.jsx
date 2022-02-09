import React from 'react';
import { Wrapper, Main, Container } from './App.styled';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Chart from '../Chart/Chart';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <Main>
      <Wrapper>
        <Header />
        <Container>
          <Filter />
          <Chart />
        </Container>
        <Footer />
      </Wrapper>
    </Main>
  );
}
