import styled from "styled-components";
import Row from "../components/row";

const Header = styled.header`
  width: 100%;
  height: 100px;
  background-color: #eee;
`;
const Footer = styled.footer`
  width: 100%;
  height: 100px;
  background-color: #eee;
`;

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* <Header>Header</Header> */}
      <Row>{children}</Row>
      {/* <Footer>Footer</Footer> */}
    </div>
  );
};

export default MainLayout;
