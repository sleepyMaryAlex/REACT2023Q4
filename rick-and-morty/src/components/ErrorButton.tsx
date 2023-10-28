import styled from 'styled-components';
import { Component } from 'react';
import { COLORS } from '../constants/constants';

const Button = styled.button`
  width: 80px;
  height: 80px;
  background-color: ${COLORS.deadColor};
  border-radius: 50%;
  position: fixed;
  top: 50px;
  left: 50px;
  padding: 5px;
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.1);
  }
`;

export default class ErrorButton extends Component {
  state = {
    isError: false,
  };

  componentDidUpdate(): void {
    if (this.state.isError) {
      throw new Error('Test ErrorBoundary');
    }
  }

  render() {
    return (
      <>
        <Button
          type="button"
          onClick={() => {
            this.setState({ isError: true });
          }}
        >
          Throw error
        </Button>
      </>
    );
  }
}
