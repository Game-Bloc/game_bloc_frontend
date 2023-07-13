/// <reference path="../react-app-env.d.ts" />
import React, { useState } from "react";

// import { useState } from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { Navigate, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { HiChat } from "react-icons/hi";
import user from "../assets/u.png";
import logo from "../assets/logo.png";
import virtual from "../assets/virtual.jpg";
import { BiBell } from "react-icons/bi";
import { AiOutlineSetting } from "react-icons/ai";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { HiCollection } from "react-icons/hi";
import { FaUserFriends } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { AiTwotoneStar } from "react-icons/ai";

interface Props {
  wallet: any;
  isSignedIn: any;
  gamebloc: any;
}

const Header = ({ wallet, isSignedIn, gamebloc }: Props) => {
  const [navbar, setNavbar] = useState(false);
  const signIn = () => {
    wallet.signIn();
  };
  const initializeContract = () => {
    gamebloc.initializeContract();
  };
  const signOut = () => {
    wallet.signOut();
  };
  const navigate = useNavigate();
  const itemVariants = {
    closed: {
      width: 0,
    },
    open: {
      width: "12rem",
      transition: {
        duration: 1,
        staggerChildren: 0.2,
        delayChildren: 1,
      },
    },
  };

  const sideVariants = {
    closed: {
      x: -500,
      opacity: 0,
    },

    open: {
      x: 0,
      opacity: 1,
    },
  };

  return (
    <Head>
      <LogoContainer>
        <Img onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
        </Img>

        <Profile>
          {isSignedIn ? (
            <button
              onClick={() => {
                navigate("/");
                signOut();
              }}
            >
              {" "}
              <p>Sign Out</p>
            </button>
          ) : (
            <button onClick={signIn}>
              {" "}
              <p>Sign In</p>
            </button>
          )}
          {/* <Message/>
                <img src={user} alt=""/> */}
        </Profile>

        <Hamenu onClick={() => setNavbar(!navbar)} />

        <AnimatePresence>
          {navbar && (
            <Menu
              initial="closed"
              animate="open"
              variants={itemVariants}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <motion.aside>
                <AvatarContainer
                  variants={sideVariants}
                  exit={{
                    x: 10,
                    opacity: 0,
                    transition: { delay: 0.6, duration: 0.3 },
                  }}
                >
                  <img src={virtual} alt="avatar" />

                  <ColorContainer variants={sideVariants}>
                    <Red variants={sideVariants}>
                      <Bell />
                      <img src={user} alt="avatar" />
                      <Settings />
                    </Red>
                    <Yellow variants={sideVariants}>
                      <h4>Netheream Lord</h4>
                      <p>User Id: 23456</p>
                    </Yellow>

                    <Green variants={sideVariants}>
                      <div>
                        <h4>Post</h4>
                        <p>4K</p>
                      </div>

                      <div>
                        <h4>Subscribers</h4>
                        <p>200K</p>
                      </div>
                    </Green>
                    <button>Start a stream</button>
                  </ColorContainer>
                </AvatarContainer>

                <MenuBox
                  variants={sideVariants}
                  exit={{
                    x: 10,
                    opacity: 0,
                    transition: { delay: 0.6, duration: 0.3 },
                  }}
                >
                  <div>
                    <h4>Messages</h4>
                    <Messages />
                  </div>
                  <div>
                    <h4>Library</h4>
                    <Library />
                  </div>
                  <div>
                    <h4>Favourite</h4>
                    <Favourite />
                  </div>
                  <div>
                    <h4>Friends</h4>
                    <Friends />
                  </div>
                  <div>
                    <h4>Messages</h4>
                    <Messages />
                  </div>
                </MenuBox>
              </motion.aside>
            </Menu>
          )}
        </AnimatePresence>
      </LogoContainer>
    </Head>
  );
};

const Head = styled.div`
  position: fixed;
  background-color: #35356b;
  width: 100%;
  z-index: 1000;
  top: 0;
`;

const Profile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: 0 1rem;
    width: 40px;
    height: 40px;
  }
  button {
    display: flex;
    background: transparent;
    border: 1px solid #6365bf;
    border-radius: 9999px;
    height: 25px;
    padding: 0.3rem 1rem;
    cursor: pointer;
    img {
      margin: 0;
      width: 30px;
      height: 30px;
    }
    p {
      margin: 0;
      color: #6365bf;
    }
  }

  @media screen and (max-width: 686px) {
    display: none;
  }
