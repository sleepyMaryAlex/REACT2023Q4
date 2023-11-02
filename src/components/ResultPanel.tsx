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
}: {
  totalPages: number;
  totalElements: number;
}) {
  return (
    <Panel>
      {totalElements ? (
        <>
          <Title>{totalElements} results</Title>
          <Title>page 1/{totalPages}</Title>
        </>
      ) : (
        <Title>No results</Title>
      )}
    </Panel>
  );
}
