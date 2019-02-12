import React from 'react';
import PropTypes from 'prop-types';
import {
  Text, Container, List, ListItem, Content,
} from 'native-base';
// import { NavigationActions } from 'react-navigation';

const routes = [
  {
    route: 'Home',
    caption: 'Home',
  },
  {
    route: 'Details',
    caption: 'Details',
  },
  {
    route: 'Login',
    caption: 'Log out',
  },
];

const SideBar = (props) => {
  const { navigation } = props;
  return (
    <Container>
      <Content>
        <List
          style={{ marginTop: 45 }}
          dataArray={routes}
          renderRow={routeItem => (
            <ListItem
              button
              onPress={() => {
                navigation.navigate(routeItem.route);
              }}
            >
              <Text>{routeItem.caption}</Text>
            </ListItem>
          )}
        />
      </Content>
    </Container>
  );
};

SideBar.propTypes = {
  navigation: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default SideBar;
