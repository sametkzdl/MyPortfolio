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
      font-size: 16px;
      font-weight: 400;
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

const Education = () => {
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
    <Wrap>
      <h3>Eğitim Hayatım </h3>
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
                  <span style={{ backgroundColor: "#ffb400", padding: " 6px" }}>
                    &nbsp;&nbsp;&nbsp;{item.date}
                  </span>
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

export default Education;
