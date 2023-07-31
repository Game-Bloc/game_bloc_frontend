/// <reference path="../react-app-env.d.ts" />
import { useState } from "react";
import { Container } from "../styles/commonStyles/Container.styles";
import { Img } from "../styles/commonStyles/Img";
import { InputField } from "../styles/commonStyles/InputField";
import { Text } from "../styles/commonStyles/Text";
import searchImage from "../assets/images/search.png";
import { Wrapper } from "../styles/commonStyles/Wrapper";
import {
  Bell,
  Message,
  ArrowDown,
  Close,
  ArrowUp,
  Person,
  History,
  Transaction,
  SignOut,
  Menu,
  Bell2,
  MobileGameIcon,
  MobileOverViewIcon,
  MobileTournamentIcon,
} from "../styles/icon/Icons";
import avatar from "../assets/images/avatar.png";
import img from "../assets/images/img9.png";
import { CustomContainer } from "../styles/custom/CustomContainer";
import { MobileCustomContainer } from "../styles/custom/MobileCustomContainer";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
import styled from "styled-components";
import logo from "../assets/images/gamelogo2.png";
import logo2 from "../assets/images/gameIcon.png";
import React from "react";

const CommonHeader = ({ wallet }: any) => {
  const [openPopup, setOpenPopup] = useState<boolean>(false);
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const navigate = useNavigate();
  const signOut = () => {
    wallet.signOut();
  };

  const username = useAppSelector((state) => state.profile.username);

  return (
    <Container
      backgroundColor="#01070E"
      padding="1.5rem 1rem"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px solid #F6B8FC"
      position="fixed"
      width="100%"
      height="fit-content"
      top="0px"
      zIndex="1"
    >
      <Menu onClick={() => setOpenMenu(!openMenu)} />
      <div onClick={() => navigate("/home")}>
        <Img
          cursor="pointer"
          src={logo}
          alt=""
          width="9rem"
          mdwidth="25%"
          smwidth="6.5rem"
        />
      </div>

      <Container
        display="flex"
        flexDirection="row"
        alignItems="center"
        xmdisplay="none"
      >
        <Container
          borderColor="#F6B8FC"
          borderWidth="1px"
          borderStyle="solid"
          borderRadius="8px"
          display="flex"
          flexDirection="row"
          alignItems="center"
          padding="0rem 2rem 0rem 1.5rem"
        >
          <Img src={searchImage} alt="img" width=".9rem" height=".9rem" />
          <InputField
            type="text"
            noneBorder="none"
            color="#fff"
            placeHolderColor="#ffffff"
            placeholder="Search"
            width="7rem"
          />
        </Container>

        <Container
          display="flex"
          flexDirection="row"
          alignItems="center"
          position="relative"
        >
          <Wrapper
            margin="0 0 0 1rem"
            borderLeft="1px solid #98A2B3"
            height="1rem"
          />
          <Message />
          <Wrapper
            // margin="0 0 0 1rem"
            borderLeft="1px solid #98A2B3"
            height="1rem"
          />
          <Bell />
          <Wrapper
            // margin="0 0 0 1rem"
            borderLeft="1px solid #98A2B3"
            height="1rem"
          />
          <Container
            display="flex"
            flexDirection="row"
            alignItems="center"
            margin="0 0 0 1rem"
            cursor="pointer"
            onClick={() => setOpenPopup(true)}
          >
            <Img src={avatar} alt="avatar" margin="0 .5rem 0 0" />
            {openPopup ? <ArrowDown /> : <ArrowUp />}
          </Container>
        </Container>
      </Container>
      {openPopup && (
        <Container
          position="absolute"
          width="21rem"
          height="30rem"
          backgroundColor="#01070E"
          display="flex"
          flexDirection="column"
          top="5rem"
          right="1rem"
          borderColor="#F8DBFB"
          borderStyle="solid"
          borderWidth="1px"
          padding="1rem"
        >
          <Container
            position="absolute"
            top="1rem"
            right="1rem"
            onClick={() => setOpenPopup(false)}
          >
            <Close />
          </Container>

          <Wrapper
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            margin="2rem"
          >
            <Img src={img} alt="" width="5rem" height="5rem" />
            <Text
              fontWeight={700}
              fontsize="1.2rem"
              color="#fff"
              margin="1rem 0 0 0"
              opacity="0.5"
            >
              {username}
            </Text>
          </Wrapper>

          <Container
            borderBottom="1px"
            width="100%"
            borderStyle="solid"
            borderColor="#667085"
          />
          <Container display="flex" flexDirection="column" margin="1rem 0 0 0">
            <CustomContainer
              display="flex"
              flexDirection="row"
              width="100%"
              cursor="pointer"
              hoverBackground="#dbbddf9d"
              borderRadius="10px"
              padding=".5rem"
              alignItems="center"
              margin="0.5rem 0rem"
              onClick={() => navigate("/profile")}
            >
              <Person className="icon" />
              <Text fontWeight={400} margin="0 0 .5rem 1.5rem" className="icon">
                Profile
              </Text>
            </CustomContainer>
            <CustomContainer
              display="flex"
              flexDirection="row"
              width="100%"
              cursor="pointer"
              hoverBackground="#dbbddf9d"
              borderRadius="10px"
              padding=".5rem"
              alignItems="center"
              margin="0.5rem 0rem"
            >
              <History className="icon" />
              <Text fontWeight={400} margin="0 0 .5rem 1.5rem" className="icon">
                History
              </Text>
            </CustomContainer>
            <CustomContainer
              display="flex"
              flexDirection="row"
              width="100%"
              cursor="pointer"
              hoverBackground="#dbbddf9d"
              borderRadius="10px"
              padding=".5rem"
              alignItems="center"
              margin="0.5rem 0rem"
            >
              <Transaction className="icon" />
              <Text fontWeight={400} margin="0 0 .5rem 1.5rem" className="icon">
                Transaction
              </Text>
            </CustomContainer>
          </Container>

          <Container
            borderBottom="1px"
            width="100%"
            borderStyle="solid"
            borderColor="#667085"
          />

          <CustomContainer
            display="flex"
            flexDirection="row"
            width="100%"
            cursor="pointer"
            hoverBackground="#dbbddf9d"
            borderRadius="10px"
            padding=".5rem"
            alignItems="center"
            margin="0.5rem 0rem"
            onClick={() => {
              navigate("/");
              signOut();
            }}
          >
            <SignOut className="icon" />
            <Text
              fontWeight={400}
              margin="0 0 0 1.5rem"
              className=""
              color=" #F97066"
            >
              Sign Out
            </Text>
          </CustomContainer>
        </Container>
      )}

      {/* MOBILE VIEW */}

      <Container
        xmdisplay="flex"
        flexDirection="row"
        display="none"
        justifyContent="center"
        alignItems="center"
      >
        <Bell2 />
      </Container>
      {openMenu && (
        <Container
          xmdisplay="flex"
          display="none"
          backgroundColor="#F6B8FC"
          width="70%"
          height="100vh"
          position="absolute"
          padding=".5rem"
          top="0rem"
          left="0"
        >
          <Wrapper position="relative" width="100%">
            <Container
              position="absolute"
              top=".5rem"
              right=".5rem"
              onClick={() => setOpenMenu(false)}
            >
              <Close />
            </Container>

            <Wrapper
              justifyContent="center"
              display="flex"
              alignItems="center"
              margin="3rem 0"
              width="100%"
            >
              <Img src={logo2} alt="" smwidth="4.5rem" />
            </Wrapper>

            <Container>
              <MobileCustomContainer
                display="flex"
                flexDirection="row"
                alignItems="center"
                height="fit-content"
                width="100%"
                margin="1rem"
                cursor="pointer"
              >
                <Wrapper
                  padding=".4rem .5rem"
                  className="wrapper"
                  borderRadius="8px"
                  margin="0 1rem 0 0"
                >
                  <MobileOverViewIcon className="icon" />
                </Wrapper>

                <NavBarLink1
                  onClick={() => setOpenMenu(false)}
                  to="/home"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Overview
                </NavBarLink1>
              </MobileCustomContainer>
              <MobileCustomContainer
                display="flex"
                flexDirection="row"
                alignItems="center"
                height="fit-content"
                width="100%"
                margin="1rem"
                cursor="pointer"
              >
                <Wrapper
                  padding=".4rem .5rem"
                  className="wrapper"
                  borderRadius="8px"
                  margin="0 1rem 0 0"
                >
                  <MobileTournamentIcon className="icon" />
                </Wrapper>

                <NavBarLink2
                  onClick={() => setOpenMenu(false)}
                  to="/active-tournament"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Tournament
                </NavBarLink2>
              </MobileCustomContainer>
              <MobileCustomContainer
                display="flex"
                flexDirection="row"
                alignItems="center"
                height="fit-content"
                width="100%"
                margin="1rem"
                cursor="pointer"
              >
                <Wrapper
                  padding=".4rem .5rem"
                  className="wrapper"
                  borderRadius="8px"
                  margin="0 1rem 0 0"
                >
                  <MobileGameIcon className="icon" />
                </Wrapper>

                <NavBarLink3
                  onClick={() => setOpenMenu(false)}
                  to="/profile"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Profile
                </NavBarLink3>
              </MobileCustomContainer>
              {/* <MobileCustomContainer
                display="flex"
                flexDirection="row"
                alignItems="center"
                height="fit-content"
                width="100%"
                margin="1rem"
                cursor="pointer"
              >
                <Wrapper
                  padding=".4rem .5rem"
                  className="wrapper"
                  borderRadius="8px"
                  margin="0 1rem 0 0"
                >
                  <MobileFriendsIcon className="icon" />
                </Wrapper>

                <NavBarLink4
                  onClick={() => setOpenMenu(false)}
                  to="/profile"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  Profile
                </NavBarLink4>
              </MobileCustomContainer>
              <MobileCustomContainer
                display="flex"
                flexDirection="row"
                alignItems="center"
                height="fit-content"
                width="100%"
                margin="1rem"
                cursor="pointer"
              >
                <Wrapper
                  padding=".4rem .5rem"
                  className="wrapper"
                  borderRadius="8px"
                  margin="0 1rem 0 0"
                >
                  <MobileNewsIcon className="icon" />
                </Wrapper>

                <NavBarLink5
                  onClick={() => setOpenMenu(false)}
                  to="/error-page"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "active" : ""
                  }
                >
                  News
                </NavBarLink5>
              </MobileCustomContainer> */}
            </Container>

            <Container
              display="flex"
              alignItems="flex-end"
              justifyContent="center"
              height="50%"
              width="100%"
            >
              <CustomContainer
                display="flex"
                flexDirection="row"
                width="100%"
                cursor="pointer"
                borderRadius="10px"
                padding=".5rem"
                alignItems="center"
                margin="0rem 0rem 1rem 17%"
                onClick={() => {
                  navigate("/home");
                  signOut();
                }}
              >
                <SignOut className="icon" />
                <Text
                  fontWeight={400}
                  margin="0 0 0 1.5rem"
                  className=""
                  color=" #F97066"
                >
                  Sign Out
                </Text>
              </CustomContainer>
            </Container>
          </Wrapper>
        </Container>
      )}
    </Container>
  );
};
export default CommonHeader;

