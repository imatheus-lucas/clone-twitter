import React from 'react';

import {
  Container,
  TopSide,
  Logo,
  MenuButtons,
  HomeIcon,
  NotificationIcon,
  MailIcon,
  LikeIcon,
  PersonIcon,
  BotSide,
  Avatar,
  ProfileData,
  ExitIcon
} from './styles';
import Button from '../Button'
const MenuBar: React.FC = () => {
  return (
    <Container>
      <TopSide>
        <Logo />
        <MenuButtons>
          <HomeIcon />
          <span>Página inicial</span>
        </MenuButtons>
        <MenuButtons>
          <NotificationIcon />
          <span>Notificatições</span>
        </MenuButtons>
        <MenuButtons>
          <MailIcon />
          <span>Mensagens</span>
        </MenuButtons>
        <MenuButtons>
          <LikeIcon />
          <span>Favoritos</span>
        </MenuButtons>
        <MenuButtons className="active">
          <PersonIcon />
          <span>Perfil</span>
        </MenuButtons>
        <Button>
          <span>Tweetar</span>
        </Button>
      </TopSide>
      <BotSide>
        <Avatar />
        <ProfileData>
          <strong>Matheus Lucas</strong>
          <span>@matheus_lucas</span>
        </ProfileData>
        <ExitIcon />
      </BotSide>
    </Container>
  );
}

export default MenuBar;