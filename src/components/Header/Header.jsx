import Container from 'components/Container/Container';
import React from 'react';
import { Wrapper } from './Header.styled';
import Logo from '../Logo/Logo';
export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo text={'AppCo'} />
      </Container>
    </Wrapper>
  );
}
