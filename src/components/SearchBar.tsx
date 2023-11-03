import styled from 'styled-components';
import icon from '../assets/icons/search-icon.svg';
import { COLORS } from '../constants/constants';
import { useRef } from 'react';

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

export default function SearchBar({
  query,
  handleSubmit,
}: {
  query: string;
  handleSubmit: (value: string) => void;
}) {
  const textInput = useRef<HTMLInputElement>(null);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
        if (textInput.current) {
          handleSubmit(textInput.current?.value.trim());
        }
      }}
    >
      <Label htmlFor="search-input">I want to find</Label>
      <Input
        type="text"
        id="search-input"
        autoFocus
        spellCheck="false"
        defaultValue={query}
        ref={textInput}
      />
      <Icon
        src={icon}
        alt="icon"
        onClick={() => {
          if (textInput.current) {
            handleSubmit(textInput.current?.value.trim());
          }
        }}
      />
    </Form>
  );
}
