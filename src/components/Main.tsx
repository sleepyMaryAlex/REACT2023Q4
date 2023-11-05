import styled from 'styled-components';
import { ReactNode } from 'react';
import Loader from './Loader';

const StyledMain = styled.main`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export default function Main({
  children,
  isLoading,
}: {
  children: ReactNode;
  isLoading: boolean;
}) {
  return isLoading ? <Loader /> : <StyledMain>{children}</StyledMain>;
}
