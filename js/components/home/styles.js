
const React = require('react-native');

const { StyleSheet, Platform } = React;

export default {
  container: {
    flex: 1,
    width: null,
    height: null,
  },
  roundedButton: {
    alignSelf: 'center',
    marginTop: 40,
    backgroundColor: '#00c497',
    borderRadius: 90,
    width: 65,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    color: 'red',
  },
  text: {
    marginBottom: 10,
    fontSize: 18,
  },
  closeIcon: {
    fontSize: (Platform.OS === 'ios') ? 50 : 40,
    alignSelf: 'center',
  },
};
