import React, { useEffect } from 'react';
import { Wrapper, Main } from './App.styled';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Chart from '../Chart/Chart';
import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux';
import * as transactionsOperations from '../../redux/transactions/transactions-operations';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(transactionsOperations.getTransactions());
  }, [dispatch]);

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
