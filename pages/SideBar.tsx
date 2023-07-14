import React, { useState } from "react";
import { Text } from "../styles/commonStyles/Text";
import { Wrapper } from "../styles/commonStyles/Wrapper";
import { CustomContainer } from "../styles/custom/CustomContainer";
import {
  OverViewIcon,
  TournamentIcon,
  GameIcon,
  Friends,
  NewsIcon,
} from "../styles/icon/Icons";
import {
  CAccordion,
  CAccordionItem,
  CAccordionHeader,
  CAccordionBody,
} from "@coreui/react";
import "@coreui/coreui/dist/css/coreui.min.css";
import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { Container } from "../styles/commonStyles/Container.styles";

const SideBar = () => {
  const navigate = useNavigate();
  const [toggleOverview, setToggleOverview] = useState<boolean>(false);
  const [toggleTournament, setToggleTournament] = useState<boolean>(false);

  const vars: any = {
    "--cui-accordion-bg": "#01070E",
    "--cui-accordion-body-padding-y": "0px",
    "--cui-accordion-body-padding-x": "0px",
    "--cui-accordion-btn-padding-y": "0px",
    "--cui-accordion-btn-padding-x": "0px",
    "--cui-accordion-border-width": "0px",
    "--cui-accordion-btn-focus-box-shadow": "unset",
    "--cui-accordion-btn-icon": "unset",
    "--cui-accordion-btn-active-icon": "unset",
    "--cui-accordion-active-bg": "#01070E",
    "--cui-accordion-active-color": "#F6B8FC",
  };

  return (
    <Wrapper
      position="fixed"
      backgroundColor="#01070E"
      left="0px"
      height="100vh"
      width="17%"
      top="6.2rem"
      borderRight="1px solid #F6B8FC"
      display="flex"
      flexDirection="column"
      xmdisplay="none"
    >
      <CustomContainer
        display="flex"
        flexDirection="row"
        alignItems="center"
        mdjustifycontent="center"
        height="fit-content"
        width="100%"
        margin=" 5rem 1rem 1rem 1rem"
        cursor="pointer"
        position="relative"
        onClick={() => setToggleOverview(!toggleOverview)}
      >
        <Wrapper
          padding=".4rem .5rem"
          className="wrapper"
          borderRadius="8px"
          margin="0 1rem 0 0"
        >
          <OverViewIcon className="icon" />
        </Wrapper>

        <NavBarLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Overview
        </NavBarLink>

        {toggleOverview && (
          <Container
            position="absolute"
            backgroundColor="#01070E"
            width="100%"
            top="2.5rem"
            right="0rem"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="#2a2a2a"
            zIndex="10000"
            padding=".6rem"
            borderRadius="10px"
            mddisplay="flex"
            justifyContent="center"
            alignItems="center"
            display="none"
          >
            <Text
              className="text"
              color="#fff"
              fontWeight={600}
              fontsize=".8rem"
              backgroundColor="#01070E"
              onClick={() => navigate("/")}
            >
              Overview
            </Text>
          </Container>
        )}
      </CustomContainer>

      <Wrapper mddisplay="none">
        <CAccordion flush style={vars}>
          <CAccordionItem itemKey={1}>
            <CAccordionHeader>
              <CustomContainer
                display="flex"
                flexDirection="row"
                alignItems="center"
                mdjustifycontent="center"
                height="fit-content"
                width="100%"
                margin="1rem"
                mdmargin="0 0 0 3rem"
                cursor="pointer"
              >
                <Wrapper
                  padding=".4rem .5rem"
                  className="wrapper"
                  borderRadius="8px"
                  margin="0 1rem 0 0"
                >
                  <TournamentIcon className="icon" />
                </Wrapper>
                <Text
                  className="text"
                  color="#fff"
                  fontWeight={600}
                  fontsize=".8rem"
                  mddisplay="none"
                >
                  Tournament
                </Text>
              </CustomContainer>
            </CAccordionHeader>
            <CAccordionBody>
              <MenuOption1
                to="/active-tournament"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                Active Tournament
              </MenuOption1>{" "}
              <br />
              <br />
              <MenuOption2
                to=""
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                CrowFunded
              </MenuOption2>
            </CAccordionBody>
          </CAccordionItem>
        </CAccordion>
      </Wrapper>

      <CustomContainer
        display="flex"
        flexDirection="row"
        alignItems="center"
        mdjustifycontent="center"
        height="fit-content"
        width="100%"
        margin="1rem"
        cursor="pointer"
        maxdisplay="none"
        onClick={() => setToggleTournament(!toggleTournament)}
      >
        <Wrapper
          padding=".4rem .5rem"
          className="wrapper"
          borderRadius="8px"
          margin="0 1rem 0 0"
        >
          <TournamentIcon className="icon" />
        </Wrapper>
        <NavBarLink3
          to="/error-page"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Tournament
        </NavBarLink3>
        {toggleTournament && (
          <Container
            position="absolute"
            backgroundColor="#01070E"
            width="100%"
            top="15%"
            right="0rem"
            borderStyle="solid"
            borderWidth="1px"
            borderColor="#2a2a2a"
            zIndex="10000"
            padding=".6rem"
            borderRadius="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            maxdisplay="none"
            flexDirection="column"
          >
            <Text
              hovercolor="#F6B8FC"
              color="#fff"
              fontWeight={600}
              fontsize=".8rem"
              backgroundColor="#01070E"
              onClick={() => navigate("/active-tournament")}
            >
              Active Tournament
            </Text>
            <Text
              hovercolor="#F6B8FC"
              margin="1rem 0 0 0"
              color="#fff"
              fontWeight={600}
              fontsize=".8rem"
              backgroundColor="#01070E"
              onClick={() => navigate("")}
            >
              Crowdfunded
            </Text>
          </Container>
        )}
      </CustomContainer>

      <CustomContainer
        display="flex"
        flexDirection="row"
        alignItems="center"
        mdjustifycontent="center"
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
          <GameIcon className="icon" />
        </Wrapper>
        <NavBarLink3
          to="/error-page"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          Game
        </NavBarLink3>
      </CustomContainer>

      <CustomContainer
        display="flex"
        flexDirection="row"
        alignItems="center"
        mdjustifycontent="center"
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
          <Friends className="icon" />
        </Wrapper>
        <Text
          className="text"
          color="#fff"
          fontWeight={600}
          fontsize=".8rem"
          mddisplay="none"
        >
          Friends
        </Text>
      </CustomContainer>

      <CustomContainer
        display="flex"
        flexDirection="row"
        alignItems="center"
        mdjustifycontent="center"
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
          <NewsIcon className="icon" />
        </Wrapper>
        <Text
          className="text"
          color="#fff"
          fontWeight={600}
          fontsize=".8rem"
          mddisplay="none"
        >
          News
        </Text>
      </CustomContainer>
    </Wrapper>
  );
};

export default SideBar;

const NavBarLink = styled(NavLink)`
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #f6b8fc;
  }
  &.active {
    color: #f6b8fc;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;

const MenuOption2 = styled(NavLink)`
  font-size: 0.7rem;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  margin: 1rem 0rem 1rem 3.5rem;
  &:hover {
    color: #f6b8fc;
  }
  &.active {
    color: #f6b8fc;
  }
`;
const NavBarLink3 = styled(NavLink)`
  font-size: 0.8rem;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  &:hover {
    color: #f6b8fc;
  }
  &.active {
    color: #f6b8fc;
  }
  @media (max-width: 1024px) {
    display: none;
  }
`;
const MenuOption1 = styled(NavLink)`
  font-size: 0.7rem;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  margin: 1rem 0 1rem 3.5rem;
  &:hover {
    color: #f6b8fc;
  }
  &.active {
    color: #f6b8fc;
  }
`;
