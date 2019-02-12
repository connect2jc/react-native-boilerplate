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

const DetailsScreen = (props) => {
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
          <Title>Details</Title>
        </Body>
        <Right />
      </Header>
      <Content>
        <List>
          <ListItem>
            <Text>Wellcome to Detail screen</Text>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
};
DetailsScreen.propTypes = {
  navigation: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default DetailsScreen;
