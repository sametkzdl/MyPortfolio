import styled from "styled-components";
import { device } from "../utils/global";

const Wrap = styled.div`
  width: 100%;
  margin-block: 4rem;
  text-align: center;
  > h3 {
    font-size: 32px;
    font-weight: bold;
  }
  > p {
    margin: 40px auto;
    width: 50%;
  }
`;

const WrapCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  justify-content: center;
  gap: 40px;
`;

const Card = styled.div`
  width: 20rem;
  background-color: #fff;
  padding: 3rem;
  text-align: center;
  > p {
    color: #767676;
  }
`;

const Services = () => {
  const data = [
    {
      title: "E-ticaret / Web Ön Yüz Geliştirme",
      imgSrc: "public/images/frontPanel.svg",
      decription: "E-ticaret, Kullanıcı ara yüzü",
    },
    {
      title: "E-ticaret / Web Admin Panel Geliştirme",
      imgSrc: "public/images/dashboard.svg",
      decription: "E-ticaret, Admin paneli",
    },
    {
      title: "WordPress",
      imgSrc: "public/images/wordPress.svg",
      decription: "WordPress site yapımı",
    },
    {
      title: "Blog Web Siteleri",
      imgSrc: "public/images/blogWebsite.svg",
      decription: "Kişiye özel site ",
    },
  ];
  return (
    <Wrap>
      <h3>Yardımcı Olabileceğim Yazılımlar </h3>
      <p>
        İstekleriniz doğrultusunda size yardımcı olabileceğim yazılım geliştirme
        platformları ...
      </p>
      <WrapCard>
        {data.map((item, index) => {
          return (
            <Card key={index}>
              <img width={75} height={75} src={item.imgSrc} />
              <h4>{item.title}</h4>
              <p>{item.decription}</p>
            </Card>
          );
        })}
      </WrapCard>
    </Wrap>
  );
};

export default Services;
