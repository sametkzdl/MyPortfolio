import Crumbs from "../components/bradCrumbs";
import styled from "styled-components";

const Head = styled.div`
  padding: 3rem 0rem;
  > h3 {
    text-align: center;
    font-size: 36px;
    margin-block: 12px;
  }
`;

const ErrorPage = () => {
  return (
    <div style={{ minHeight: "85vh" }}>
      <Head>
        <h3>Böyle bir sayfa bulunmamaktadır</h3>
      </Head>
      <Crumbs />
    </div>
  );
};

export default ErrorPage;
