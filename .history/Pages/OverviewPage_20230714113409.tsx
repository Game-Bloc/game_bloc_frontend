import { useEffect, useState } from "react";
import ActiveStreams from "../components/overViewPageComponents/ActiveStreams";
import ActiveTournament from "../components/overViewPageComponents/ActiveTournament";
import GamingHub from "../components/overViewPageComponents/GamingHub";
import PopularGame from "../components/overViewPageComponents/PopularGame";
import SliderView from "../components/overViewPageComponents/SliderView";
import { Container } from "../styles/commonStyles/Container.styles";
import { useAppDispatch } from "../redux/hooks";
import { updateProfile } from "../redux/slice/profileSlice";
import { ProfileState } from "../redux/slice/profileSlice";
import React from "react";
const OverviewPage = () => {
  const account =
    localStorage.getItem("near_app_wallet_auth_key") === null
      ? "Username"
      : localStorage.getItem("near_app_wallet_auth_key");
  const [userName, setUserName] = useState<string>("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    let accountJSON;
    const user: ProfileState = {
      username: userName,
    };
    if (account === "Username") {
      setUserName("Username");
    } else {
      accountJSON = JSON.parse(account!);
      const accountID = accountJSON.accountId;
      setUserName(accountID.substring(0, accountID.length - 8));
      dispatch(updateProfile(user));
      console.log(user);
    }
  }, [account, dispatch, userName]);

  return (
    <Container backgroundColor="#01070E" margin="0 0 1rem 0">
      <SliderView />
      <ActiveTournament />
      <PopularGame />
      <GamingHub />
      <ActiveStreams />
    </Container>
  );
};

export default OverviewPage;
