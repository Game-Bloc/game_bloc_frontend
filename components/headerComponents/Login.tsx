/* eslint-disable no-lone-blocks */
import { useState } from "react";
import { Button } from "../../styles/commonStyles/Button.styled";
import { Container } from "../../styles/commonStyles/Container.styles";
import { Paragraph } from "../../styles/commonStyles/Paragraph";
import { Wrapper } from "../../styles/commonStyles/Wrapper";
import LoginModal from "../Popup/LoginModal";
import React from "react";
interface Props {
  isSignedIn: any;
  wallet: any;
  gamebloc: any;
}

const Login = ({ isSignedIn, wallet, gamebloc }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const handleSignIn = () => {
    setOpenModal(true);
  };

  return (
    <Wrapper>
      <Container
        display="flex"
        flexDirection="row"
        smjustifycontent="none"
        justifyContent="space-between"
        alignItems="center"
      >
        <Paragraph
          display="block"
          smdisplay="none"
          color="#F6B8FC"
          fontWeight={500}
          width="10%"
          fontsize="1rem"
          cursor="pointer"
          onClick={handleSignIn}
        >
          Login
        </Paragraph>
        <Button
          backgroundColor="#F6B8FC"
          smfontsize=".8rem"
          width="fit-content"
          cursor="pointer"
          textColor="#01070E"
          xmdpadding=".3rem .4rem"
          padding=".8rem .6rem"
          border="none"
          borderRadius="9999px"
          smmargin=".4rem"
          margin=" 0 0 0 2rem"
          onClick={handleSignIn}
        >
          Create Account
        </Button>
      </Container>

      {openModal && <LoginModal modal={setOpenModal} wallet={wallet} />}
    </Wrapper>
  );
};

export default Login;
