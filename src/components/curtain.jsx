import { useState } from "react";
import styled, { keyframes } from "styled-components";
import { device, theme } from "../utils/global";

const RollOpen = keyframes`
to {
  transform: none;
}
`;

const RollClose = keyframes`
from {
  transform: translateY(0%);
}
to {
  transform: translateY(-95%);
}
`;

const Shake = keyframes`
  0%,100% {
    transform: translateY(-4px);
  } 70% {
    transform: translateY(4px);
  }
`;

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
  transform: translateY(-100%);
  animation: ${({ $click }) => ($click ? RollOpen : RollClose)} 3s forwards;
  > div:not(:last-child) {
    border-bottom: 2px solid #f0f0f6;
    padding-block: 20px;
  }
  @media ${device.tablet} {
    display: none;
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

const Arrow = styled.div`
  cursor: pointer;
  transform: translateY(50%);
  background-color: ${theme.primary};
  height: ${({ $click }) => ($click ? "70px" : "60px")};
  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  clip-path: ${({ $click }) =>
    $click
      ? "polygon(0 0, 100% 0, 100% 100%, 50% 65%, 0 100%)"
      : "polygon(0 0, 100% 0, 100% 50%, 51% 100%, 0 50%)"};
  img {
    transition: all 0.5s;
    animation-name: ${Shake};
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }

  &:hover {
    img {
      scale: 1.1;
      filter: drop-shadow(3px 3px 1rem #7378d2);
    }
  }
`;

const Curtain = ({ isOpen, setIsOpen }) => {
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
    <Wrap $click={isOpen}>
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
      <Arrow onClick={() => setIsOpen(!isOpen)} $click={isOpen}>
        {isOpen ? (
          <img
            $click={isOpen}
            width={50}
            height={50}
            alt="arrow-icon"
            src="icons/up-arrow.svg"
          />
        ) : (
          <img
            $click={isOpen}
            width={50}
            height={50}
            alt="arrow-icon"
            src="icons/down-arrow.svg"
          />
        )}
      </Arrow>
    </Wrap>
  );
};

export default Curtain;
