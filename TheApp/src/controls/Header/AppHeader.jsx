import React from 'react';
import {
  Header, Left, Body, Right, Button, Icon, Title,
} from 'native-base';
import PropTypes from 'prop-types';

const AppHeader = (props) => {
  const { headerTitle } = props;
  return (
    <Header>
      <Left>
        <Button transparent>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>{headerTitle}</Title>
      </Body>
      <Right>
        <Button transparent>
          <Icon name="menu" />
        </Button>
      </Right>
    </Header>
  );
};

AppHeader.propTypes = {
  headerTitle: PropTypes.string.isRequired,
};
export default AppHeader;
