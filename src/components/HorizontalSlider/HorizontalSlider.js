import React, { Component } from 'react';
import {
  Platform, StyleSheet, Text, View, FlatList, Dimensions,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';

import CompanyCard from '../CompanyCard/CompanyCard';
import styles from './styles';

class HorizontalSlider extends Component {
  static navigationOptions = {
    title: 'Search',
  }


  state = {
    currentItemIndex: 0,
    items: [],
    spinner: false,
  }

  componentDidMount() {
    const { items } = this.props;
    this.setState({
      items: items.slice(0, 2),
      spinner: !this.state.spinner,
    });
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.currentItemIndex !== nextProps.currentItemIndex) {
      this.flatListRef.scrollToIndex({ animated: false, index: nextProps.currentItemIndex });
    }
  }


  keyExtractor = (item, index) => item.id;


  render() {
    const { width } = Dimensions.get('window');
    const { items } = this.state;
    // const { currentItemIndex } = this.state;

    return (
      <View style={styles.container}>
        <NavigationEvents
          onDidFocus={() => {
            const { items } = this.props;
            this.setState({
              items,
              spinner: !this.state.spinner,
            });
          }}
        />
        <Spinner
          visible={this.state.spinner}
          textContent="Loading..."
          textStyle={styles.spinnerTextStyle}
        />
        {
          !!items.length && (
            <FlatList
              ref={(ref) => { this.flatListRef = ref; }}
              keyExtractor={this.keyExtractor}
              data={items}
              horizontal
              initialNumToRender={items.length}
              onScrollToIndexFailed={() => { }}
              // getItemLayout={this.getItemLayout}
              ItemSeparatorComponent={() => <View style={{ margin: -1 }} />}
              renderItem={({ item, index }) => (
                <CompanyCard
                  item={item}
                  customWidth={width}
                />
              )}
            />
          )
        }
      </View>
    );
  }
}

const mapStateToProps = state => ({
  currentItemIndex: state.map.currentItemIndex,
});

// SearchScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps)(HorizontalSlider);
