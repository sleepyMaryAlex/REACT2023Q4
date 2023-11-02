import styled from 'styled-components';
import { ReactNode } from 'react';

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export default function Main({ children }: { children: ReactNode }) {
  return <StyledMain>{children}</StyledMain>;
}
