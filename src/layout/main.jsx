import styled from "styled-components";
import Row from "../components/row";

const Footer = styled.footer`
  width: 100%;
  padding-top: 20px;
  background-color: #fff;
  text-align: center;
  h2 {
    margin: 0;
  }
`;

const Logo = styled.img`
  aspect-ratio: 2;
  width: 200px;
`;

const MainLayout = ({ children }) => {
  return (
    <div>
      <Row>{children}</Row>
      <Footer>
        <h2>2024 Tüm hakları saklıdır.</h2>
        <div>
          <Logo src="/public/icons/myLogo.svg" alt="my-logo" />
        </div>
      </Footer>
    </div>
  );
};

export default MainLayout;
