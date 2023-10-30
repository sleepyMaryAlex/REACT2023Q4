import styled from 'styled-components';
import { Component } from 'react';
import { COLORS } from '../constants/constants';

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.deadBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default class ErrorFallback extends Component {
  render() {
    return (
      <Wrapper>
        <h2>Something went wrong</h2>
      </Wrapper>
    );
  }
}
