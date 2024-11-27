import styled, { keyframes } from "styled-components";
import { device, theme } from "../utils/global";
import { useNavigate } from "react-router-dom";

const getPhoto = keyframes`
   to {
    transform: none;
    opacity: 1;
  }
`;

const Wrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 4rem;
  background-color: #fff;
  @media ${device.tablet} {
    flex-direction: column;
    gap: 30px;
  }
`;

const WrapDetail = styled.div`
  width: 50%;
  > h1 {
    font-size: 48px;
    > span {
      font-size: 48px;
      color: ${theme.primary};
    }
  }
  @media ${device.tablet} {
    width: 100%;
    order: 2;
  }
`;

const WrapPhoto = styled.div`
  margin: auto;
  img {
    border-radius: 50%;
    width: 20rem;
    aspect-ratio: 15/16;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.4) 3px 3px 6px, rgba(0, 0, 0, 0.4) -3px -3px 6px;
    animation-name: ${getPhoto};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    opacity: 0;
    transform: translateY(-100%);
  }
  @media ${device.tablet} {
    order: 1;
  }
`;

export const Mybutton = styled.button`
  position: relative;
  display: inline-block;
  background-color: ${theme.primary};
  padding: 16px 32px;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  border: none;
  transition: all 0.3s;
  &:hover {
    box-shadow: #605b5b 2px 2px 7px;
  }
  &:active {
    transform: translateY(6px);
    box-shadow: ${theme.primary} 2px 2px 7px;
    text-shadow: 4px 4px 10px #d4cbcb;
    color: #fff;
  }
`;

const Banner = ({ isOpen }) => {
  const navigate = useNavigate();
  return (
    <Wrap id="banner">
      <WrapDetail>
        <h1>
          Merhaba, ben Abdul Samet Kazdal <span>Front-end (Web Site)</span>{" "}
          Geliştiricisi
        </h1>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;2022 yılında başladığım İstinye Üniversitesi
          Yönetim Bilişim Sistemleri (İngilizce) bölümünde üniversite
          yolculuğuma başladım...
        </p>
        <Mybutton onClick={() => navigate("/cv")}>Özgeçmiş </Mybutton>
      </WrapDetail>
      <WrapPhoto>
        <div>
          <img
            $isOpen={isOpen}
            src={isOpen ? "/images/bgProfilePhoto.jpg" : "/images/myPhoto.jpg"}
          />
        </div>
      </WrapPhoto>
    </Wrap>
  );
};

export default Banner;
