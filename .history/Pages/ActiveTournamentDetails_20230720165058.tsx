/// <reference path="../react-app-env.d.ts" />
import { useEffect, useState } from "react";
import { Container } from "../styles/commonStyles/Container.styles";
import { Text } from "../styles/commonStyles/Text";
import { Wrapper } from "../styles/commonStyles/Wrapper";
import { LeftArrow2 } from "../styles/icon/Icons";
import background from "../assets/images/background.png";
import { Img } from "../styles/commonStyles/Img";
import check from "../assets/images/check2.png";
import { Paragraph } from "../styles/commonStyles/Paragraph";
import { Button } from "../styles/commonStyles/Button.styled";
import dice from "../assets/images/dice.png";
import price from "../assets/images/price.png";
import coin from "../assets/images/coin.png";
import { useNavigate } from "react-router-dom";
import React from "react";

const ActiveTournamentDetails = () => {
  const navigate = useNavigate();

  return (
    <Container smmargin="1rem 0" margin="1rem">
      <Wrapper
        display="flex"
        flexDirection="row"
        alignItems="center"
        cursor="pointer"
        margin="1rem 0 0 0"
        width="fit-content"
        onClick={() => navigate(-1)}
      >
        <LeftArrow2 />
        <Text
          color="#F8DBFB"
          fontWeight={600}
          fontStyle="normal"
          margin="0 0 0 .5rem"
        >
          Go Back
        </Text>
      </Wrapper>

      <Wrapper
        display="grid"
        gridColumn="repeat( auto-fit, minmax(16rem, 1fr) )"
        mdgridcolumn="repeat(1, 1fr)"
        gap="1rem"
        margin="1.5rem 0 0 0"
      >
        <Container display="flex" flexDirection="column">
          <Img
            src={background}
            alt=""
            width="100%"
            borderWidth="1px"
            borderColor="rgba(255, 255, 255, 0.2)"
            borderStyle="solid"
            borderRadius="10px"
          />

          <Container
            margin="1rem 0 0 0"
            borderWidth="1px"
            borderColor="rgba(255, 255, 255, 0.2)"
            borderStyle="solid"
            borderRadius="10px"
            width="100%"
          >
            <Container
              smdisplay="grid"
              smgridcolumn="repeat(1, 1fr)"
              smgap="1rem"
              display="flex"
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              padding=".8rem"
            >
              <Wrapper display="flex" flexDirection="column">
                <Text
                  fontsize="1.5rem"
                  smfontSize=".8rem"
                  fontWeight={700}
                  color="#ffffff"
                >
                  Call of Duty
                </Text>

                <Wrapper
                  display="flex"
                  flexDirection="row"
                  alignItems="center"
                  margin=".5rem 0 0 0"
                >
                  <Img src={check} alt="" width="1rem" height="1rem" />
                  <Paragraph
                    fontsize="0.8rem"
                    smfontSize=".65rem"
                    color="#fff"
                    fontWeight={400}
                    margin="0 0 0 .3rem"
                  >
                    Deonorla
                  </Paragraph>
                </Wrapper>
              </Wrapper>

              <Wrapper display="flex" flexDirection="row">
                <Button
                  backgroundColor="#FEE4E2"
                  cursor="pointer"
                  justifyContent="center"
                  alignItems="center"
                  padding="0.3rem 1.2rem 0.4rem 1.2rem"
                  smpadding="0.2rem 1rem 0.4rem 1rem"
                  border="none"
                  borderRadius="4.5rem"
                >
                  <Text
                    color="#D92D20"
                    fontStyle="normal"
                    fontsize=".8rem"
                    smfontSize=".6rem"
                    fontWeight={600}
                    cursor="pointer"
                  >
                    Action
                  </Text>
                </Button>
                <Button
                  backgroundColor="#FFD98F"
                  cursor="pointer"
                  justifyContent="center"
                  alignItems="center"
                  padding="0.3rem 1.2rem 0.4rem 1.2rem"
                  smpadding="0.2rem 1rem 0.4rem 1rem"
                  border="none"
                  borderRadius="4.5rem"
                  margin="0 0 0 1rem"
                >
                  <Text
                    color="#B88217"
                    fontStyle="normal"
                    fontsize=".8rem"
                    smfontSize=".6rem"
                    fontWeight={600}
                    cursor="pointer"
                  >
                    Adventure
                  </Text>
                </Button>
                <Button
                  backgroundColor="#D1FADF"
                  cursor="pointer"
                  justifyContent="center"
                  alignItems="center"
                  padding="0.3rem 1.2rem 0.4rem 1.2rem"
                  smpadding="0.2rem 1rem 0.4rem 1rem"
                  border="none"
                  borderRadius="4.5rem"
                  margin="0 0 0 1rem"
                >
                  <Text
                    color="#039855"
                    fontStyle="normal"
                    fontsize=".8rem"
                    smfontSize=".6rem"
                    fontWeight={600}
                    cursor="pointer"
                  >
                    Shooting
                  </Text>
                </Button>
              </Wrapper>
            </Container>

            <Wrapper
              borderBottom="1px solid rgba(255, 255, 255, 0.2)"
              width="100%"
              margin=".5rem 0"
            />

            <Wrapper
              display="flex"
              smdisplay="grid"
              smgridcolumn="repeat(2, 1fr)"
              smgap=".7rem"
              flexDirection="row"
              justifyContent="center"
              alignItems="center"
              margin="1rem 0"
            >
              <Wrapper
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
              >
                <Img src={dice} alt="" />
                <Wrapper display="flex" flexDirection="column">
                  <Text
                    fontsize="1rem"
                    smfontSize=".7rem"
                    fontStyle="normal"
                    fontWeight={600}
                  >
                    Participants
                  </Text>
                  <Paragraph
                    fontStyle="normal"
                    fontsize="1.3rem"
                    smfontSize=".7rem"
                    fontWeight={700}
                    margin="1rem 0 0 0"
                  >
                    10
                  </Paragraph>
                </Wrapper>
              </Wrapper>

              <Wrapper
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                margin="0 0 0 5%"
              >
                <Img src={price} alt="" />
                <Wrapper display="flex" flexDirection="column">
                  <Text
                    fontsize="1rem"
                    smfontSize=".7rem"
                    fontStyle="normal"
                    fontWeight={600}
                  >
                    Pool Price
                  </Text>
                  <Paragraph
                    fontStyle="normal"
                    fontsize="1.3rem"
                    smfontSize=".7rem"
                    fontWeight={700}
                    margin="1rem 0 0 0"
                  >
                    $200
                  </Paragraph>
                </Wrapper>
              </Wrapper>

              <Wrapper
                display="flex"
                flexDirection="row"
                justifyContent="center"
                alignItems="center"
                margin="0 0 0 5%"
              >
                <Img src={coin} alt="" />
                <Wrapper display="flex" flexDirection="column">
                  <Text
                    fontsize="1rem"
                    smfontSize=".7rem"
                    fontStyle="normal"
                    fontWeight={600}
                  >
                    Entry Prize
                  </Text>
                  <Paragraph
                    fontStyle="normal"
                    fontsize="1.3rem"
                    smfontSize=".7rem"
                    fontWeight={700}
                    margin="1rem 0 0 0"
                  >
                    $20
                  </Paragraph>
                </Wrapper>
              </Wrapper>
            </Wrapper>
          </Container>
        </Container>

        <Container
          borderWidth="1px"
          borderColor="rgba(255, 255, 255, 0.2)"
          borderStyle="solid"
          borderRadius="10px"
          padding="1.5rem"
          display="flex"
          width="100%"
          flexDirection="column"
          position="relative"
        >
          <Wrapper display="flex" flexDirection="column">
            <Text
              fontsize="1.1rem"
              fontWeight={700}
              fontStyle="normal"
              color="#fff"
              margin="1rem 0 0 0"
            >
              About
            </Text>

            <Paragraph
              fontStyle="normal"
              fontsize="1rem"
              smfontSize=".7rem"
              margin="1rem 0 0 0"
            >
              Lorem ipsum dolor sit amet consectetur. Nisi placerat euismod
              luctus neque risus viverra ultricies. Porttitor volutpat velit
              dolor bibendum amet justo urna orci. Lorem faucibus sagittis eu
              mauris fringilla id. Diam vitae in mauris tellus tempor quam etiam
              neque egestas. Venenatis non elementum sit congue malesuada
              feugiat. Non purus elementum id fames at. Sit habitant mi donec
              egestas dignissim. Varius turpis arcu consequat volutpat tempor
              quis praesent. Orci pretium orci ut odio vel risus commodo. Netus
              sit congue vitae sit sapien et. Tempus ut nec gravida eget eget.
            </Paragraph>
          </Wrapper>
          <Wrapper display="flex" margin="1rem 0 0 0" height="100%">
            <Wrapper alignSelf="flex-end" width="100%">
              <Button
                backgroundColor="#F6B8FC"
                borderRadius="10px 10px 10px 10px"
                padding="0.3rem 1.2rem 0.4rem 1.2rem"
                justifyContent="center"
                display="flex"
                alignItems="center"
                height="fit-content"
                width="100%"
              >
                <Text color="#fff" smfontSize=".7rem">
                  Join Tournament
                </Text>
              </Button>
            </Wrapper>
          </Wrapper>
        </Container>
      </Wrapper>
    </Container>
  );
};

export default ActiveTournamentDetails;
