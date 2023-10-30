import styled from 'styled-components';
import icon from '../assets/icons/search-icon.svg';
import { Component, createRef } from 'react';
import { COLORS } from '../constants/constants';

const Form = styled.form`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: ${COLORS.lightColor};
  border-radius: 10px;
  width: 550px;
  height: 40px;
  border-bottom: 5px solid ${COLORS.primaryColor};
`;

const Label = styled.label`
  font-size: 26px;
  padding: 2px 0 0 10px;
  font-weight: 600;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  width: 300px;
  font-size: 20px;
  padding: 0 5px;
  background: transparent;
  font-family: inherit;
`;

export default class SearchBar extends Component<{
  query: string;
  handleSubmit: (query: string) => void;
}> {
  private textInput = createRef<HTMLInputElement>();

  handleSubmit = () => {
    if (this.textInput.current) {
      this.props.handleSubmit(this.textInput.current?.value.trim());
    }
  };

  render() {
    return (
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          this.handleSubmit();
        }}
      >
        <Label htmlFor="search-input">I want to find</Label>
        <Input
          type="text"
          id="search-input"
          autoFocus
          spellCheck="false"
          defaultValue={this.props.query}
          ref={this.textInput}
        />
        <Icon src={icon} alt="icon" onClick={this.handleSubmit} />
      </Form>
    );
  }
}
