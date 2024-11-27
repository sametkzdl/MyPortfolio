import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrap = styled.div`
  padding: 3rem;
  display: flex;
`;

const Crumb = styled.span`
  font-size: 20px;
  font-weight: ${({ $active }) => ($active ? "600" : "300")};
  cursor: pointer;
`;

const Crumbs = () => {
  const data = [
    { href: "projects", title: "Projeler" },
    { href: "cv", title: "Özgeçmiş" },
  ];
  const location = useLocation();
  const navigate = useNavigate();
  return (
    <Wrap>
      <Crumb onClick={() => navigate("/")}>Ana sayfa</Crumb>&nbsp;&nbsp;&nbsp;
      {data.map(
        (item, i) =>
          item.href === location.pathname.slice(1) && (
            <div key={i}>
              &nbsp;/&nbsp;&nbsp;&nbsp;
              <Crumb $active={true}>{item.title}</Crumb>
            </div>
          )
      )}
    </Wrap>
  );
};

export default Crumbs;