`;

const MenuBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background: #35356b;
  padding: 0.7rem 1.2rem;
  border-radius: 12px;
  margin: 1rem 0.5rem;
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    &:hover {
      transform: scale(1.05);
    }
  }

  h4 {
    color: #6365bf;
    font-size: 12px;
    margin: 0.4rem 0.3rem 1.2rem 0;
    padding-top: 0.4rem;
    cursor: pointer;
  }
`;

const Library = styled(HiCollection)`
  font-size: 21px;
  color: #6365bf;
`;
const Friends = styled(FaUserFriends)`
  font-size: 21px;
  color: #6365bf;
`;
const Messages = styled(AiFillMessage)`
  font-size: 21px;
  color: #6365bf;
`;
const Favourite = styled(AiTwotoneStar)`
  font-size: 21px;
  color: #6365bf;
`;

const Hamenu = styled(HiOutlineMenuAlt2)`
  color: #6365bf;
  margin-left: 1.5rem;
  font-size: 26px;
  cursor: pointer;
  @media (max-width: 400px) {
    font-size: 18px;
  }
  @media (min-width: 686px) {
    display: none;
  }
`;
const Message = styled(HiChat)`
  color: #6365bf;
  font-size: 21px;
  margin-left: 1rem;
`;

const Bell = styled(BiBell)`
  color: #6365bf;
  font-size: 26px;
  margin-top: 1.2rem;
`;
const Settings = styled(AiOutlineSetting)`
  margin-top: 1.2rem;
  color: #6365bf;
  font-size: 26px;
`;

const Menu = styled(motion.div)`
  position: absolute;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 16px 0 0 16px;
  background: linear-gradient(270deg, rgba(39, 38, 78, 255) 0%, #33337d 100%);
  display: flex;
  flex-direction: column;
  right: 1px;
  top: 3.5rem;
  width: 12rem;
  height: 100vh;
  transition: 0.5 all ease;
  z-index: 1;
  overflow: auto;

  ul {
    display: flex;
    flex-direction: column;
    color: #ffffff;
    list-style: none;
    padding: 1rem;
  }
  li {
    font-size: 1rem;
    padding-block: 1rem;
  }
`;

const AvatarContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 1rem 0.5rem;
  background: #35356b;
  border-radius: 12px;
  position: relative;

  img {
    border-top-right-radius: 12px;
    border-top-left-radius: 12px;
    cursor: pointer;
    width: 100%;
    height: 100px;
  }
`;

const ColorContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;

  button {
    border: none;
    margin-top: 1rem;
    border-radius: 9999px;
    padding: 0.3rem 1rem;
    background-color: #3f3f6e;
    color: #6365bf;
    font-size: 18px;
    box-shadow: rgb(0 0 0 / 29%) 5px 26px 36px 10px,
      rgb(0 0 0 / 53%) 10px 16px 10px -10px;

    &hover {
      transform: scale(1.05);
    }
  }
`;

const Red = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  margin: 0 auto;
  top: 4rem;

  img {
    width: 70px;
    height: 70px;
    padding: 0;
    margin: 0 0.5rem;
  }
`;

const Yellow = styled(motion.div)`
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  h4 {
    color: #6365bf;
    font-size: 18px;
    margin: 1.5rem 0 0 0;
  }
  p {
    color: #6365bf;
    font-size: 18px;
    margin-top: 8px;
    text-align: center;
  }
`;

const Green = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.4rem;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;

    h4 {
      margin: 0;
      color: #6365bf;
    }

    p {
      color: #6365bf;
      margin: 0;
    }
  }
`;

// const Bar = styled.div`
//  border-right: 1px solid #6365bf ;
//  height: 2.3rem;
//  margin: 0 .3rem;
// `;

const LogoContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.2rem 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px;
  @media (max-width: 375px) {
    padding: 0.1rem 0.5rem;
  }
`;

const Img = styled.div`
  img {
    margin: 0 16px 8px 0;
    @media (max-width: 400px) {
      width: 90px;
      height: 40px;
    }
  }
`;

//  background: rgba(255,255,255, 0.5);
//  box-shadow: 0 4px 30px rgba(0,0,0,0.1);
//  backdrop-fliter: blur(15px);

export default Header;
