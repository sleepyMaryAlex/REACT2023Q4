import styled, { keyframes } from 'styled-components';
import { COLORS } from '../constants/constants';

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  z-index: 5000;
  top: 0;
  left: 0;
  text-align: center;
  display: flex;
  align-items: center;
  background-color: ${COLORS.semitransparentColor};
`;

const Circles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

const Wrapper = styled.div`
  width: 200px;
  height: 200px;
`;

const Circle = styled.div`
  border: 2px solid ${COLORS.blueBgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    background: ${COLORS.blueBgColor};
    top: -6px;
    border-radius: 50%;
    box-shadow: 0 0 10px 6px ${COLORS.blueBgColor};
  }
`;

const LargeCircle = styled(Circle)`
  width: 200px;
  height: 200px;
  animation: ${rotate} 3.1s linear infinite;
`;

const MiddleCircle = styled(Circle)`
  width: 150px;
  height: 150px;
  animation: ${rotate} 3s linear infinite;

  &::before {
    width: 10px;
    height: 10px;
  }
`;

const SmallCircle = styled(Circle)`
  width: 100px;
  height: 100px;
  animation: ${rotate} 2.5s linear infinite;

  &::before {
    width: 10px;
    height: 10px;
  }
`;

export default function Loader() {
  return (
    <Overlay>
      <Circles>
        <Wrapper>
          <LargeCircle>
            <MiddleCircle>
              <SmallCircle></SmallCircle>
            </MiddleCircle>
          </LargeCircle>
        </Wrapper>
      </Circles>
    </Overlay>
  );
}
