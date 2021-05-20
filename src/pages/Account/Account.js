import React from "react";
import { connect } from "react-redux";
import styled, { keyframes } from "styled-components";

import { protectedRoutes } from "../../validators/securityValidaror";
import ErrorBar from "../../components/ErrorBar";
import AccountForm from "./AccountForm";

const showPage = keyframes`
 0% { opacity: 0; }
 100% {  opacity: 1; }
`;

const Wrapper = styled.div`
  width: 86vw;
  padding: 6rem 4rem;
  display: flex;
  justify-content: space-between;
  height: 100vh;
  animation: ${showPage} 0.2s ease-in forwards;
`;

const Account = () => {
  protectedRoutes();
  return (
    <Wrapper>
      <ErrorBar />
      <AccountForm
        type="newPassword"
        title="Change Password"
        placeholder={["New password", "Confirm new password"]}
      />
      <AccountForm
        type="newAccount"
        title="Nouveau Compte"
        placeholder={["Name", "Password"]}
      />
    </Wrapper>
  );
};

const mapStateToProps = (state) => {
  return { section: state.menu.type };
};

export default connect(mapStateToProps)(Account);
