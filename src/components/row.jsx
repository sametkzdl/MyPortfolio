import styled from "styled-components";

const Wrap = styled.div`
  background-color: #f8f8ff;
  max-width: 1440px;
  padding-inline: 15px;
  margin-inline: auto;
`;
const Row = ({ children }) => {
  return <Wrap>{children}</Wrap>;
};

export default Row;
