import { useRef } from "react";
import styled from "styled-components";
import { Mybutton } from "./banner";
import { theme } from "../utils/global";

const Wrap = styled.div`
  padding-bottom: 90px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 50px;
`;

const WrapForm = styled.form`
  display: grid;
  background-color: #fff;
  padding: 1rem 2rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

const WrapAdres = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Label = styled.label`
  font-size: 18px;
  font-weight: 500;
  color: #767676;
  margin-block: 10px;
  span {
    color: red;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  background-color: #f8f8ff;
  border: none;
  padding: 16px;
  font-size: 18px;
  font-weight: 300;
  transition: all 0.1s;
  &:hover {
    outline: 2px solid #4d7fff;
  }
  &:focus {
    outline: 2px solid ${theme.primary};
  }
`;

const Textarea = styled.textarea`
  resize: none;
  background-color: #f8f8ff;
  border: none;
  padding: 16px;
  font-size: 18px;
  font-weight: 300;
  &:hover {
    outline: 2px solid #4d7fff;
  }
  &:focus {
    outline: 2px solid ${theme.primary};
  }
`;

const Contact = () => {
  const inputRef = useRef();
  const dataSocialMedia = [
    {
      titleSrc: "icons/location.svg",
      subTitles: [
        { title: "Ülke", value: "Türkiye" },
        { title: "Şehir", value: "İstanbul" },
      ],
    },
    {
      titleSrc: "icons/mail.svg",
      subTitles: [
        {
          title: "Email",
          value: "sametkazdal_53@outlook.com",
          href: "mailto:sametkazdal_53@outlook.com",
        },
        {
          title: "Linkedln",
          value: "Abdul Samet Kazdal",
          href: "https://www.linkedin.com/in/abdul-samet-kazdal-761a4819a/",
        },
      ],
    },
    {
      titleSrc: "icons/mobile.svg",
      subTitles: [
        {
          title: "Telefon",
          value: "+90 0553 103 7293",
          href: "tel:+9005531037293",
        },
      ],
    },
  ];

  const handeleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const inputValues = Object.fromEntries(data);
    console.log(inputValues);
  };

  return (
    <Wrap id="contact">
      <div>
        <h3 style={{ fontSize: "32px" }}>İletişim Formu</h3>
        <WrapForm onSubmit={(e) => handeleSubmit(e)}>
          <Label htmlFor="name">
            İsim ve Soyisim<span>*</span>
          </Label>
          <Input ref={inputRef} id="name" name="name" required={true} />
          <Label htmlFor="email">
            Email<span>*</span>
          </Label>
          <Input ref={inputRef} id="email" name="email" required={true} />
          <Label htmlFor="subject">
            Konu (İçerik)<span>*</span>
          </Label>
          <Input ref={inputRef} id="subject" name="subject" required={true} />
          <Label htmlFor="message">
            Eklemek İstedikleriniz<span>*</span>
          </Label>
          <Textarea
            cols={40}
            rows={6}
            ref={inputRef}
            id="message"
            name="message"
            required={true}
          />
          <Mybutton style={{ marginTop: "20px" }} type="submit">
            Mesaj Gönder
          </Mybutton>
        </WrapForm>
      </div>
      <div>
        <h3 style={{ fontSize: "32px" }}>İletişim Bilgileri</h3>
        <WrapAdres>
          {dataSocialMedia.map(({ titleSrc, subTitles }, id) => {
            return (
              <div
                style={{
                  color: "#767676",
                  backgroundColor: "#fff",
                  textAlign: "center",
                  padding: "1rem 2rem",
                  boxShadow: "rgba(0, 0, 0, 0.16) 0px 1px 4px",
                }}
                key={id}
              >
                <div>
                  <img
                    style={{
                      backgroundColor: "#ffb400",
                      padding: "10px",
                      borderRadius: "50%",
                    }}
                    src={titleSrc}
                    width={22}
                    height={22}
                  />
                </div>
                {subTitles.map(({ title, value, href }, id) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "20px",
                      }}
                      key={id}
                    >
                      <h3>{title}:</h3>
                      {href ? (
                        <a href={href}>
                          <span>{value}</span>
                        </a>
                      ) : (
                        <span>{value}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </WrapAdres>
      </div>
    </Wrap>
  );
};

export default Contact;
