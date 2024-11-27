import styled from "styled-components";
import { device } from "../utils/global";

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

const Work = () => {
  const data = [
    {
      school: "OKBA Turizm",
      role: "Tercüman",
      date: "Haziran 2022 - Eylül 2022  /Haziran 2023 - Eylül 2023  ",
      title: "Tercüman Tur Rehberi",
      decription:
        "Memeleketimde bulunduğum yaz aylarında turizm sektöründe Arapça ve İngilizce tercümanlık yaptım.",
    },
    {
      school: "SistemPlus Yazılım Şirketi",
      role: "Yazılımcı",
      date: "Aralık 2023 -----",
      title: "Front-end (Website) Geliştiricisi",
      decription:
        "Üniversitede hazırlık sınıfımı tamamladıktan sonra profesyonel bir firmada kendimi geliştirmek ve içerik üretmek için başlayıp ve devam etmekte olduğum kurum. STK ların form, bağış ödemeleri ve diğer ihtiyaç duyulan geliştirmeleri yaparak kendimi geliştirmeye devam etmekteyim.",
    },
  ];
  return (
    <Wrap id="experience">
      <h3>Çalışma ve İş Deneyimlerim </h3>
      <p>
        Başlıklar halinde hayatım boyunca bilgi ,deneyim ve tecrübe kazandığım
        yerler ...
      </p>
      <WrapCard>
        {data.map((item, index) => {
          return (
            <Card key={index}>
              <div>
                <h3>{item.school}</h3>
                <h4>
                  {item.role}&nbsp;&nbsp;&nbsp;
                  <span>{item.date}</span>
                </h4>
              </div>
              <div>
                <h3>{item.title}</h3>
                <p>{item.decription}</p>
              </div>
            </Card>
          );
        })}
      </WrapCard>
    </Wrap>
  );
};

export default Work;
