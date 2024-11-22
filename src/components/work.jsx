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
      school: "University of Toronto",
      role: "Student",
      date: "Haziran 2016 - Eylül 2018",
      title: "Certificate of web training",
      decription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    },
    {
      school: "University of Toronto",
      role: "Student",
      date: "Haziran 2016 - Eylül 2018",
      title: "Certificate of web training",
      decription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    },
    {
      school: "University of Toronto",
      role: "Student",
      date: "Haziran 2016 - Eylül 2018",
      title: "Certificate of web training",
      decription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
    },
    {
      school: "University of Toronto",
      role: "Student",
      date: "Haziran 2016 - Eylül 2018",
      title: "Certificate of web training",
      decription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet dapibus nibh ut faucibus nunc, egestas id amet porttitor. Pulvinar quisque sed amet, nulla nunc. Eleifend sodales posuere fusce tempus etiam et pellentesque. Molestie risus enim neque eget dui.",
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
