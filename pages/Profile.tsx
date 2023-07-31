import { Container } from "../styles/commonStyles/Container.styles";
import { Img } from "../styles/commonStyles/Img";
import { Wrapper } from "../styles/commonStyles/Wrapper";
import img from "../assets/images/avatar2.png";
import avatar from "../assets/images/img9.png";
import React from "react";
import { Text } from "../styles/commonStyles/Text";
import { useAppSelector } from "../redux/hooks";
import { Discord } from "../styles/icon/Icons";
import { Button } from "../styles/commonStyles/Button.styled";
import { ConfigProvider, Tabs } from "antd";
import type { TabsProps } from "antd";
import ActivityTab from "../components/profileComponents/ActivityTab";

const onChange = (key: string) => {
  console.log(key);
};

const items: TabsProps["items"] = [
  {
    key: "1",
    label: `Activity`,
    children: <ActivityTab />,
  },
  {
    key: "2",
    label: `Game Stats`,
    children: `Content of Tab Pane 2`,
  },
  {
    key: "3",
    label: `Wins`,
    children: `Content of Tab Pane 3`,
  },
];

const Profile = () => {
  const username = useAppSelector((state) => state.profile.username);
  return (
    <Container display="flex" flexDirection="column">
      <Wrapper
        display="flex"
        flexDirection="row"
        smflexdirection="column"
        margin="1rem 0"
      >
        <Wrapper
          display="flex"
          flexDirection="column"
          // height="10rem"
          smflexdirection="row"
          backgroundColor="#41414156"
          width="7rem"
          smwidth="70%"
          borderRadius="8px"
          justifyContent="center"
          smjustifycontent="start"
          alignItems="center"
          margin=".5rem"
          padding=".5rem 0"
        >
          <Img
            margin="1rem 0 0 0"
            src={img}
            alt=""
            width="5rem"
            height="5rem"
          />
          <Wrapper
            margin="1.5rem 0"
            smmargin="0 0 0 1.5rem"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <Text fontsize="1.2rem" fontWeight={700} margin=".5rem 0">
              Stats
            </Text>
            <Text fontsize="1.4rem" fontWeight={800} margin=".5rem 0">
              0
            </Text>
          </Wrapper>
        </Wrapper>

        <Wrapper
          display="flex"
          flexDirection="column"
          smflexdirection=""
          margin="0 0 0 2rem"
        >
          <Text fontsize="1.3rem" fontWeight={700}>
            Gamebloc Username
          </Text>
          <Text fontsize=".9rem" fontWeight={500} margin="1rem 0">
            @{username}
          </Text>
          <Text fontsize=".8rem" fontWeight={400} margin=" " color="#ffffff72">
            Joined July 2023
          </Text>

          <Wrapper
            padding=".4rem"
            margin="1rem 0"
            borderRadius="4px"
            width="fit-content"
            hoverBgColor="#ffffff17"
          >
            <Discord fontSize="1.9rem" />
          </Wrapper>
          <Wrapper margin="">
            <Button
              textColor="#fff"
              borderColor="#fff"
              backgroundColor="#01070E"
              borderRadius="8px"
              cursor="pointer"
              borderStyle="solid"
              borderWidth="1px"
              padding=".6rem 1rem"
            >
              Gaming Account
            </Button>
          </Wrapper>
        </Wrapper>
      </Wrapper>

      <Container smmargin="0 .6rem">
        <ConfigProvider
          theme={{
            token: {
              colorPrimaryActive: "#F6B8FC",
              colorPrimary: "#F6B8FC",
              colorPrimaryHover: "#F6B8FC",
              colorText: "#fff",
            },
          }}
        >
          <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </ConfigProvider>
      </Container>
    </Container>
  );
};

export default Profile;
