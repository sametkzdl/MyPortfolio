import styled from "styled-components";

const Wrap = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  right: 20px;
  max-width: 300px;
  padding: 0 2rem;
  box-shadow: 5px 5px 20px rgb(0, 0, 0, 0.5);
  background-color: #fff;
  z-index: 5;
  text-align: center;
  transition: all 0.3s;
  > div {
    padding-block: 20px;
  }
  > div:not(:last-child) {
    border-bottom: 2px solid #f0f0f6;
  }
`;

const WrapProfilePhoto = styled.div`
  margin: auto;
  > img {
    border-radius: 50%;
    width: 10rem;
    aspect-ratio: 15/16;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.4) 3px 3px 6px, rgba(0, 0, 0, 0.4) -3px -3px 6px;
  }
`;

const ProgressBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 7px;
  background-color: #fff;
  border: 1.5px solid #ffb400;
  border-radius: 15px;
  padding-inline: 2px;
  &::after {
    display: block;
    content: "";
    width: ${({ $width }) => $width && `${$width}%`};
    height: 3px;
    background-color: #ffb400;
    border-radius: 15px;
  }
`;

const Curtain = () => {
  const profileInfo = [
    { title: "Yaş", value: 22 },
    { title: "Şehir", value: "İstanbul" },
    { title: "Çalışma Durumu", value: "Aktif" },
  ];

  const values = {
    languages: [
      { title: "İngilizce", value: 60 },
      { title: "Arapça", value: 35 },
    ],
    skills: [
      { title: "HTML", value: 60 },
      { title: "CSS", value: 60 },
      { title: "JS", value: 55 },
      { title: "React", value: 50 },
    ],
    extraSkisls: [
      { title: "GitHub" },
      { title: "Styled Components" },
      { title: "Figma" },
    ],
  };
  return (
    <Wrap>
      <div>
        <WrapProfilePhoto>
          <img src={"images/myPhoto.jpg"} />
        </WrapProfilePhoto>
        <h3>Abdul Samet Kazdal</h3>
        <h4 style={{ fontWeight: "300", color: "#767676" }}>
          Front-end (Web site) Geliştiricisi
        </h4>
      </div>
      <div>
        {profileInfo.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h3
                style={{
                  backgroundColor: "#ffb400",
                  padding: "3px 5px",
                  marginBlock: "4px",
                }}
              >
                {item.title}:
              </h3>{" "}
              <span style={{ fontWeight: "500" }}>{item.value}</span>
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "left" }}>
        <h3 style={{ marginBottom: "0" }}>Dil</h3>
        {values.languages.map((item, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4 style={{ color: "#767676", marginBottom: "7px" }}>
                  {item.title}
                </h4>
                <span style={{ color: "#767676" }}>{item.value}%</span>
              </div>
              <ProgressBar $width={item.value} />
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "left" }}>
        <h3 style={{ marginBottom: "0" }}>Deneyim</h3>
        {values.skills.map((item, index) => {
          return (
            <div key={index}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h4 style={{ color: "#767676", marginBottom: "7px" }}>
                  {item.title}
                </h4>
                <span style={{ color: "#767676" }}>{item.value}%</span>
              </div>
              <ProgressBar $width={item.value} />
            </div>
          );
        })}
      </div>
      <div style={{ textAlign: "left" }}>
        <h3>İlaveler</h3>
        {values.extraSkisls.map((item, index) => {
          return (
            <div
              key={index}
              style={{
                display: "flex",
                gap: "20px",
                justifyContent: "left",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <img src="icons/skil.svg" alt="skil" width={15} height={15} />
              <h4 style={{ color: "#767676", margin: "0" }}>{item.title}</h4>
            </div>
          );
        })}
      </div>
    </Wrap>
  );
};

export default Curtain;
