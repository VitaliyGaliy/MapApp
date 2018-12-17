import React, { Component } from 'react';
import {
  FlatList, Text, View, TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/dist/Feather';
import styles from './styles';
import HeaderButton from '../../components/HeaderButton/HeaderButton';

import { actions } from '../../models/suppliers';

const data = [
  { name: 'Company 1' },
  { name: 'Company 2' },
  { name: 'Company 3' },
  { name: 'Company 4' },
  { name: 'Company 5' },
  { name: 'Company 6' },
  { name: 'Company 7' },
  { name: 'Company 8' },
  { name: 'Company 9' },
];
class CompanyesList extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonsWrapper}>
          <HeaderButton
            text="leverancler"
          />
          <HeaderButton
            text="tags"
          />
          <HeaderButton
            text="productgroepen"
          />
        </View>
        <View
          style={{
            justifyContent: 'center',
          }}
        >
          <TextInput
            style={styles.input}
            inlineImageLeft="search_icon"
          />
          <Feather
            style={{ position: 'absolute', alignSelf: 'flex-end', right: 15 }}
            name="search"
            size={14}
            color="#900"
          />
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={data}
            ItemSeparatorComponent={() => <View style={{ borderTopWidth: 1, borderTopColor: 'black' }} />}
            renderItem={({ item }) => (
              <View style={styles.itemWrapper}>
                <Text>{item.name}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  suppliersList: 22,
});

// SearchScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, actions)(CompanyesList);
