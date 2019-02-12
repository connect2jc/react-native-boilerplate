import React from 'react';
import { Item, Input, Icon } from 'native-base';
import PropTypes from 'prop-types';

const UIText = (props) => {
  const { text, iconName, ...other } = props;
  const iconCompo = iconName !== null ? <Icon active name={iconName} /> : null;
  return (
    <Item>
      {iconCompo}
      <Input placeholder={text} {...other} />
    </Item>
  );
};

UIText.defaultProps = {
  iconName: null,
};
UIText.propTypes = {
  text: PropTypes.string.isRequired,
  iconName: PropTypes.string,
};

export default UIText;
