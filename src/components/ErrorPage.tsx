import { useRouteError } from 'react-router-dom';
import styled from 'styled-components';
import { COLORS } from '../constants/constants';

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: ${COLORS.redBgColor};
`;

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <Wrapper>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {(error as Error)?.message ||
            (error as { statusText?: string })?.statusText}
        </i>
      </p>
    </Wrapper>
  );
}
