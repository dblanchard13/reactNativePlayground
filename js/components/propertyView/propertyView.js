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
  TouchableHighlight,
  ListView,
  Text,
} = ReactNative;

const styles = require('./propertyView.styles');

class PropertyView extends Component {
 
  render() {
    const property = this.props.property;
    let stats = property.bedroom_number + ' bed ' + property.property_type;
    if (property.bathroom_number) {
      stats += ', ' + property.bathroom_number + ' ' + (property.bathroom_number > 1
        ? 'bathrooms' : 'bathroom');
    }
 
    const price = property.price_formatted.split(' ')[0];
 
    return (
      <View style={styles.container}>
        <Image style={styles.image}
            source={require('../../../resources/images/house@3x.png')} />
        <View style={styles.heading}>
          <Text style={styles.price}>£{price}</Text>
          <Text style={styles.title}>{property.title}</Text>
          <View style={styles.separator}/>
        </View>
        <Text style={styles.description}>{stats}</Text>
        <Text style={styles.description}>{property.summary}</Text>
      </View>
    );
  }
};

module.exports = PropertyView;
