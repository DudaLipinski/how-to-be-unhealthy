import React from "react";
import styled from "styled-components";
import img from "../images/exercise.png";

const ContainerContent = styled.div`
  padding: 20px 0;
  max-width: 860px;
  margin-left: auto;
  margin-right: auto;

  animation: fade-in 1.2s ease-out;
`;

const ContentItem = styled.div`
  p {
    line-height: 22px;
    font-size: 14px;
    text-align: justify;
  }

  img {
    display: block;
    margin: 0 auto;
  }
`;

const Content = ({ topics }) => {
  return (
    <>
      <section>
        <ContainerContent>
          <ContentItem>
            {topics.map(({ title, ilustration, text }) => (
              <div key={title}>
                <img className="img" src={ilustration} />
                <img className="img" src={img} />
                <p>{text}</p>
              </div>
            ))}
          </ContentItem>
        </ContainerContent>
      </section>
    </>
  );
};

export default Content;
