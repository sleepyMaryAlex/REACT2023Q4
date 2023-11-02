import styled from 'styled-components';
import { COLORS } from '../constants/constants';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.redBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function ErrorFallback() {
  return (
    <Wrapper>
      <h2>Something went wrong</h2>
    </Wrapper>
  );
}
