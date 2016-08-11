'use strict';
 
const React = require('react');
const {
  Component,
} = React;

const ReactNative = require('react-native');
const {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableHighlight,
  ActivityIndicator,
  Image,
} = ReactNative;


const styles = require('./SearchPage.styles');

const Utils = require('../../utils/utils');
const {
  urlForQueryAndPage,
} = Utils;

class SearchPage extends Component {

  constructor(props) {
    super(props);


    this.state = {
      searchString: 'london',
      isLoading: false,
      message: '',
    };
  }

  _handleResponse(res){
    this.setState({ isLoading: false , message: '' });
    if (res.application_response_code.substr(0, 1) === '1') {
      console.log('Properties found: ' + res.listings.length);
    } else {
      this.setState({ message: 'Location not recognized; please try again.'});
    }
  }

  _executeQuery(query) {
    this.setState({ isLoading: true });

    fetch(query)
      .then(response => response.json())
      .then(json => this._handleResponse(json.response))
      .catch(error =>
         this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
       }));
  }
   
  onSearchPressed() {
    const query = urlForQueryAndPage('place_name', this.state.searchString, 1);
    this._executeQuery(query);
  }

  onSearchTextChanged(event) {
    this.setState({ searchString: event.nativeEvent.text });
  };

  render() {
    const spinner = this.state.isLoading ?
      <ActivityIndicator size='large'/> :
      <View/>;

    return (
      <View style={styles.container}>

        <Text style={styles.description}>
          Search for houses to buy!
        </Text>

        <Text style={styles.description}>
          Search by place-name, postcode or search near your location.
        </Text>

        <View style={styles.flowRight}>

          <TextInput
            style={styles.searchInput}
            placeholder='Search via name or postcode'
            onChange={this.onSearchTextChanged.bind(this)}
            value={this.state.searchString}
            />

          <TouchableHighlight style={styles.button}
              underlayColor='#99d9f4'
              onPress={this.onSearchPressed.bind(this)}
            >
            <Text style={styles.buttonText}>
              Go
            </Text>
          </TouchableHighlight>
        </View>

        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Location</Text>
        </TouchableHighlight>

        <Image source={require('../../../resources/images/house.png')} style={styles.image}/>

        <Text style={styles.description}>{this.state.message}</Text>


        {spinner}
      </View>
    );
  }

};

module.exports = SearchPage;
