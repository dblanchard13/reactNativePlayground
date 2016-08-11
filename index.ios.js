'use strict';

const React = require('react');
const ReactNative = require('react-native');

const {
  Component,
} = React;


const {
  NavigatorIOS,
  AppRegistry,
  StyleSheet,
  Text,
} = ReactNative;

const SearchPage = require('./js/components/searchPage/searchPage');

const styles = StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  }
});

class PropertyFinderApp extends React.Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Property Finder',
          component: SearchPage,
        }}/>
    );
  }
}

AppRegistry.registerComponent('PropertyFinder', () => PropertyFinderApp);
