import styled from 'styled-components';
import { COLORS } from '../constants/constants';

const Panel = styled.div`
  width: 550px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Title = styled.h3`
  font-size: 40px;
  color: ${COLORS.lightColor};
`;

export default function ResultPanel({
  totalPages,
  totalElements,
  pageNumber,
}: {
  totalPages: number;
  totalElements: number;
  pageNumber: number;
}) {
  return (
    <Panel>
      {totalPages ? (
        <>
          <Title>{totalElements} results</Title>
          <Title>
            page {pageNumber}/{totalPages}
          </Title>
        </>
      ) : (
        <Title>No results</Title>
      )}
    </Panel>
  );
}
