import { Wrapper, Link } from './Logo.styled';

export default function Logo({ text }) {
  return (
    <Wrapper>
      <Link href="/">{text}</Link>
    </Wrapper>
  );
}
