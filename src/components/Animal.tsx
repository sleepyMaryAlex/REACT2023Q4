import styled from 'styled-components';
import { IAnimal } from '../types/animal.type';
import { COLORS } from '../constants/constants';
import koala from '../assets/images/koala.png';

const Box = styled.div`
  width: 280px;
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
  width: 100px;
  padding: 10px;
`;

const Name = styled.h3`
  margin-bottom: 5px;
  letter-spacing: 1.5px;
  font-weight: 500;
  font-family: 'Paytone One', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Info = styled.div`
  padding: 10px;
  color: ${COLORS.lightColor};
  overflow: hidden;
`;

const Description = styled.div`
  font-weight: 600;
  letter-spacing: 1px;
`;

const Paragraph = styled.p`
  text-transform: capitalize;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default function Animal({
  animal: { name, earthAnimal, earthInsect },
}: {
  animal: IAnimal;
}) {
  return (
    <Box>
      <Image src={koala} alt="koala" />
      <Info>
        <Name>{name}</Name>
        <Description>
          {earthAnimal && <Paragraph>Earth animal</Paragraph>}
          {earthInsect && <Paragraph>Earth insect</Paragraph>}
          {!earthAnimal && !earthInsect && (
            <Paragraph>No description</Paragraph>
          )}
        </Description>
      </Info>
    </Box>
  );
}
