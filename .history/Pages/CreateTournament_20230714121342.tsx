import { Container } from "../styles/commonStyles/Container.styles";
import { Wrapper } from "../styles/commonStyles/Wrapper";
import { LeftArrow2 } from "../styles/icon/Icons";
import { Text } from "../styles/commonStyles/Text";
import { Img } from "../styles/commonStyles/Img";
import background from "../assets/images/background.png";
import { Button } from "../styles/commonStyles/Button.styled";
import { Paragraph } from "../styles/commonStyles/Paragraph";
import { InputField } from "../styles/commonStyles/InputField";
import { useNavigate } from "react-router-dom";
import { ulid } from "ulid";
import ClipLoader from "react-spinners/ClipLoader";
import { useEffect, useState } from "react";
import { gamebloc } from "../index";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import React from "react";

const CreateTournament = () => {
  //    const gamebloc = useAppSelector((state) => state.auth.gamebloc);
  const account = localStorage.getItem("near_app_wallet_auth_key");
  const navigate = useNavigate();
  const [tournamentID, setTournamentID] = useState<string>("");
  const [color, setColor] = useState("#ffffff");
  const [loading, setLoading] = useState<boolean>(false);
  const [prize, setPrize] = useState<string>("");
  const [noOfUsers, setNoOfUsers] = useState<string>("");
  const [userID, setUserID] = useState<string>("");
  const gameName = "Call of duty";
  const MySwal = withReactContent(Swal);

  const generateID = () => {
    const date = new Date();
    let day = date.getDate();
    const id = ulid(day);
    setTournamentID(id);
  };

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "white",
  };

  useEffect(() => {
    let accountJSON = JSON.parse(account!);
    const accountID = accountJSON.accountId;
    setUserID(accountID);
    generateID();
  }, []);

  const popUp = () => {
    MySwal.fire({
      position: "center",
      icon: "success",
      title: "You have successfully created a tournament.",
      showConfirmButton: true,
      background: "#01070E",
      color: "#fff",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/");
      }
    });
  };

  const errorPopUp = () => {
    MySwal.fire({
      position: "center",
      icon: "error",
      title: "An error occured please try creating again",
      showConfirmButton: true,
      background: "#01070E",
      color: "#fff",
    });
  };

  const getPrize = (event: any) => {
    event.preventDefault();
    setPrize(event.target.value);
  };

  const getNoOfUsers = (event: any) => {
    event.preventDefault();
    setNoOfUsers(event.target.value);
  };
  //   function to create a tournament
  const setTournament = async () => {
    setLoading(true);
    try {
      await gamebloc.new_tournament(
        userID,
        tournamentID,
        gameName,
        noOfUsers,
        prize
      );
      console.log("Success");
      setLoading(false);
      popUp();
      //   gamebloc.getAllTournaments().then((e: any) => console.log(e));
    } catch (error) {
      console.log(error);
      console.log("Failed");
      setLoading(false);
      errorPopUp();
    }
  };

  return (
    <Container margin="1rem" smmargin="1rem 0">
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
              <Text
                fontsize="1.5rem"
                smfontSize=".8rem"
                fontWeight={600}
                color="#ffffff"
              >
                Call of Duty
              </Text>

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

            <Wrapper padding="1rem" display="flex" flexDirection="column">
              <Text
                fontsize="1.2rem"
                smfontSize=".9rem"
                fontWeight={600}
                color="#ffffff"
              >
                Game Information
              </Text>

              <Paragraph margin="1rem 0 0 0" smfontSize=".7rem">
                Players can choose to play ranked or non-ranked matches in
                multiplayer mode. It has two types of in-game currencies:
                Credits, which are earned through playing the game, and COD
                Points, which are bought with real - world money.
              </Paragraph>
            </Wrapper>
          </Container>
        </Container>

        <Container
          padding="0 0 2rem 0"
          borderWidth="1px"
          borderColor="rgba(255, 255, 255, 0.2)"
          borderStyle="solid"
          borderRadius="10px"
          height="fit-content"
        >
          <Wrapper
            margin="1.5rem 2rem"
            width="fit-content"
            height="fit-content"
          >
            <Text fontsize="1.2rem" fontWeight={600} color="#ffffff">
              Tournament Details
            </Text>
          </Wrapper>

          <Wrapper
            borderBottom="1px solid rgba(255, 255, 255, 0.2)"
            width="100%"
            margin="2.5rem 0 1rem 0"
          />

          <Container
            display="flex"
            flexDirection="column"
            padding="1rem 2rem 2rem 2rem"
          >
            {/* <Wrapper
                         display="flex"
                         flexDirection="column"
                         margin="0 0 1rem 0"
                        >
                            <Text
                             fontsize='1rem'
                             fontWeight={400}
                             fontStyle="normal"
                            >
                                Pool Prize
                            </Text>
                            <Container 
                                margin="1rem 0"
                                 borderColor="#fff"
                                 borderStyle="solid"
                                 borderWidth="1px"
                                 borderRadius="8px"
                                 display="flex"
                                 flexDirection="row"
                                 alignItems="center"
                                 padding="0rem 2rem 0rem .3rem"
                            >
                                <InputField
                                type="text"
                                placeholder="Input amount in near"
                                noneBorder="none"
                                placeHolderColor="#fff"
                                color="#fff"
                                />
                            </Container >

                        </Wrapper> */}

            <Wrapper display="flex" flexDirection="column" margin="0 0 1rem 0">
              <Text fontsize="1rem" fontWeight={400} fontStyle="normal">
                Entry Price
              </Text>
              <Container
                margin="1rem 0"
                borderColor="#fff"
                borderStyle="solid"
                borderWidth="1px"
                borderRadius="8px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                padding="0rem 2rem 0rem .3rem"
              >
                <InputField
                  type="text"
                  placeholder="Input Price"
                  smfontSize=".9rem"
                  noneBorder="none"
                  placeHolderColor="#fff"
                  color="#fff"
                  onChange={getPrize}
                  value={prize}
                />
              </Container>
            </Wrapper>

            <Wrapper display="flex" flexDirection="column" margin="0 0 1rem 0">
              <Text fontsize="1rem" fontWeight={400} fontStyle="normal">
                Number of Participant
              </Text>
              <Container
                margin="1rem 0"
                borderColor="#fff"
                borderStyle="solid"
                borderWidth="1px"
                borderRadius="8px"
                display="flex"
                flexDirection="row"
                alignItems="center"
                padding="0rem 2rem 0rem .3rem"
              >
                <InputField
                  type="text"
                  placeholder="Input amount of users"
                  noneBorder="none"
                  placeHolderColor="#fff"
                  smfontSize=".9rem"
                  color="#fff"
                  onChange={getNoOfUsers}
                  value={noOfUsers}
                />
              </Container>
            </Wrapper>
          </Container>

          <Wrapper
            margin="0 2rem"
            onClick={() => {
              setTournament();
            }}
          >
            <Button
              backgroundColor="#F6B8FC"
              borderRadius="10px 10px 10px 10px"
              padding="0.4rem 1.2rem 0.5rem 1.2rem"
              justifyContent="center"
              display="flex"
              alignItems="center"
              height="fit-content"
              width="100%"
            >
              {loading ? (
                <ClipLoader
                  color={color}
                  loading={loading}
                  cssOverride={override}
                  size={20}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                "Create Tournament"
              )}
            </Button>
          </Wrapper>
        </Container>
      </Wrapper>
    </Container>
  );
};

export default CreateTournament;
