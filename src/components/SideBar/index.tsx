import React from 'react';
import StickyBox from 'react-sticky-box'
import { Container, SearcWrapper, SearchInput, SearchIcon, Body } from './styles';
import List from '../List'
import FollowSuggestion from '../FollowSuggestion'
import News from '../News'
const SideBar: React.FC = () => {
  return (
    <Container>
      <SearcWrapper>
        <SearchInput placeholder="Search" />
        <SearchIcon />
      </SearcWrapper>
      <StickyBox>
        <Body>
          <List
            title='Talves você curta'
            elements={[
              <FollowSuggestion
                name="Luiz Barbosa"
                nickname="@luiz"
              />,
              <FollowSuggestion
                name="Luke Morales"
                nickname="@luke"
              />,
              <FollowSuggestion
                name="Camila"
                nickname="@camila"
              />
            ]}
          />
          <List
            title='Talves você curta'
            elements={[
              <News />,
              <News />,
              <News />,
              <News />,
            ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;