import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ActiveNavbar from "../components/activeNavbar";
import Banner from "../components/banner";
import Contact from "../components/contact";
import Education from "../components/education";
import References from "../components/references";
import Services from "../components/services";
import Work from "../components/work";
import { theme } from "../utils/global";
import Curtain from "../components/curtain";
import Apps from "../components/apps";

const Logo = styled.img`
  border-radius: 50%;
  padding: 10px;
  transition: all 0.3s;
  &:hover {
    background-color: ${theme.primary};
  }
  background-color: ${({ $activeQuery }) =>
    $activeQuery ? `${theme.primary}` : "#f0f0f6"};
`;

const NavItem = styled.div`
  position: relative;
  transition: all 0.3s;
  overflow: hidden;
  &:hover {
    overflow: visible;
  }
  &:hover::before {
    height: 14px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
      rgba(0, 0, 0, 0.22) 0px 10px 10px;
  }
  &::before {
    content: "${({ $title }) => ($title ? $title : "")}";
    position: absolute;
    background-color: red;
    top: -25px;
    height: 0;
    right: -1rem;
    transition: all 0.3s;
    overflow: hidden;
    padding: 3px;
    background-color: #2b2b2b;
    color: #fff;
    border-radius: 2px;
    font-size: 12px;
    text-align: center;
  }
`;

const Home = () => {
  const wrapRef = useRef();
  const [activeIndex, setActiveIndex] = useState([]);
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768 ? true : false);

  const data = [
    {
      id: "banner",
      title: "Anasayfa",
      imgUrl: "icons/home.svg",
    },
    {
      id: "referencies",
      title: "Referanslar",
      imgUrl: "icons/referencies.svg",
    },
    {
      id: "services",
      title: " Hizmetler",
      imgUrl: "icons/work.svg",
    },
    {
      id: "education",
      title: " Eğitim",
      imgUrl: "icons/education.svg",
    },
    {
      id: "experience",
      title: "Deneyim",
      imgUrl: "icons/work.svg",
    },
    {
      id: "apps",
      title: "Projeler",
      imgUrl: "icons/apps.svg",
    },
    {
      id: "contact",
      title: "İletişim",
      imgUrl: "icons/contact.svg",
    },
  ];

  useEffect(() => {
    const scrollPadding = window.innerHeight / 4;
    const checkScrollHeight = () => {
      const currentScroll = Math.ceil(window.scrollY);
      if (wrapRef.current) {
        const children = wrapRef.current.children;
        data.forEach(({ id }, index) => {
          const el = children[id];
          if (
            el &&
            currentScroll >= el.offsetTop - scrollPadding &&
            currentScroll < el.offsetTop + el.offsetHeight
          ) {
            setActiveIndex(index);
          }
        });
      }
    };
    window.addEventListener("scroll", checkScrollHeight);
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, []);

  return (
    <div ref={wrapRef} style={{ position: "relative" }}>
      <Curtain isOpen={isOpen} setIsOpen={setIsOpen} />
      <ActiveNavbar>
        {data.map(({ id, title, imgUrl }, index) => {
          return (
            <NavItem $title={title} key={index}>
              <a href={`#${id}`}>
                <Logo
                  src={imgUrl}
                  width={20}
                  height={20}
                  $activeQuery={index == activeIndex}
                />
              </a>
            </NavItem>
          );
        })}
      </ActiveNavbar>
      <Banner isOpen={isOpen} />
      <References />
      <Services />
      <Education />
      <Work />
      <Apps />
      <Contact />
    </div>
  );
};

export default Home;
