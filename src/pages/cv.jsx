import styled from "styled-components";
import { device } from "../utils/global";
import Crumbs from "../components/bradCrumbs";
const Head = styled.div`
  text-align: center;
  padding: 3rem 0rem;
  > h2 {
    font-size: 48px;
  }
`;

const DownloadLink = styled.a`
  display: inline-block;
  margin-top: 1.5rem;
  padding: 0.75rem 2rem;
  background-color: #ffb400;
  color: #000;
  text-decoration: none;
  font-weight: 600;
  border-radius: 4px;
  transition: all 0.3s ease;
  &:hover {
    background-color: #e6a200;
    transform: translateY(-2px);
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
      school: "Hakkımda",
      role: "",
      date: "  ",
      title: "",
      decription: `	<p>&nbsp;&nbsp;&nbsp;2002 yılında Rize'de doğdum. İlkokul ve ortaokul eğitimimi Trabzon'da tamamladım. Lise eğitimime Proje İmam Hatip'te başladım ve bu dönemde Arapça dil eğitimi alarak dil becerilerimi geliştirdim.</p>
<p>&nbsp;&nbsp;&nbsp;COVID-19 pandemisi sürecinde açık liseye geçiş yaparak, Yükseköğretim Kurumları Sınavı'na (YKS) bireysel olarak hazırlandım ve eşit ağırlık dilimnde elde ettiğim netice ile İstinye Üniversitesi'nde Yönetim Bilişim Sistemleri bölümüne, %100 burslu olarak kabul edildim.</p>
<p>&nbsp;&nbsp;&nbsp;Üniversiteye başlamadan önce, Arapça dil becerim ile Trabzon ve Rize illerinde gayri resmi olarak tercümanlık hizmeti verdim, böylece dil ve iletişim becerilerimi pratikte pekiştirdim.</p>
<p>&nbsp;&nbsp;&nbsp;Üniversitenin ilk yılında, İngilizce dil eğitimimi tamamladım ve halen eğitimime devam etmekteyim.</p>
<p>&nbsp;&nbsp;&nbsp;2023-2024 eğitim yılı itibariyle, iş dünyasında yetkinlik kazanmanın ancak pratik deneyimle mümkün olduğunu bilerek, çevremdeki önerilerle birçok firmaya başvuru yaptım. Bu süreçte, <strong>SistemPlus</strong> firmasında yazılım geliştirme alanındaki kariyerime aktif olarak adım attım ve bu alandaki yolculuğuma devam etmekteyim.</p>

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
        <DownloadLink
          href="/cv/cv_abdulsametkazdal.pdf"
          download="cv_abdulsametkazdal.pdf"
        >
          CV İndir
        </DownloadLink>
      </Head>
      <Crumbs />
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
