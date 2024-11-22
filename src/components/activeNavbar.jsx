import styled, { keyframes } from "styled-components";

const bookends = keyframes`
    to {
        transform: none;
    }
`;

const Wrap = styled.div`
  position: fixed;
  right: 2rem;
  top: 0;
  transform: translateY(-100%);
  transition: all 3s;
  animation-name: ${bookends};
  animation-duration: 2s;
  animation-fill-mode: forwards;
  z-index: 3;
`;

const Column = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  box-shadow: rgb(66, 67, 69) 0px 20px 30px -10px;
  background-color: #fff;
  padding: 2.3rem 1rem;
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
`;

const ActiveNavbar = ({ children }) => {
  return (
    <Wrap>
      <Column>{children}</Column>
    </Wrap>
  );
};

export default ActiveNavbar;