const NavBarLink1 = styled(NavLink)`
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  color: #01070e;
  &:hover {
    font-weight: 700;
    text-decoration: none;
    font-size: large;
    color: #01070e;
  }
  &.active {
    color: #01070e;
    font-weight: 700;
    font-size: large;
    text-decoration: none;
  }
`;
const NavBarLink2 = styled(NavLink)`
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  color: #01070e;
  &:hover {
    font-weight: 700;
    text-decoration: none;
    font-size: large;
    color: #01070e;
  }
  &.active {
    color: #01070e;
    font-weight: 700;
    font-size: large;
    text-decoration: none;
  }
`;
const NavBarLink3 = styled(NavLink)`
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  color: #01070e;
  &:hover {
    font-weight: 700;
    text-decoration: none;
    font-size: large;
    color: #01070e;
  }
  &.active {
    color: #01070e;
    font-weight: 700;
    font-size: large;
    text-decoration: none;
  }
`;
const NavBarLink4 = styled(NavLink)`
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  color: #01070e;
  &:hover {
    font-weight: 700;
    text-decoration: none;
    font-size: large;
    color: #01070e;
  }
  &.active {
    color: #01070e;
    font-weight: 700;
    font-size: large;
    text-decoration: none;
  }
`;
const NavBarLink5 = styled(NavLink)`
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  color: #01070e;
  &:hover {
    font-weight: 700;
    text-decoration: none;
    font-size: large;
    color: #01070e;
  }
  &.active {
    color: #01070e;
    font-weight: 700;
    font-size: large;
    text-decoration: none;
  }
`;
