import styled from 'styled-components';
import { Component, ReactNode } from 'react';

const StyledMain = styled.main`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export default class Main extends Component<{ children: ReactNode }> {
  render() {
    return <StyledMain>{this.props.children}</StyledMain>;
  }
}
