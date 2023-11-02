import styled from 'styled-components';
import { Component, ReactNode } from 'react';
import { COLORS } from '../constants/constants';

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  background-color: ${COLORS.darkColor};
  padding: 20px;
`;

const Title = styled.h1`
  color: ${COLORS.lightColor};
  font-family: 'Paytone One', sans-serif;
  font-size: 65px;
  letter-spacing: 2px;
`;

export default class Header extends Component<{ children: ReactNode }> {
  render() {
    return (
      <StyledHeader>
        <Title>Animals</Title>
        {this.props.children}
      </StyledHeader>
    );
  }
}
