import { useNavigate, useRouteError } from 'react-router-dom';
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

const Button = styled.button`
  background-color: ${COLORS.darkBgColor};
  color: ${COLORS.lightColor};
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
`;

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

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
      <Button type="button" onClick={() => navigate('/')}>
        <p>Return to main page</p>
      </Button>
    </Wrapper>
  );
}
