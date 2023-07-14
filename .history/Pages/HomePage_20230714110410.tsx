import React from "react";
import { Container } from "../styles/commonStyles/Container.styles";
import Header from "../components/headerComponents/Header";
import Hero from "../components/heroSection/Hero";
import GameBloc from "../components/homepageBody/GameBloc";
import TechStack from "../components/homepageBody/TechStack";
import FeatureList from "../components/homepageBody/FeatureList";
import RoadMap from "../components/homepageBody/RoadMap";
import { Footer } from "../components/homepageBody/Footer";
interface Props {
  isSignedIn: any;
  wallet: any;
  gamebloc: any;
}
const HomePage = ({ isSignedIn, wallet, gamebloc }: Props) => {
  return (
    <Container>
      <Header isSignedIn={isSignedIn} wallet={wallet} gamebloc={gamebloc} />
      <Hero />
      <GameBloc />
      <TechStack />
      <FeatureList />
      <RoadMap />
      <Footer wallet={wallet} />
    </Container>
  );
};

export default HomePage;
