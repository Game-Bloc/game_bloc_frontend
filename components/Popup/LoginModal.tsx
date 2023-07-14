/// <reference path="../../react-app-env.d.ts" />
import styled from "styled-components";
import near_logo from "../../assets/images/near-logo.png";
import { RiCloseFill } from "react-icons/ri";
import { Text } from "../../styles/commonStyles/Text";
import { useNavigate } from "react-router-dom";
import React from "react";

interface Props {
  modal: any;
  wallet: any;
}

const LoginModal = ({ modal, wallet }: Props) => {
  const navigate = useNavigate();
  return (
    <Wrapper aria-labelledby="modal-title" role="dialog" aria-modal="true">
      <Container>
        <Container2>
          <Container3>
            <Container4>
              <Modal>
                <Close onClick={() => modal(false)} />
                {/* <Img> */}
                {/* <Img src={logo} alt="logo" /> */}
                {/* </Img> */}
                <Text>Log in to Gamebloc with</Text>
                <Button
                  onClick={() => {
                    wallet.signIn();
                  }}
                >
                  Near
                  <Logo src={near_logo} alt="" />
                </Button>
              </Modal>
            </Container4>
          </Container3>
        </Container2>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  z-index: 10;
`;

// const Img = styled.div`
//  img{
//   margin: 0 16px 8px 0;
//   @media (max-width: 400px){
//     width: 90px;
//     height: 40px;
//     }
//  }
//  `;

const Logo = styled.img`
  width: 25px;
  height: 25px;
`;

const Container = styled.div`
  position: fixed;
  inset: 0;
  background-color: transparent;
`;

const Container2 = styled.div`
  position: fixed;
  z-index: 10;
  inset: 0;
  overflow-y: auto;
`;

const Container3 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100%;
`;

const Container4 = styled.div`
  position: relative;
  background-color: white;
  width: 50%;
  border-radius: 10px;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    width: 90%;
  }
`;

const Modal = styled.div`
  position: relative;
  background-color: #01070e;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h3 {
    color: white;
    margin: 1rem 0;
  }
`;

const Button = styled.div`
  background-color: #07192d;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  color: white;
  font-size: 16px;
  border: none;
  width: 80%;
  margin: 1rem;
  cursor: pointer;

  &:hover {
    scale: 1.03;
    background-color: #0d2746;
  }
`;

const Close = styled(RiCloseFill)`
  position: absolute;
  color: white;
  left: 1rem;
  top: 1rem;
  cursor: pointer;
`;

export default LoginModal;
