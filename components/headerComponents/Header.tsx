import React from "react";
import { Container } from "../../styles/commonStyles/Container.styles";
import { Text } from "../../styles/headerStyle/Header.styled";
import Login from "./Login";
import Navbar from "./Navbar";
interface Props {
  isSignedIn: any,
  wallet: any,
  gamebloc: any
}
const Header = ({isSignedIn, wallet, gamebloc}:Props) => {
  return (
      <Container margin="2.75rem 6.25rem 1.5rem 6.25rem"  xmdmargin="1rem 1rem 1.5rem 1rem"  display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" >
        <Text fontsize="1.25rem" fontWeight={600} >Logo</Text>
        <Navbar />
        <Login isSignedIn={isSignedIn} wallet={wallet} gamebloc={gamebloc}/>
      </Container>
  );
};

export default Header;
