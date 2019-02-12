import React from 'react';
// import { Image, Platform } from 'react-native';
import {
  Container, Content, Header, Title, Text, View, Icon, Footer, Body,
} from 'native-base';
import PropTypes from 'prop-types';
import styles from './styles';
import ButtonUI from '../../controls/UI/UIButton/Button';
import TextUI from '../../controls/UI/UIText/Text';

const onLogin = (navigation) => {
  navigation.navigate('Drawer');
};
const Login = (props) => {
  const { loginTitle, navigation } = props;
  return (
    <Container>
      <Header style={{ height: 200 }}>
        <Body style={{ alignItems: 'center' }}>
          <Icon name="flash" style={{ fontSize: 104 }} />
          <Title>{loginTitle}</Title>
          <View padder>
            <Text style={styles.txtColor} />
          </View>
        </Body>
      </Header>
      <Content>
        <TextUI iconName="person" text="Username" />
        <TextUI iconName="unlock" text="Password " secureTextEntry />
        <View padder>
          <ButtonUI block text="Login" onPress={() => navigation.navigate('Drawer')} />
        </View>
      </Content>
      <Footer>
        <View padder>
          <Text style={styles.txtColor}>The App</Text>
          {/* <Image
            source={{ uri: '' }}
            style={{ width: 422 / 4, height: 86 / 4 }}
          /> */}
        </View>
      </Footer>
    </Container>
  );
};

Login.defaultProps = {
  loginTitle: 'The App',
};
Login.propTypes = {
  loginTitle: PropTypes.string,
  navigation: PropTypes.any.isRequired, // eslint-disable-line react/forbid-prop-types
  // onLogin: PropTypes.func.isRequired,
};

export default Login;
