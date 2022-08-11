import React from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";

const ContainerHeader = styled.div`
  padding: 50px 0 40px;
`;

const FirstTitle = styled.h1`
  margin: 0 0 10px 0;
  text-align: center;
  font-size: 20px;
`;

const SecondTitle = styled.h1`
  text-align: center;
  margin: 0;
`;

const ContainerNav = styled.nav`
  padding: 15px 0;

  #active {
    text-decoration: underline;
  }
`;

const ListLink = styled.ul`
  display: table;
  margin: 0 auto;
`;

const ItemLink = styled.li`
  float: left;
  list-style-type: none;
  padding: 0 30px 0 0;

  ::before {
    margin-right: -6px;

    border-width: 5px 8px;
    border-style: solid;
    border-color: transparent;
    border-left-color: black;

    content: "";
    display: inline-block;

    transition: transform 0.2s;
  }

  a {
    margin-left: 5px;
    color: black;
    text-decoration: none;
  }
`;

const Header = ({ links }) => {

  let linkItem = links.map(({ title, link }) => (
    <ItemLink key={title}>
      <Link to={link}>{title}</Link>
    </ItemLink>
  ));

  return (
    <>
      <ContainerHeader>
        <FirstTitle>a guide on how not to have a</FirstTitle>
        <SecondTitle>Healthy Lifestyle</SecondTitle>
      </ContainerHeader>
      <ContainerNav id="menu">
        <ListLink>{linkItem}</ListLink>
      </ContainerNav>
    </>
  );
};

export default Header;
