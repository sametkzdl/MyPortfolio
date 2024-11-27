import styled from "styled-components";
import { device } from "../utils/global";
const Head = styled.div`
  text-align: center;
  padding: 3rem 0rem;
  > h2 {
    font-size: 48px;
  }
`;

const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 1.5rem;
  background-color: #fff;
  margin-bottom: 2rem;
`;

const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  > div {
    text-align: left;
    > h2 {
      font-size: 40px;
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

const CV = () => {
  const data = [
    {
      school: "Hakkında",
      role: "",
      date: "  ",
      title: "",
      decription: `	<p>&nbsp;&nbsp;&nbsp;2002 yılında Rize de doğdum. İlkokul ve ortaokul eğitimimi Trabzon da
aldım. Lise eğitimime Proje İmam Hatip te başladım ve ilk yılında Arapça dil eğitimi aldım.</p> 
<p>&nbsp;&nbsp;&nbsp;Corana Virus zamanında açık (düz) liseye geçerek YKS sınavına bireysel çalışarak 29.000 eşit ağırlık sıralaması ile İstinye
Üniversitesinde (İngilizce) Yönetim Bilişim Sistemleri bölümünü tam
burslu olarak kazandım.</p> 
	<p>&nbsp;&nbsp;&nbsp;Üniversiteye gelene kadar Arapça dilim ile
kendi bölgemde (Trabzon ve Rize) gayri resmi olarak tercümanlık
yaptım. </p>
	<p>&nbsp;&nbsp;&nbsp;Üniversitenin ilk yılında İngilizce dil eğitimi aldım ve eğitimim
100% İngilizce olarak devam etmektedir.</p> 
<p>&nbsp;&nbsp;&nbsp;
2023-2024 eğitim yılında kendi
bilgim ve etrafımdakilerin tavsiyeleri ile iş işte öğrenilmesi gerektiğini
bilerek çok sayıda firmaya başvurmaya çalıştım ve <strong>SistemPlus</strong> firmasında yazılım serüvenime faal olarak başladım ve devam etmekteyim.... 
	</p>
`,
    },
    {
      school: "Eğitim",
      role: "İstanbul",
      date: "Ekim 2022 -----",
      title: "",
      decription: `<h2>İstinye Üniversitesi Yönetim Bilişim Sistemleri (İngilizce)</h2>`,
    },
    {
      school: "Dil",
      role: "",
      date: "",
      title: "",
      decription: `<ul><li>Arapça</li><li>İnglizce</li></ul>`,
    },
    {
      school: "Hobiler",
      role: "",
      date: "",
      title: "",
      decription: `<ul><li>Yüzme</li><li>Fitness</li><li>Kitap Okuma</li></ul>`,
    },
  ];

  return (
    <>
      <Head>
        <h2>Özgeçmiş</h2>
      </Head>
      <WrapCard>
        {data.map((item, index) => {
          return (
            <Card key={index}>
              <div>
                <h2>{item.school}</h2>
                {item.role !== "" && (
                  <h4>
                    {item.role}&nbsp;&nbsp;&nbsp;
                    <span>{item.date}</span>
                  </h4>
                )}
              </div>
              <div>
                <h2 style={{ fontSize: "24px" }}>{item.title}</h2>
                <div
                  dangerouslySetInnerHTML={{ __html: item.decription }}
                ></div>
              </div>
            </Card>
          );
        })}
      </WrapCard>
    </>
  );
};

export default CV;
