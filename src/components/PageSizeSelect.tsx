import styled from 'styled-components';
import { COLORS } from '../constants/constants';

const Box = styled.div`
  width: 200px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Label = styled.label`
  color: ${COLORS.lightColor};
`;

const Select = styled.select`
  width: 50px;
  padding: 10px;
  box-shadow: 0 0 4px ${COLORS.blueBgColor};
  border-radius: 10px;
  appearance: none;
  cursor: pointer;
  border: none;
  outline: none;
  transition: 0.3s ${COLORS.blueBgColor};

  &:hover {
    box-shadow: 0 0 7px ${COLORS.blueBgColor};
  }

  &:focus {
    box-shadow: 0 0 1px 3px ${COLORS.blueBgColor};
    outline: none;
  }
`;

export default function PageSizeSelect({
  pageSize,
  handlePageSizeChange,
}: {
  pageSize: number;
  handlePageSizeChange: (value: number) => void;
}) {
  return (
    <Box>
      <Label htmlFor="page-size">Page size:</Label>
      <Select
        id="page-size"
        value={pageSize}
        onChange={(e) => {
          handlePageSizeChange(Number(e.target.value));
        }}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </Select>
    </Box>
  );
}
