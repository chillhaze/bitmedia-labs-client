import React from 'react';
import Container from 'components/Container/Container';
import Logo from '../Logo/Logo';
import { Wrapper } from './Header.styled';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo text={'AppCo'} />
      </Container>
    </Wrapper>
  );
}
