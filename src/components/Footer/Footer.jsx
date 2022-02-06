import Container from 'components/Container/Container';
import Logo from 'components/Logo/Logo';
import React from 'react';
import { Wrapper, TextWrapper, AllRights, Copyright } from './Footer.styled';

export default function Footer() {
  return (
    <Wrapper>
      <Container>
        <TextWrapper>
          <Logo text={'AppCo'} />
          <AllRights>All rights reserved by ThemeTags</AllRights>
          <Copyright>Copyrights © 2019. </Copyright>
        </TextWrapper>
      </Container>
    </Wrapper>
  );
}
