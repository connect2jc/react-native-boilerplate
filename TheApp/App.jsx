import React from 'react';
import { connect } from 'react-redux';
import { Dimensions } from 'react-native';
import {
  // createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
} from 'react-navigation';
import { loginFunc } from './src/store/actions/login';
import LoginScreen from './src/screens/Login/Login';
import HomeScreen from './src/screens/Home/HomeScreen';
import DetailsScreen from './src/screens/Details/DetailsScreen';
import Sidebar from './src/controls/SideBar/SideBar';

const deviceWidth = Dimensions.get('window').width;

const MyDrawerNavigator = createDrawerNavigator(
  {
    // For each screen that you can navigate to, create a new entry like this:
    Home: {
      // `HomeScreen` is a React component that will be the main content of the screen.
      screen: HomeScreen,
    },
    Details: {
      screen: DetailsScreen,
    },
  },
  {
    drawerWidth: deviceWidth - 50,
    drawerPosition: 'left',
    contentComponent: props => <Sidebar {...props} />,
  },
);
const RootStack = createStackNavigator(
  {
    Login: { screen: LoginScreen },
    Home: { screen: HomeScreen },
    Drawer: { screen: MyDrawerNavigator },
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

const AppScreen = createAppContainer(RootStack);
const mapStateToProps = state => ({
  isLoggedIn: state.login.isLoggedIn,
});

const mapDispatchToProps = dispatch => ({
  onLoginPlace: () => dispatch(loginFunc()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppScreen);
