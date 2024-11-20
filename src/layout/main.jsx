import styled from "styled-components";

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
      <Header>Header</Header>
      {children}
      <Footer>Footer</Footer>
    </div>
  );
};

export default MainLayout;
