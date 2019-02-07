import React, { Component } from 'react';
import {
  View, Dimensions, StyleSheet, ActivityIndicator,
} from 'react-native';
import { RecyclerListView, DataProvider } from 'recyclerlistview';
import PropTypes from 'prop-types';
import { LayoutUtil } from './LayoutUtil';
import CompanyCard from '../CompanyCard/CompanyCard';

export default class ScrollList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProvider: new DataProvider((r1, r2) => false),
      // r1.name !== r2.name || (r1.name === r2.name && r1.selected !== r2.selected
      layoutProvider: LayoutUtil.getLayoutProvider(2),
      count: 0,
      extendedState: {
        ids: [],
      },
    };
    this.inProgressNetworkReq = false;
  }

  componentWillMount() {
    const { items } = this.props;
    this.fetchMoreData(items);
  }

  componentWillReceiveProps(nextProps) {
    const curItems = this.props.items;
    const nextItems = nextProps.items;
    const { currentIndex } = nextProps;

    if (currentIndex || currentIndex === 0) {
      this.recyclerRef.scrollToIndex(nextProps.currentIndex);
    }
    // if (nextItems.length > curItems.length) {
    const ids = this.state.extendedState.ids.concat('123');
    this.setState({ extendedState: { ids } });
    this.fetchMoreData(nextItems);
    // }
  }

  rowRenderer = (type, data) => {
    const { width } = Dimensions.get('window');
    const newObj = data.isSelected ? { ...data } : data; // make new object if it has updated otherwise there will be no changes in child component

    return (
      <CompanyCard
        item={newObj}
        customWidth={width}
      />
    );
  }

  viewChangeHandler = (viewType) => {
    // We will create a new layout provider which will trigger context preservation maintaining the first visible index
    this.setState({
      layoutProvider: LayoutUtil.getLayoutProvider(viewType),
    });
  };

  handleListEnd = () => {
    const { handleLoadMore } = this.props;

    if (handleLoadMore) {
      handleLoadMore();
      // This is necessary to ensure that activity indicator inside footer gets rendered. This is required given the implementation I have done in this sample
      this.setState({});
    }
  };

  async fetchMoreData(items) {
    const { dataProvider } = this.state;
    this.setState({
      dataProvider: dataProvider.cloneWithRows(
        items,
      ),
      count: items.length,
    });
  }


  render() {
    // Only render RLV once you have the data
    const { isHorizontal } = this.props;
    const {
      count, dataProvider, layoutProvider, handleLoadMore, extendedState,
    } = this.state;
    return (
      <View style={styles.container}>
        {count > 0
          ? (
            <RecyclerListView
              ref={(RecyclerListView) => { this.recyclerRef = RecyclerListView; }}
              style={{ backgroundColor: 'white' }}
              // contentContainerStyle={{ margin: 2, width: '100%' }}
              onEndReached={this.handleListEnd}
              dataProvider={dataProvider}
              layoutProvider={layoutProvider}
              rowRenderer={this.rowRenderer}
              isHorizontal={isHorizontal}
              forceNonDeterministicRendering
              optimizeForInsertDeleteAnimations
              extendedState={{ ids: [] }}
            />
          )
          : null}
      </View>
    );
  }
}

ScrollList.propTypes = {
  isHorizontal: PropTypes.bool,
  handleLoadMore: PropTypes.func,
  currentIndex: PropTypes.number,
  items: PropTypes.array.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: 1,
    minWidth: 1,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});
