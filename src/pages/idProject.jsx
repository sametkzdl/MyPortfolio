import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { device } from "../utils/global.js";
import styled from "styled-components";
import projects from "../locale/projects.json";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import Crumbs from "../components/bradCrumbs.jsx";

const Wrap = styled.div`
  width: 100%;
  padding-bottom: 2rem;
  text-align: center;
  min-height: 100vh;
`;

const Head = styled.div`
  padding: 3rem 0rem;
  > h3 {
    text-align: center;
    font-size: 36px;
    margin-block: 12px;
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
  @media ${device.tablet} {
    flex-direction: column;
    justify-content: center;
    > div {
      width: 100% !important;
    }
  }
`;

const WrapImages = styled.div`
  width: 100%;
`;

const StyledSwiper = styled(Swiper)`
  width: 80%;
  height: 520px;
  box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.4), -3px -3px 6px rgba(0, 0, 0, 0.4);
  padding: 10px;

  @media ${device.tablet} {
    width: 100%;
    height: 400px;
  }

  @media ${device.mobileL} {
    height: 300px;
    padding: 5px;
  }

  @media ${device.mobileM} {
    height: 250px;
  }
`;

const StyledSwiperSlide = styled(SwiperSlide)`
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    height: 380px;
  }

  @media ${device.mobileL} {
    height: 280px;
  }

  @media ${device.mobileM} {
    height: 230px;
  }
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const SingleProduct = () => {
  const params = useParams();
  const desiredProject = projects[params.id];
  const [spaceBetween, setSpaceBetween] = useState(50);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 425) {
        setSpaceBetween(20);
      } else if (window.innerWidth <= 768) {
        setSpaceBetween(30);
      } else {
        setSpaceBetween(50);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrap>
      <Head>
        <h3>Proje Detayı</h3>
      </Head>
      <Crumbs />
      <WrapCard>
        <Card>
          <div>
            <h2>{desiredProject.name}</h2>
            <h4>
              Proje Tarihi:&nbsp;&nbsp;&nbsp;
              <span>{desiredProject.date}</span>
            </h4>
            <h3>Teknolojiler</h3>
            <ul>
              {desiredProject.technologies.map((li, index) => {
                return (
                  <li style={{ paddingBlock: "5px" }} key={index}>
                    {li}
                  </li>
                );
              })}
            </ul>
          </div>
          <div>
            <h2>Proje Hakkında</h2>
            <p>{desiredProject.description}</p>
            <WrapImages>
              <h3>Fotoğraflar</h3>
              <StyledSwiper
                modules={[Pagination]}
                spaceBetween={spaceBetween}
                slidesPerView={1}
                pagination={{ clickable: true }}
              >
                {desiredProject.images.map((item, i) => {
                  return (
                    <StyledSwiperSlide key={i}>
                      <StyledImage
                        src={`${item}`}
                        alt={`Proje görseli ${i + 1}`}
                      />
                    </StyledSwiperSlide>
                  );
                })}
              </StyledSwiper>
            </WrapImages>
          </div>
        </Card>
        {desiredProject.gitHubLink && (
          <>
            <h3>GitHub Repository </h3>
            <a href={desiredProject.gitHubLink}>{desiredProject.gitHubLink}</a>
          </>
        )}
      </WrapCard>
    </Wrap>
  );
};

export default SingleProduct;
