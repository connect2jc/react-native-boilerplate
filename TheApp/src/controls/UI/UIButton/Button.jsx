import React from 'react';
import { Button, Text } from 'native-base';
import PropTypes from 'prop-types';
import { UIBUTTON_CONST } from '../../../Constants';

const UIButton = (props) => {
  const {
    text, themeType, isTransparent, isBordered, isDisabled, ...other
  } = props;
  return (
    <Button
      light={themeType === UIBUTTON_CONST.TYPE_LIGHT}
      primary={themeType === UIBUTTON_CONST.TYPE_PRIMARY}
      info={themeType === UIBUTTON_CONST.TYPE_INFO}
      warning={themeType === UIBUTTON_CONST.TYPE_WARNING}
      danger={themeType === UIBUTTON_CONST.TYPE_DANGER}
      dark={themeType === UIBUTTON_CONST.TYPE_DARK}
      transparent={isTransparent}
      bordered={isBordered}
      disabled={isDisabled}
      {...other}
    >
      <Text>{text}</Text>
    </Button>
  );
};

UIButton.defaultProps = {
  themeType: UIBUTTON_CONST.TYPE_PRIMARY,
  isTransparent: false,
  isBordered: false,
  isDisabled: false,
};
UIButton.propTypes = {
  text: PropTypes.string.isRequired,
  themeType: PropTypes.oneOf([
    UIBUTTON_CONST.TYPE_LIGHT,
    UIBUTTON_CONST.TYPE_PRIMARY,
    UIBUTTON_CONST.TYPE_SUCCESS,
    UIBUTTON_CONST.TYPE_INFO,
    UIBUTTON_CONST.TYPE_WARNING,
    UIBUTTON_CONST.TYPE_DANGER,
    UIBUTTON_CONST.TYPE_DARK,
  ]),
  isTransparent: PropTypes.bool,
  isBordered: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

export default UIButton;
