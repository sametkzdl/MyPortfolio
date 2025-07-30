import styled from "styled-components";
import { ProjectCard } from "../components/apps";
import { useNavigate } from "react-router-dom";
import projects from "../locale/projects.json";
import Crumbs from "../components/bradCrumbs";

const WrapContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 0rem 1.5rem 3rem 1.5rem;
  gap: 30px;
  > div:hover {
    box-shadow: 3px 3px 15px rgb(236, 167, 0, 0.7),
      -3px -3px 15px rgb(236, 167, 0, 0.5);
    scale: 1.03;
  }
`;

const Head = styled.div`
  text-align: center;
  padding: 3rem 0rem;
  > h2 {
    font-size: 48px;
  }
`;

const Projects = () => {
  const navigate = useNavigate();
  return (
    <>
      <Head>
        <h2>Projeler</h2>
        <p>
          Yazılım serüvenim boyunca yaptığım projeler, geliştirme süreçlerinde
          kullanılan teknolojiler ve detayları ile beraber sıralanmaktadır.
        </p>
      </Head>
      <Crumbs />
      <WrapContent>
        {projects.map((item, index) => {
          return (
            <ProjectCard
              key={index}
              onClick={() => {
                navigate(`/projects/${index}`), window.scrollTo(0, 0);
              }}
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
      </WrapContent>
    </>
  );
};
export default Projects;
