import styled, { keyframes } from "styled-components";
import { device } from "../utils/global";

const bookends = keyframes`
    to {
        transform: none;
    }
`;

const Wrap = styled.div`
  position: fixed;
  left: 0.5rem;
  top: 0;
  transform: translateY(-100%);
  transition: all 3s;
  animation-name: ${bookends};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  z-index: 3;
  @media ${device.tablet} {
    left: unset;
    right: 0.5rem;
  }
`;

const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  box-shadow: rgb(66, 67, 69) 0px 20px 30px -20px;
  background-color: #fff;
  padding: 2.3rem 1rem;
  opacity: 0.6;
  transition: all 0.3s;
  &::after {
    position: absolute;
    content: "";
    bottom: 0;
    height: 80px;
    transform: translateY(100%);
    width: 100%;
    background-color: #fff;
    clip-path: polygon(0 0, 51% 0, 100% 0, 100% 50%, 51% 0, 0% 50%);
  }
  &:hover {
    opacity: 1;
    box-shadow: rgb(66, 67, 69, 0.3) 5px 5px 10px,
      rgb(66, 67, 69, 0.4) -5px -5px 10px;
  }
`;

const ActiveNavbar = ({ children }) => {
  return (
    <Wrap>
      <Column>{children}</Column>
    </Wrap>
  );
};

export default ActiveNavbar;
