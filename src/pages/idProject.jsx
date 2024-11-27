import { useParams } from "react-router-dom";
import { device } from "../utils/global.js";
import styled from "styled-components";
import projects from "../locale/projects.json";

const Wrap = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  text-align: center;
  min-height: 100vh;
`;

const Head = styled.div`
  padding: 3rem 0rem;
  > h3 {
    text-align: center;
    font-size: 36px;
    margin-block: 12px;
  }
`;

const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 1.5rem;
  background-color: #fff;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    text-align: left;
    > h3 {
      font-size: 18px;
      font-weight: 600;
    }
    > h4 {
      display: flex;
      flex-wrap: wrap;
      line-height: 28px;
      font-size: 16px;
      font-weight: 400;
      > span {
        background-color: #ffb400;
      }
    }
    > p {
      font-weight: 300;
    }
    &:first-child {
      width: 30%;
    }

    &:last-child {
      width: 60%;
    }
  }
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
    padding-bottom: 1.5rem;
  }
  @media ${device.mobileL} {
    > div {
      text-align: left;
      &:first-child {
        width: auto;
      }

      &:last-child {
        width: auto;
      }
    }
  }
`;

const WrapImages = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  img {
    width: 100%;
    height: auto;
    box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.4), -1px -1px 5px rgb(0, 0, 0, 0.4);
  }

  video {
    width: 100%;
    box-shadow: 1px 1px 5px rgb(0, 0, 0, 0.4), -1px -1px 5px rgb(0, 0, 0, 0.4);
  }
`;

const SingleProduct = () => {
  const params = useParams();
  const desiredProject = projects[params.id];

  return (
    <Wrap>
      <Head>
        <h3>Proje Detayı</h3>
      </Head>
      <WrapCard>
        <Card>
          <div>
            <h2>{desiredProject.name}</h2>
            <h4>
              Proje Tarihi:&nbsp;&nbsp;&nbsp;
              <span>{desiredProject.date}</span>
            </h4>
            <h3>Teknolojiler</h3>
            <ul>
              {desiredProject.technologies.map((li, index) => {
                return (
                  <li style={{ paddingBlock: "5px" }} key={index}>
                    {li}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2>Proje Hakkında</h2>
            <p>{desiredProject.description}</p>
            <WrapImages>
              <h3>Fotoğraflar</h3>
              {desiredProject.images.map((item, i) => {
                return <img src={`/public/${item}`} key={i} />;
              })}
            </WrapImages>
          </div>
        </Card>
        {desiredProject.gitHubLink && (
          <>
            <h3>GitHub Repository </h3>
            <a href={desiredProject.gitHubLink}>{desiredProject.gitHubLink}</a>
          </>
        )}
      </WrapCard>
    </Wrap>
  );
};

export default SingleProduct;
