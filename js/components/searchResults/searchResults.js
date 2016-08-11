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

const styles = require('./searchResults.styles');

const PropertyView = require('../propertyView/propertyView');

class SearchResults extends Component {

  constructor(props) {
     super(props);
     const dataSource = new ListView.DataSource(
       {rowHasChanged: (r1, r2) => r1.guid !== r2.guid});
     this.state = {
       dataSource: dataSource.cloneWithRows(this.props.listings)
     };
   }

   rowPressed(propertyGuid) {
     const property = this.props.listings.filter(prop => prop.guid === propertyGuid)[0];
     this.props.navigator.push({
      title: 'Property',
      component: PropertyView,
      passProps: { property },
     });
   }
  
   renderRow(rowData, sectionID, rowID) {
     const price = rowData.price_formatted.split(' ')[0];
    
     return (
       <TouchableHighlight onPress={() => this.rowPressed(rowData.guid)}
           underlayColor='#dddddd'>
         <View>
           <View style={styles.rowContainer}>
             <Image style={styles.thumb} source={require('../../../resources/images/house.png')} />

             <View  style={styles.textContainer}>
               <Text style={styles.price}>£{price}</Text>
               <Text style={styles.title}
                     numberOfLines={1}>{rowData.title}</Text>
             </View>
           </View>

           <View style={styles.separator}/>
         </View>
       </TouchableHighlight>
     );
   }
  
   render() {
     return (
       <ListView
         dataSource={this.state.dataSource}
         renderRow={this.renderRow.bind(this)}/>
     );
   }
};

module.exports = SearchResults;
