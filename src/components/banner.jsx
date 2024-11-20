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

const Mybutton = styled.button`
  display: inline-block;
  background-color: ${theme.primary};
  border-radius: 5px;
  padding: 16px 32px;
  cursor: pointer;
  font-weight: 500;
  border: none;
  transition: all 0.3s;
  &:hover {
    box-shadow: ${theme.hoverColor} 2px 2px 15px,
      ${theme.hoverColor} -2px -2px 5px;
    color: ${theme.hoverColor};
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
