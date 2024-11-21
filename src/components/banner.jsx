import styled from "styled-components";
import { device, theme } from "../utils/global";

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
  > img {
    border-radius: 50%;
    width: 20rem;
    aspect-ratio: 15/16;
    object-fit: cover;
    box-shadow: rgba(0, 0, 0, 0.4) 3px 3px 6px, rgba(0, 0, 0, 0.4) -3px -3px 6px;
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
    text-shadow: 4px 4px 10px #8d8484;
  }
  &:active {
    transform: translateY(6px);
    box-shadow: ${theme.primary} 2px 2px 7px;
    text-shadow: 4px 4px 10px #d4cbcb;
    color: #fff;
  }
`;

const Banner = () => {
  return (
    <Wrap>
      <WrapDetail>
        <h1>
          I’m Rayan Adlrdard <span>Front-end</span> Developer
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat
          feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc
          lectus.
        </p>
        <Mybutton>İletişime Geç</Mybutton>
      </WrapDetail>
      <WrapPhoto>
        <img src="/images/myPhoto.jpg" />
      </WrapPhoto>
    </Wrap>
  );
};

export default Banner;
