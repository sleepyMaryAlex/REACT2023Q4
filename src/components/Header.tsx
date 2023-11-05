import styled from 'styled-components';
import { COLORS } from '../constants/constants';
import { ReactNode } from 'react';

const StyledHeader = styled.header`
  min-height: 360px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: ${COLORS.darkColor};
  padding: 20px;
`;

const Title = styled.h1`
  color: ${COLORS.lightColor};
  font-family: 'Paytone One', sans-serif;
  font-size: 65px;
  letter-spacing: 2px;
`;

export default function Header({ children }: { children: ReactNode }) {
  return (
    <StyledHeader>
      <Title>Animals</Title>
      {children}
    </StyledHeader>
  );
}
