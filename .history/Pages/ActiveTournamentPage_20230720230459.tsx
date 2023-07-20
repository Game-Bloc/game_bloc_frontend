/// <reference path="../react-app-env.d.ts" />
import { Key, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "../styles/commonStyles/Button.styled";
import { Container } from "../styles/commonStyles/Container.styles";
import { Text } from "../styles/commonStyles/Text";
import { Wrapper } from "../styles/commonStyles/Wrapper";
import ReactPaginate from "react-paginate";
import { LeftArrow, RightArrow } from "../styles/icon/Icons";
import { Img } from "../styles/commonStyles/Img";
import { Paragraph } from "../styles/commonStyles/Paragraph";
import check from "../assets/images/check-circle.png";
import navigate from "../assets/images/navigate-next.png";
import { gamebloc } from "../index";
import { CodImgs } from "../data/Index";
import Loader from "../components/Popup/Loader/Loader";
import React from "react";
import {
  useGetTournamentData,
  useUpdateTournament,
} from "../function/contract";
import { useAppSelector } from "../redux/hooks";

const ActiveTournamentPage = () => {
  const allTournament = useAppSelector((state: any) => state.activeTournament);
  const { getData, loading: isLoading } = useGetTournamentData();
  const { fetchData, loading } = useUpdateTournament();
  const [pageNumber, setPageNumber] = useState(0);
  const tournamentPerPage: number = 8;
  const tournamentViewed: number = pageNumber * tournamentPerPage;
  const navigateTo = useNavigate();

  useEffect(() => {
    if (allTournament.length < 1) {
      getData();
      return;
    }
    fetchData();
  }, []);

  const displayTournaments = allTournament
    ?.slice(tournamentViewed, tournamentViewed + tournamentPerPage)
    .map((data: any, index: Key | null | undefined) => (
      <Container
        onClick={() =>
          navigateTo(`/active-tournament-details/${data.tournament_id_hash}`)
        }
        key={index}
      >
        <Container
          borderRadius="8px"
          borderStyle="solid"
          borderColor="rgba(255, 255, 255, 0.2)"
          borderWidth="1px"
          // width="13.75rem"
          height="24rem"
          smheight="19rem"
          position="relative"
          cursor="pointer"
        >
          <Img
            src={`${CodImgs[Math.floor(Math.random() * CodImgs.length)]}`}
            alt="img"
            width="100%"
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
            top="80%"
            smtop="70%"
            smmargin=".4rem"
          >
            <Container
              display="flex"
              flexDirection="column"
              position="relative"
            >
              <Text
                fontsize=".8rem"
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
                <Img src={check} alt="" />
                <Paragraph
                  fontsize="0.5rem"
                  smfontSize=".6rem"
                  color="#fff"
                  fontWeight={400}
                  margin="0 0 0 .3rem"
                >
                  {data.owner_id.substring(0, data.owner_id.length - 4)}
                </Paragraph>
              </Wrapper>
            </Container>

            <Container
              borderRadius="9999px"
              padding=".3rem"
              smpadding=".2rem"
              backgroundColor="#F8DBFB"
              display="flex"
              justifyContent="center"
              alignItems="center"
              cursor="pointer"
              position="relative"
            >
              <Img src={navigate} alt="" />
            </Container>
          </Wrapper>
        </Container>
      </Container>
    ));

  const pageCount: number = Math.ceil(
    allTournament?.length / tournamentPerPage
  );
  const changePage = ({ selected }: any) => {
    setPageNumber(selected);
  };

  if (isLoading) {
    return (
      <Container
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Loader />
      </Container>
    );
  } else {
    return (
      <Container
        display="flex"
        flexDirection="column"
        margin="1rem"
        smmargin=".5rem"
      >
        <Text
          fontWeight={700}
          fontsize="2rem"
          mddisplay="1.5rem"
          smfontSize="1rem"
          margin="0 0 0 .5rem"
        >
          Active Tournament
        </Text>

        <Wrapper width="100%" display="flex" justifyContent="flex-end">
          <Button
            backgroundColor="#01070E"
            display="flex"
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
            margin="1rem 0 0 0"
            onClick={() => navigateTo("/tournament-category")}
          >
            Start Tournament
          </Button>
        </Wrapper>

        <Container margin=".6rem">
          {loading ? <Text>Updating</Text> : <></>}
        </Container>

        <Container
          display="grid"
          smgridcolumn="repeat(2, 1fr)"
          gridColumn="repeat(auto-fill, minmax(10.375rem, 1fr))"
          gap="2rem"
          mdgap=".5rem"
          smgap=".3rem"
          margin="1rem"
          smmargin=" 1rem 0 0 0"
        >
          {displayTournaments}
        </Container>

        <Wrapper
          display="flex"
          justifyContent="flex-end"
          alignItems="center"
          flexDirection="row"
        >
          {allTournament?.length >= 5 && (
            <ReactPaginate
              previousLabel={<LeftArrow />}
              nextLabel={<RightArrow />}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              activeClassName={"activeBttn"}
            />
          )}
        </Wrapper>
      </Container>
    );
  }
};

export default ActiveTournamentPage;
