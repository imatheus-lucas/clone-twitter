import React from 'react';

import { Container, Banner, Avatar, EditButton, ProfileData, LocationIcon, CakeIcon, Followage } from './styles';
import Feed from '../Feed'
const ProfilePage: React.FC = () => {

  return (
    <Container>
      <Banner>
        <Avatar />
      </Banner>
      <ProfileData>
        <EditButton outline>Editar Perfil</EditButton>
        <h1>Matheus Lucas</h1>
        <h2>@matheus</h2>
        <p>Developer at <a href="https://github.com">@rockseat</a></p>
        <ul>
          <li>
            <LocationIcon />
              São Paulo, Brasil
           </li>
          <li>
            <CakeIcon />
             Nascido(a) em 12 de abril de 2000
           </li>
        </ul>
        <Followage>
          <span>seguinte <strong>94</strong></span>
          <span><strong>967 </strong> seguidores</span>
        </Followage>
      </ProfileData>
      <Feed />
    </Container>
  );
}

export default ProfilePage;