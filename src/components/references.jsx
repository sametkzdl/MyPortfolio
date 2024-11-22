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

const WrapCompany = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: top;
  gap: 30px;
`;

const Company = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  padding: 2rem 1.5rem;
  text-align: center;
  width: min-content;
  background-color: #fff;
  a {
    display: inline-block;
    display: flex;
    align-items: center;
    width: 100%;
    aspect-ratio: 2;
    > img {
      max-width: 150px;
      height: auto;
    }
  }
  h4 {
    margin-inline: auto;
    font-size: 20px;
  }
`;

const References = () => {
  const data = [
    {
      imgSrc: "icons/sistemPlus.png",
      name: "Sistem Plus Yazılım Bilgi Teknolojileri San. ve Tic. A.Ş.",
      href: "https://sistem.plus/",
    },
    {
      imgSrc: "icons/hanımeli.png",
      name: "Hanımeli Yemek Hizmetleri Şirketi",
      href: "https://hanimeliportal.com/en/login",
    },
    {
      imgSrc: "icons/xAkademi.png",
      name: "X Akademi Koçluk Eğitim Platformu",
      href: "https://sametkzdl.github.io/CoachWebSite/",
    },
  ];
  return (
    <Wrap id="referencies">
      <h3>Referanslar </h3>
      <p>Hizmet verdiğim kurum ve kuruluşlar ...</p>
      <WrapCompany>
        {data.map((item, id) => {
          return (
            <Company key={id}>
              <a href={item.href}>
                <img alt={item.imgSrc} src={item.imgSrc} />
              </a>
              <h4>{item.name}</h4>
            </Company>
          );
        })}
      </WrapCompany>
    </Wrap>
  );
};

export default References;
