'use strict';
 
const React = require('react');
const {
  Component,
} = React;

const ReactNative = require('react-native');
const {
  StyleSheet,
  Image,
  View,
  Text,
} = ReactNative;

const styles = require('./<%= name %>.styles');

class <%= upCaseName %> extends Component {

  constructor(props) {
     super(props);
   }
 
  render() {
    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          This is the <%= upCaseName %> Component!
        </Text>

      </View>
    );
  }
};

module.exports = <%= upCaseName %>;
