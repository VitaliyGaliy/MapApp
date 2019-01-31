import React, { Component } from 'react';
import {
  View, FlatList, Dimensions,
} from 'react-native';
import { NavigationEvents } from 'react-navigation';
import Spinner from 'react-native-loading-spinner-overlay';

import CompanyCard from '../CompanyCard/CompanyCard';
import styles from './styles';
import colors from '../../styles/colors';

class HorizontalSlider extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  state = {
    items: [],
    spinner: false,
    autoChangeSlide: false,
  }

  viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  componentDidMount() {
    const { data } = this.props;

    const { spinner } = this.state;
    this.setState({
      items: data.slice(0, 2),
      spinner: !spinner,
    });
  }

  componentWillReceiveProps(nextProps) {
    const { spinner, autoChangeSlide } = this.state;
    const { isSuppliersData } = this.props;
    if (this.props.currentItemIndex !== nextProps.currentItemIndex && !isSuppliersData) {
      this.setState({
        spinner: !spinner,
        autoChangeSlide: !autoChangeSlide,
      });
      this.flatListRef.scrollToIndex({ animated: false, index: nextProps.currentItemIndex });
    }
  }

  onViewableItemsChanged = ({ viewableItems }) => {
    const { currentItemIndex } = this.props;
    const { autoChangeSlide, spinner } = this.state;
    if (viewableItems[0] && viewableItems[0].index === currentItemIndex && autoChangeSlide) {
      this.setState({
        spinner: !spinner,
        autoChangeSlide: !autoChangeSlide,
      });
    }
  };

  keyExtractor = (item, index) => item.id;

  render() {
    const { width } = Dimensions.get('window');

    const { items, spinner, autoChangeSlide } = this.state;
    const { currentItemIndex, isSuppliersData } = this.props;

    return (
      <View style={styles.container}>
        <NavigationEvents
          onDidFocus={() => {
            const { data } = this.props;
            this.setState({
              items: data,
              spinner: false,
            });
          }}
        />
        <Spinner
          visible={spinner}
          color="black"
          overlayColor={autoChangeSlide ? 'transparent' : 'rgba(0, 0, 0, 0.25)'}
          textContent={!autoChangeSlide && 'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        {
          (!!items.length && !isSuppliersData) && (
            <FlatList
              style={{ backgroundColor: colors.blueLight }}
              ref={(ref) => { this.flatListRef = ref; }}
              onViewableItemsChanged={this.onViewableItemsChanged}
              viewabilityConfig={this.viewabilityConfig}
              keyExtractor={this.keyExtractor}
              data={items}
              horizontal
              initialNumToRender={items.length}
              onScrollToIndexFailed={() => { }}
              showsHorizontalScrollIndicator={false}
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
        {
          (!!items.length
            && isSuppliersData) && (
            <CompanyCard
              item={items[currentItemIndex]}
              customWidth={width}
            />
          )
        }
      </View>
    );
  }
}

export default HorizontalSlider;
