import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  txtColor: {
    color: Platform.OS === 'ios' ? '#000' : '#fff',
  },
});

export default styles;
