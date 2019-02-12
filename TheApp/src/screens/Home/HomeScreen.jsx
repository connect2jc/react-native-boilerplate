import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
} from 'native-base';

const HomeScreen = (props) => {
  const { navigation } = props;
  return (
    <Container>
      <Header>
        <Left>
          <Button transparent>
            <Icon active name="menu" onPress={() => navigation.openDrawer()} />
          </Button>
        </Left>
        <Body>
          <Title>Home</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <List>
          <ListItem>
            <Text>Wellcome to Home</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};
HomeScreen.propTypes = {
  navigation: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};
export default HomeScreen;
