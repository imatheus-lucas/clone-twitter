import React from 'react';

import {
  Container,
  RetTweeted,
  RockeseatIcon,
  Avatar,
  Body,
  Content,
  Header,
  Dot,
  Description,
  ImageContent,
  Icons,
  Status,
  CommentIcon,
  RetweetIcon,
  LikeIcon
} from './styles';

const Tweet: React.FC = () => {
  return (
    <Container>
      <RetTweeted>
        <RockeseatIcon />
         Você retweetou
       </RetTweeted>
      <Body>
        <Avatar />
        <Content>
          <Header>
            <strong>Rockseat</strong>
            <span>@Rockseat</span>
            <Dot />
            <time>27 de jun</time>
          </Header>

          <Description></Description>
          <ImageContent />
          <Icons>
            <Status>
              <CommentIcon />
               18
             </Status>
            <Status>
              <RetweetIcon />
               18
             </Status>
            <Status>
              <LikeIcon />
               999
             </Status>
          </Icons>
        </Content>
      </Body>
    </Container>
  )
}

export default Tweet;