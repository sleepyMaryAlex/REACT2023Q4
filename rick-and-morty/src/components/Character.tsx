import styled, { css } from 'styled-components';
import { Component } from 'react';
import { ICharacter } from '../types/character.type';
import { COLORS } from '../constants/constants';

const Box = styled.div`
  width: 550px;
  height: 225px;
  background-color: ${COLORS.darkBgColor};
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: ${COLORS.darkBgColor} 0 20px 30px -10px;
  transition: box-shadow 0.5s;

  &:hover {
    box-shadow: ${COLORS.darkBgColor} 0 20px 90px -20px,
      ${COLORS.darkBgColor} 0 30px 30px -30px;
  }
`;

const Image = styled.img`
  width: 220px;
`;

const Info = styled.div`
  padding: 20px;
  color: ${COLORS.lightColor};
  overflow: hidden;
`;

const Name = styled.h3`
  margin-bottom: 5px;
  letter-spacing: 1.5px;
  font-size: 25px;
  font-weight: 600;
  font-family: 'Paytone One', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Description = styled.div`
  margin-bottom: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  display: flex;
  gap: 5px;
`;

const Container = styled.div`
  margin-bottom: 16px;
`;

const Caption = styled.h4`
  color: ${COLORS.paleColor};
  margin-bottom: 5px;
`;

const Paragraph = styled.p`
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Circle = styled.div<{ $status: string }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin: 3px 7px 3px 0;
  ${(props) => {
    switch (props.$status.toLowerCase()) {
      case 'alive':
        return css`
          background-color: ${COLORS.aliveColor};
        `;
      case 'dead':
        return css`
          background-color: ${COLORS.deadColor};
        `;
      default:
        return css`
          background-color: ${COLORS.unknownColor};
        `;
    }
  }}
`;

export default class Character extends Component<{
  character: ICharacter;
}> {
  render() {
    const { name, image, status, species, location, origin } =
      this.props.character;
    return (
      <Box>
        <Image src={image} alt="image" />
        <Info>
          <Name>{name}</Name>
          <Description>
            <Circle $status={status}></Circle>
            <Paragraph>{status}</Paragraph>
            <span>-</span>
            <Paragraph>{species}</Paragraph>
          </Description>
          <Container>
            <Caption>First seen in:</Caption>
            <Paragraph>{origin.name}</Paragraph>
          </Container>
          <Container>
            <Caption>Last known location:</Caption>
            <Paragraph>{location.name}</Paragraph>
          </Container>
        </Info>
      </Box>
    );
  }
}
