import { Key, useEffect, useState } from "react";
import { Button } from "../../styles/commonStyles/Button.styled";
import { Container } from "../../styles/commonStyles/Container.styles";
import { Text } from "../../styles/commonStyles/Text";
import { Wrapper } from "../../styles/commonStyles/Wrapper";
import { CustomButtom } from "../../styles/custom/ CustomButton";
import { LeftArrow, RightArrow } from "../../styles/icon/Icons";
import TournamentCardView from "./TournamentCardView";
import { Img } from "../../styles/commonStyles/Img";
import { CodImgs } from "../../data/Index";
import { Paragraph } from "../../styles/commonStyles/Paragraph";
import check from "../../assets/images/check-circle.png";
import Loader from "../Popup/Loader/Loader";
import ReactPaginate from "react-paginate";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import {
  useGetTournamentData,
  useUpdateTournament,
} from "../../function/contract";
import React from "react";

const ActiveTournament = () => {
  const tournament = useAppSelector((state) => state.activeTournament);
  const { getData: fetchData, loading, noData } = useGetTournamentData();
  const { fetchData: newData, loading: update } = useUpdateTournament();
  const [pageNumber, setPageNumber] = useState<number>(0);
  const tournamentPerPage: number = 5;
  const tournamentViewed: number = pageNumber * tournamentPerPage;
  const navigate = useNavigate();

  useEffect(() => {
    if (tournament?.length < 1) {
      fetchData();
      return;
    }
    newData();
  }, []);

  const pageCount: number = Math.ceil(tournament?.length / tournamentPerPage);
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };
  console.log(tournament);

  const displayTournaments = tournament
    ?.slice(tournamentViewed, tournamentViewed + tournamentPerPage)
    .map((data: any, index: Key | null | undefined) => (
      <Container
        key={index}
        borderRadius="8px"
        borderStyle="solid"
        borderColor="rgba(255, 255, 255, 0.2)"
        borderWidth="1px"
        height="21rem"
        position="relative"
      >
        <Img
          src={`${CodImgs[Math.floor(Math.random() * CodImgs.length)]}`}
          alt=""
          width="15vw"
          mdwidth="30vw"
          smwidth="50vw"
          height="100%"
          borderRadius="8px"
        />
        <Wrapper
          backgroundColor="#01070E"
          margin="0 1rem"
          borderRadius="8px"
          padding="0.4rem .7rem"
          display="flex"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          position="absolute"
          height="max-content"
          mdtop="80%"
          top="75%"
        >
          <Container display="flex" flexDirection="column" position="relative">
            <Text
              fontsize="1rem"
              fontWeight={700}
              color="#ffffff"
              mdfontSize=".8rem"
            >
              Call of Duty
            </Text>

            <Wrapper
              display="flex"
              flexDirection="row"
              alignItems="center"
              margin=".5rem 0 0 0"
            >
              <Img src={check} alt="" />
              <Paragraph
                fontsize="0.65rem"
                color="#fff"
                fontWeight={400}
                margin="0 0 0 .3rem"
              >
                {data.owner_id.substring(0, data.owner_id.length - 5)}
              </Paragraph>
            </Wrapper>
          </Container>

          <Container
            borderRadius="9999px"
            padding=".5rem"
            smpadding=".3rem"
            backgroundColor="#F8DBFB"
            display="flex"
            justifyContent="center"
            alignItems="center"
            cursor="pointer"
            position="relative"
            onClick={() =>
              navigate(`/active-tournament-details/${data.tournament_id_hash}`)
            }
          >
            <RightArrow color="#000000" />
          </Container>
        </Wrapper>
      </Container>
    ));

  if (loading) {
    return (
      <Container
        width="100%"
        height="50vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Loader />
      </Container>
    );
  } else {
    return (
      <Container>
        <Container margin="4rem 0 0 0">
          <Wrapper
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Text fontWeight={700}>Active Tournaments</Text>

            <Container display="flex" flexDirection="row" alignItems="center">
              {tournament?.length >= 2 && (
                <Wrapper smdisplay="none" display="block">
                  <ReactPaginate
                    previousLabel={
                      <CustomButtom
                        backgroundColor="#01070E"
                        hoverBackground="#F6B8FC"
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        padding="0.5rem"
                        borderRadius="8px"
                        cursor="pointer"
                        borderWidth="1px"
                        borderColor="#F6B8FC"
                        borderStyle="solid"
                        margin="0 .5rem 0 0"
                      >
                        <LeftArrow className="icon" />
                      </CustomButtom>
                    }
                    nextLabel={
                      <CustomButtom
                        backgroundColor="#01070E"
                        hoverBackground="#F6B8FC"
                        display="flex"
                        flexDirection="row"
                        alignItems="center"
                        justifyContent="center"
                        padding="0.5rem"
                        borderRadius="8px"
                        cursor="pointer"
                        borderWidth="1px"
                        borderColor="#F6B8FC"
                        borderStyle="solid"
                        margin="0 .5rem 0 1rem"
                      >
                        <RightArrow className="icon" />
                      </CustomButtom>
                    }
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    activeClassName={"activeBttn"}
                  />
                </Wrapper>
              )}

              <Button
                backgroundColor="#01070E"
                display="flex"
                hoverBackground="#F6B8FC"
                hoverColor="#01070E"
                flexDirection="row"
                alignItems="center"
                justifyContent="center"
                padding="0.5rem 1.2rem"
                borderRadius="8px"
                cursor="pointer"
                borderWidth="1px"
                borderColor="#F6B8FC"
                borderStyle="solid"
                textColor="#F6B8FC"
                margin="0 2.5rem 0 1rem"
                onClick={() => navigate("/active-tournament")}
              >
                See All
              </Button>
            </Container>
          </Wrapper>
          {noData ? (
            <Container
              display="flex"
              flexDirection="row"
              justifyContent="center"
              smjustifycontent="initial"
              alignItems="center"
              smalignitems="initial"
              margin="1rem 0"
            >
              <Text
                fontWeight={700}
                fontsize="1.3rem"
                smfontSize=".8rem"
                color="#fff"
                textAlign="center"
              >
                There is currently no active tournament at the moment.
              </Text>
            </Container>
          ) : (
            <div>
              {update ? (
                <Text margin=" 1.3rem .5rem .5rem.5rem">Updating</Text>
              ) : (
                <></>
              )}
              <TournamentCardView displayTournaments={displayTournaments} />
            </div>
          )}
        </Container>
      </Container>
    );
  }
};
export default ActiveTournament;
