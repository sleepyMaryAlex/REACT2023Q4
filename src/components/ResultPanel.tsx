import styled from 'styled-components';
import { Component } from 'react';
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

export default class ResultPanel extends Component<{
  totalPages: number;
  totalElements: number;
}> {
  render() {
    const { totalPages, totalElements } = this.props;
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
}
