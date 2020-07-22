import React from 'react';

import {
  Container,
  Header,
  ProfileInfo,
  BackIcon,
  BottomMenu,
  HomeIcon,
  SearchIcon,
  NotificationIcon,
  MailIcon
} from './styles';

import ProfilePage from '../ProfilePage'
const Main: React.FC = () => {
  return (
    <Container>
      <Header>
        <button>
          <BackIcon />
        </button>
        <ProfileInfo>
          <strong>Matheus Lucas</strong>
          <span>612 Tweets</span>
        </ProfileInfo>
      </Header>

      <ProfilePage />
      <BottomMenu>
        <HomeIcon />
        <SearchIcon />
        <NotificationIcon />
        <MailIcon />
      </BottomMenu>
    </Container>
  );
}

export default Main;