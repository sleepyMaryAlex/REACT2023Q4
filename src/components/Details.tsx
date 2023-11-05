import { useOutletContext } from 'react-router-dom';
import styled from 'styled-components';
import icon from '../assets/icons/close-icon.svg';
import { ContextType } from '../types/context.type';
import { useNavigate } from 'react-router-dom';
import { COLORS } from '../constants/constants';

const Wrapper = styled.div`
  width: 100%;
  color: ${COLORS.lightColor};
  background-color: ${COLORS.darkBgColor};
  padding: 20px;
`;

const Name = styled.h3`
  padding: 20px 0;
  letter-spacing: 1.5px;
  font-weight: 500;
  font-family: 'Paytone One', sans-serif;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Paragraph = styled.p`
  color: ${COLORS.blueBgColor};
`;

const Span = styled.span`
  color: ${COLORS.lightColor};
  margin: 0 5px;
`;

const CloseIcon = styled.img`
  cursor: pointer;
  width: 20px;
  filter: brightness(0) saturate(100%) invert(100%) sepia(0%) saturate(7500%)
    hue-rotate(26deg) brightness(106%) contrast(105%);
`;

export default function Details() {
  const { details, setDetails } = useOutletContext<ContextType>();
  const navigate = useNavigate();

  return (
    <Wrapper>
      <CloseIcon
        src={icon}
        alt="close-icon"
        onClick={() => {
          setDetails(null);
          localStorage.removeItem('details');
          navigate('/');
        }}
      />
      <Name>{details?.name}</Name>
      <Box>
        <Paragraph>
          Earth animal:<Span>{details?.earthAnimal ? 'Yes' : 'No'}</Span>
        </Paragraph>
        <Paragraph>
          Earth insect:<Span>{details?.earthInsect ? 'Yes' : 'No'}</Span>
        </Paragraph>
        <Paragraph>
          Avian:<Span>{details?.avian ? 'Yes' : 'No'}</Span>
        </Paragraph>
        <Paragraph>
          Canine:<Span>{details?.canine ? 'Yes' : 'No'}</Span>
        </Paragraph>
        <Paragraph>
          Feline:<Span>{details?.feline ? 'Yes' : 'No'}</Span>
        </Paragraph>
      </Box>
    </Wrapper>
  );
}
