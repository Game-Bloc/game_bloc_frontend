import { Container } from "../styles/commonStyles/Container.styles";
import { Img } from "../styles/commonStyles/Img";
import { Wrapper } from "../styles/commonStyles/Wrapper";
import img from "../assets/images/profile.png";
import avatar from "../assets/images/img9.png";
import React from "react";

const Profile = () => {
  return (
    <Container display="grid" gridColumn="repeat(2, 1fr)">
      <Container display="flex" flexDirection="column" margin="2rem 0 0 .5rem">
        <Wrapper
          position="relative"
          justifyContent="center"
          alignItems="center"
          display="flex"
        >
          <Img src={img} alt="" />
          <Wrapper
            display="flex"
            flexDirection="column"
            position="absolute"
            left="50%"
            right="50%"
            top="50%"
            bottom="50%"
          >
            <Img src={avatar} alt="" width="2rem" height="2rem" />
          </Wrapper>
        </Wrapper>
      </Container>
    </Container>
  );
};

export default Profile;
