import { useState } from "react";
import { Button } from "../../styles/commonStyles/Button.styled";
import { Container } from "../../styles/commonStyles/Container.styles";
import { Paragraph } from "../../styles/commonStyles/Paragraph";
import { Text } from "../../styles/commonStyles/Text";
import LoginModal from "../Popup/LoginModal";
import React from "react";
import { Img } from "../../styles/commonStyles/Img";
import logo from "../../assets/images/gamelogo3.png";

interface Props {
  wallet: any;
}

export const Footer = ({ wallet }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  const handleSignIn = () => {
    setOpenModal(true);
  };

  return (
    <Container margin="8rem 0 0 0" display="flex" flexDirection="column">
      <Container
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
      >
        <Text
          className="heading2"
          color="#F6B8FC"
          fontWeight={400}
          textAlign="center"
          smfontSize="1.5rem"
          mdfontSize="2.5rem"
          fontsize="3.375rem"
        >
          Still thinking about game_bloc
        </Text>
        <Paragraph
          width="60%"
          textAlign="center"
          smfontSize=".8rem"
          color="#F8DBFB"
          margin="1.5rem 0 0 0"
        >
          Game_bloc have the potential to draw the attention of gamers to web3
          games as clear net games like COD, Fortnite, PUBG, Free fire,
          minimilitia, e.t.c will be supported alongside web3 games that will
          put these games in the limelight for gamers to checkout.
        </Paragraph>
        <Button
          backgroundColor="#F6B8FC"
          cursor="pointer"
          textColor="#01070E"
          padding=".8rem .6rem"
          border="none"
          borderRadius="9999px"
          margin=" 2rem 0 0 0"
          onClick={handleSignIn}
        >
          Create Account
        </Button>
      </Container>

      <Container
        backgroundColor="#F6B8FC"
        width="100%"
        padding="1rem 0 "
        margin="6rem 0 0 0"
      >
        <Container
          margin=" 0  6.25rem 0 6.25rem"
          display="flex"
          flexDirection="row"
          smmargin=".3rem 1rem"
          justifyContent="space-between"
          alignItems="center"
          backgroundColor="#F6B8FC"
        >
          <Img src={logo} alt="" width="22%" mdwidth="25%" smwidth="6.5rem" />
          <Container
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Paragraph
              color="#01070E"
              smfontSize=".8rem"
              margin="0 1rem"
              cursor="pointer"
            >
              Privacy
            </Paragraph>
            <Paragraph
              color="#01070E"
              smfontSize=".8rem"
              margin="0 1rem"
              cursor="pointer"
            >
              Terms of Use
            </Paragraph>
          </Container>
        </Container>
      </Container>
      {openModal && <LoginModal modal={setOpenModal} wallet={wallet} />}
    </Container>
  );
};
