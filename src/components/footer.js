import React from "react";
import styled from "styled-components";

const ContainerFooter = styled.footer``;

const ContainerNav = styled.nav`
  padding: 15px 0;
`;

const ListLink = styled.ul`
  display: table;
  margin: 0 auto;
`;

const ItemLink = styled.li`
  float: left;
  padding: 0 30px 0 0;
  list-style-type: none;

  a {
    margin-left: 5px;
    color: black;
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <>
      <ContainerFooter>
        <ContainerNav>
          <ListLink>
            <ItemLink>
              <a href="">About</a>
            </ItemLink>
          </ListLink>
        </ContainerNav>
      </ContainerFooter>
    </>
  );
};

export default Footer;
