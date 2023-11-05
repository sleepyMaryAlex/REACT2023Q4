import styled from 'styled-components';
import { COLORS } from '../constants/constants';
import { useNavigate } from 'react-router-dom';
import { Dispatch, SetStateAction } from 'react';
import { IAnimal } from '../types/animal.type';

const Box = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  z-index: 4999;
  top: 0;
  left: 0;
  background: ${COLORS.semitransparentColor};
`;

export default function Overlay({
  setDetails,
}: {
  setDetails: Dispatch<SetStateAction<IAnimal | null>>;
}) {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => {
        setDetails(null);
        localStorage.removeItem('details');
        navigate('/');
      }}
    />
  );
}
