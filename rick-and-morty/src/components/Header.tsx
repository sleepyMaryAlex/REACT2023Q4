import styled from 'styled-components';
import { Component, ReactNode } from 'react';
import { COLORS } from '../constants/constants';
import ErrorButton from './ErrorButton';

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
        <ErrorButton />
        <Title>Rick and Morty</Title>
        {this.props.children}
      </StyledHeader>
    );
  }
}
