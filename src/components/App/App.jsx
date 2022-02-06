import React from 'react';
import { Wrapper, Main } from './App.styled';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Chart from '../Chart/Chart';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <Main>
      <Wrapper>
        <Header />
        <Filter />
        <Chart />
        <Footer />
      </Wrapper>
    </Main>
  );
}
