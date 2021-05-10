import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { selectMenuSection } from "../../actions";

const Wrapper = styled.div`
  width: 100%;
  height: 6rem;
  background-color: ${(props) => props.theme.colors.greyBackground};
`;

const NavList = styled.ul`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
  list-style: none;
`;

const NavItem = styled.li`
  font-size: 1.3rem;
  height: 100%;
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;
  border-bottom: ${(props) =>
    props.selcted ? ".5rem solid #FF2351" : ".5rem solid transparent"};
`;

const Navigation = (props) => {
  const onNavItemClick = (section) => {
    props.selectMenuSection(section);
  };

  useEffect(() => {
    props.selectMenuSection(props.section);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.section]);
  return (
    <Wrapper>
      <NavList>
        <NavItem
          selcted={props.section === "Categories"}
          onClick={() => onNavItemClick("Categories")}
        >
          Catégories
        </NavItem>
        <NavItem
          selcted={props.section === "Articles"}
          onClick={() => onNavItemClick("Articles")}
        >
          Articles
        </NavItem>
        <NavItem
          selcted={props.section === "Supplements"}
          onClick={() => onNavItemClick("Supplements")}
        >
          Suppléments
        </NavItem>
      </NavList>
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { section: state.menu.type };
};

export default connect(mapStateToProps, { selectMenuSection })(Navigation);
