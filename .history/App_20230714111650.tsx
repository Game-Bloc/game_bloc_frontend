import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import HomePage from "./Pages/HomePage";
import GlobalStyles from "./styles/Global";
import "./App.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
// import OverviewPage from "./pages/OverviewPage";
import CommonHeader from "./common/CommonHeader";
import { Container } from "./styles/commonStyles/Container.styles";
import SideBar from "./pages/SideBar";
import { Wrapper } from "./styles/commonStyles/Wrapper";
// import ActiveTournamentPage from "./pages/ActiveTournamentPage";
// import ActiveTournamentDetails from "./pages/ActiveTournamentDetails";
// import TournamentCategory from "./pages/TournamentCategory";
// import CreateTournament from "./pages/CreateTournament";
// import NewsPage from "./pages/NewsPage";
// import NewsDetails from "./pages/NewsDetails";
// import ErrorPage from "./pages/ErrorPage";
// import CrowdFunded from "./pages/CrowdFunded";
// import History from "./pages/History";
// import Profile from "./pages/Profile";
import React from "react";

const theme = {
  colors: {
    header: "#01070E",
    body: "#01070E",
  },
};

interface Props {
  isSignedIn: any;
  wallet: any;
  gamebloc: any;
}

const App = ({ isSignedIn, wallet, gamebloc }: Props) => {
  const navigate = useNavigate();
  // useEffect(() => {
  //  if (isSignedIn){
  //    navigate('/overview')
  //  }
  // }, []);

  if (!isSignedIn) {
    return (
      <Container>
        <GlobalStyles />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isSignedIn={isSignedIn}
                wallet={wallet}
                gamebloc={gamebloc}
              />
            }
          />
        </Routes>
      </Container>
    );
  } else if (isSignedIn) {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <GlobalStyles />
          <CommonHeader wallet={wallet} />
          <Container display="flex" flexDirection="row">
            <SideBar />
            <Wrapper
              xmdmargin="7rem 1rem 0 1rem"
              xmdwidth="100%"
              width="79%"
              margin="7rem 0 0 19%"
            >
              <Routes>
                {/* <Route path="/" element={<OverviewPage />} /> */}
                {/* <Route
                  path="/active-tournament"
                  element={<ActiveTournamentPage />}
                /> */}
                {/* <Route
                  path="active-tournament-details/:id"
                  element={<ActiveTournamentDetails />}
                /> */}
                {/* <Route
                  path="tournament-category"
                  element={<TournamentCategory />}
                /> */}
                {/* <Route
                  path="tournament-category/:id"
                  element={<CreateTournament />}
                /> */}
                {/* <Route path="new-page" element={<NewsPage />} /> */}
                {/* <Route path="news-details" element={<NewsDetails />} /> */}
                {/* <Route path="error-page" element={<ErrorPage />} /> */}
                {/* <Route path="crowd-funded" element={<CrowdFunded />} /> */}
                {/* <Route path="history" element={<History />} /> */}
                {/* <Route path="profile" element={<Profile />} /> */}
              </Routes>
            </Wrapper>
          </Container>
        </Container>
      </ThemeProvider>
    );
  }
};

export default App;
