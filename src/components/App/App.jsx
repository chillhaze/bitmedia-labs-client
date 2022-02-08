import React, { useEffect, Suspense } from 'react';
import { Wrapper, Main } from './App.styled';
import Header from '../Header/Header';
import Filter from '../Filter/Filter';
import Chart from '../Chart/Chart';
import Footer from '../Footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import * as transactionsOperations from '../../redux/transactions/transactions-operations';
import * as transactionsSelectors from '../../redux/transactions/transactions-selectors';
import LoaderElement from 'components/LoaderElement/LoaderElement';

export default function App() {
  const dispatch = useDispatch();
  const isLoadingData = useSelector(
    transactionsSelectors.isLoadingTransactions,
  );

  useEffect(() => {
    dispatch(transactionsOperations.getTransactions());
  }, [dispatch]);

  return (
    <Main>
      <Wrapper>
        <Header />
        <Filter />
        {/* {isLoadingData ? (
          <LoaderElement type="TailSpin" height={26} width={26} />
        ) : (
          <Chart />
        )} */}
        <Chart />
        <Footer />
      </Wrapper>
    </Main>
  );
}
