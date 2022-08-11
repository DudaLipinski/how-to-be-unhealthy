/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useLocation } from 'react-router';
import styled from "styled-components";
import topics from '../data/topics';
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

const Content = () => {
  const location = useLocation();
  const topic = location.pathname.slice(1);

  const currentTopic = topics.find(({ link }) => topic === link)

  const { title, link, text } = currentTopic;

  return (
    <>
      <section>
        <ContainerContent>
          <ContentItem id="topics">
            <div key={title} className={link}>
              <img className="img" src={img} />
              <p>{text}</p>
            </div>
          </ContentItem>
        </ContainerContent>
      </section>
    </>
  );
};

export default Content;
