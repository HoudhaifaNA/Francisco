import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import styled from "styled-components";

import { deletMenuItem } from "../../actions";
import Icon from "../../components/Icon";

const Wrapper = styled.div`
  width: 100%;
  height: 5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

const SelectedItems = styled.h3`
  font-size: 1.6rem;
  margin-right: 2rem;
`;

const DeleteItemsSvg = styled.svg`
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
`;

const DeleteController = (props) => {
  const handleDelete = () => {
    props.toDeleteItems.forEach((it) => {
      props.deletMenuItem(it);
    });
  };
  const renderController = () => {
    if (props.toDeleteItems.length > 0) {
      console.log(props.toDeleteItems);
      return (
        <Wrapper>
          <SelectedItems>{props.toDeleteItems.length} selected</SelectedItems>
          <DeleteItemsSvg onClick={handleDelete}>
            <Icon icon="delete" />
          </DeleteItemsSvg>
        </Wrapper>
      );
    }
  };
  return <> {renderController()}</>;
};

const mapStateToProps = (state) => {
  return { toDeleteItems: _.values(state.menu.toDeleteItems) };
};

export default connect(mapStateToProps, { deletMenuItem })(DeleteController);
