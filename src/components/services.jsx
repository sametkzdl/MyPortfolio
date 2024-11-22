import styled from "styled-components";

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
  justify-content: space-between;
  justify-content: center;
  gap: 40px;
`;

const Card = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
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
      imgSrc: "images/frontPanel.svg",
      decription: "E-ticaret, Kullanıcı ara yüzü",
    },
    {
      title: "E-ticaret / Web Admin Panel Geliştirme",
      imgSrc: "images/dashboard.svg",
      decription: "E-ticaret, Admin paneli",
    },
    {
      title: "WordPress",
      imgSrc: "images/wordPress.svg",
      decription: "WordPress site yapımı",
    },
    {
      title: "Blog Web Siteleri",
      imgSrc: "images/blogWebsite.svg",
      decription: "Kişiye özel site ",
    },
  ];
  return (
    <Wrap id="services">
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
