import styled from "styled-components";

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

const WrapCompany = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: top;
  gap: 30px;
`;

const Company = styled.div`
  padding: 1rem 2rem;
  text-align: center;
  width: min-content;
  background-color: #fff;
  > a {
    > img {
      max-width: 150px;
      height: auto;
    }
  }
  > h4 {
    margin-inline: auto;
    font-size: 20px;
  }
`;

const References = () => {
  const data = [
    {
      imgSrc: "public/icons/sistemPlus.png",
      name: "Sistem Plus Yazılım Bilgi Teknolojileri San. ve Tic. A.Ş.",
      href: "https://sistem.plus/",
    },
    {
      imgSrc: "public/icons/hanımeli.png",
      name: "Hanımeli Yemek Hizmetleri Şirketi",
      href: "https://hanimeliportal.com/en/login",
    },
    {
      imgSrc: "public/icons/xAkademi.png",
      name: "X Akademi Koçluk Eğitim Platformu",
      href: "https://sametkzdl.github.io/CoachWebSite/",
    },
  ];
  return (
    <Wrap>
      <h3>Referanslar </h3>
      <p>Hizmet verdiğim kurum ve kuruluşlar ...</p>
      <WrapCompany>
        {data.map((item) => {
          return (
            <Company>
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
