import styled from "styled-components";
import { device, theme } from "../utils/global";
import { useNavigate } from "react-router-dom";
import { Mybutton } from "../components/banner.jsx";
import projects from "../locale/projects.json";

const Wrap = styled.div`
  width: 100%;
  padding-block: 6rem;
  text-align: center;
  > h3 {
    font-size: 32px;
    font-weight: bold;
    margin-block: 20px;
  }
  p {
    margin-bottom: 40px;
  }
`;

const WrapCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 3rem 1.5rem;
  gap: 30px;
  > div:hover {
    box-shadow: 3px 3px 15px rgb(236, 167, 0, 0.7),
      -3px -3px 15px rgb(236, 167, 0, 0.5);
    scale: 1.03;
  }
`;

export const ProjectCard = styled.div`
  width: 20rem;
  text-align: left;
  padding: 10px;
  transition: all 0.4s;
  border: 1px solid ${theme.primary};
  border-radius: 5px;
  overflow: hidden;
  background-color: #fff;
  cursor: pointer;
  img {
    transition: inherit;
    width: 100%;
    max-height: 150px;
    object-fit: contain;
  }
  div {
    padding: 10px;
  }
  @media ${device.mobileL} {
    width: 28rem;
  }
`;

const Apps = () => {
  const navigate = useNavigate();

  return (
    <Wrap id="apps">
      <h3>Geliştirdiğim Projeler </h3>
      <p>
        Kodlama ile ilgilenmeye başladığım günden bu yana bireysel veya ekip
        olarak geliştirdiğim ve geliştirmekte olduğum projeler...
      </p>
      <WrapCard>
        {projects.slice(0, 3).map((item, index) => {
          return (
            <ProjectCard
              key={index}
              onClick={() => navigate(`/projects/${index}`)}
            >
              <img src={item.images[0]} />
              <div>
                <h2>{item.name}</h2>
                <h4
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  {item.date}
                  <span style={{ backgroundColor: "#ffb400", padding: "5px" }}>
                    {item.category}
                  </span>
                </h4>
              </div>
            </ProjectCard>
          );
        })}
      </WrapCard>
      <Mybutton onClick={() => navigate("/projects")}>Tüm Projeler</Mybutton>
    </Wrap>
  );
};

export default Apps;
