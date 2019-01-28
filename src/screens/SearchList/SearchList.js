import React, { Component } from 'react';
import {
  FlatList, Text, View, TextInput, TouchableHighlight,
} from 'react-native';
import { connect } from 'react-redux';
import Feather from 'react-native-vector-icons/dist/Feather';
import styles from './styles';
import HeaderButton from '../../components/HeaderButton/HeaderButton';

import { actions } from '../../models/search';

class SearchList extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  state = {
    searchVal: '',
    nameActiveBtn: null,
    type: 'b_name',
    page: 1,
  }

  componentDidMount() {
    const { setSearchList } = this.props;
    const { searchVal, type, page } = this.state;
    setSearchList(searchVal, type, page);
  }

  onSearchValueChange = (searchVal) => {
    const { setSearchList } = this.props;
    const { type } = this.state;

    this.setState({ searchVal, page: 1 }, () => {
      setSearchList(searchVal, type, 1);
    });
  }

  changeActiveBtn = (clickedBtn, type) => {
    const { setSearchList } = this.props;
    const {
      nameActiveBtn, page, searchVal,
    } = this.state;
    if (clickedBtn !== nameActiveBtn) {
      this.setState(
        {
          nameActiveBtn: clickedBtn,
          page: 1,
          type,
        },
        () => setSearchList(searchVal, type, page),
      );
    }
  }

  handleLoadMore = () => {
    const { type, page, searchVal } = this.state;
    const { loadMoreItems, searchList: { items, count } } = this.props;
    if (items.length < count) {
      this.setState(
        {
          page: page + 1,
          type,
        },
        () => loadMoreItems(searchVal, type, page + 1),
      );
    }
  }

  keyExtractor = (item, index) => item.id;

  render() {
    const { searchList: { items }, navigation: { push, navigate } } = this.props;
    const { searchVal, nameActiveBtn } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.buttonsWrapper}>
          <HeaderButton
            isActive={nameActiveBtn}
            handler={() => this.changeActiveBtn('leverancler', 'b_tag')}
            text="leverancler"
          />
          <HeaderButton
            isActive={nameActiveBtn}
            handler={() => this.changeActiveBtn('tags', 'b_ptag')}
            text="tags"
          />
          <HeaderButton
            isActive={nameActiveBtn}
            handler={() => this.changeActiveBtn('productgroepen', 'b_name')}
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
            value={searchVal}
            onChangeText={text => this.onSearchValueChange(text)}
          />
          <TouchableHighlight
            onPress={() => {
              console.log('TouchableHighlight');
              push('SearchResult');
            }}
          >
            <Feather
              style={{ alignSelf: 'flex-end', right: 15, top: 0 }}
              name="search"
              size={50}
              color="#900"
            />
          </TouchableHighlight>
        </View>

        <View style={styles.listContainer}>
          <FlatList
            data={items}
            keyExtractor={this.keyExtractor}
            ItemSeparatorComponent={() => <View style={{ borderTopWidth: 1, borderTopColor: 'black' }} />}
            renderItem={({ item }) => (
              <View style={styles.itemWrapper}>
                <Text>{item.c_name}</Text>
              </View>
            )}
            onEndReached={this.handleLoadMore}
            onEndReachedThreshold={0.01}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  searchList: state.search.searchList,
});

// SearchScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, actions)(SearchList);
