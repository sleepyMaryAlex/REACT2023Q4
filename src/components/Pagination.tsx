import styled from 'styled-components';
import { COLORS } from '../constants/constants';
import { Dispatch, SetStateAction, useEffect } from 'react';

const Box = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  min-width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 5px;
  background-color: ${(props) =>
    props.disabled ? COLORS.paleColor : COLORS.lightColor};
  transition: background-color 0.5s;
  font-weight: 500;
`;

const ControlButton = styled(Button)`
  cursor: ${(props) => (props.disabled ? 'auto' : 'pointer')};

  &:hover:not(:disabled) {
    background-color: ${COLORS.blueBgColor};
  }
`;

export default function Pagination({
  pageNumber,
  totalPages,
  setPageNumber,
}: {
  pageNumber: number;
  totalPages: number;
  setPageNumber: Dispatch<SetStateAction<number>>;
}) {
  useEffect(() => {
    localStorage.setItem('pageNumber', String(pageNumber));
  }, [pageNumber]);

  return (
    <Box>
      <ControlButton
        type="button"
        onClick={() => setPageNumber(1)}
        disabled={pageNumber === 1}
      >
        &#60;&#60;
      </ControlButton>
      <ControlButton
        type="button"
        onClick={() => {
          if (pageNumber > 1) {
            setPageNumber(pageNumber - 1);
          }
        }}
        disabled={pageNumber === 1}
      >
        &#60;
      </ControlButton>
      <Button type="button">{pageNumber}</Button>
      <ControlButton
        type="button"
        onClick={() => {
          if (pageNumber < totalPages) {
            setPageNumber(pageNumber + 1);
          }
        }}
        disabled={pageNumber === totalPages}
      >
        &#62;
      </ControlButton>
      <ControlButton
        type="button"
        onClick={() => setPageNumber(totalPages)}
        disabled={pageNumber === totalPages}
      >
        &#62;&#62;
      </ControlButton>
    </Box>
  );
}
