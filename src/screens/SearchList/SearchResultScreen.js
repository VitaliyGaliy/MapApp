import React from 'react';
import { connect } from 'react-redux';
import { setItemIndex } from '../../models/map';

import MainComponent from '../../components/DetailsComponent/MainComponent';

const SearchResultScreen = ({
  searchList, ...props
}) => (
  <MainComponent items={searchList.items} {...props} />
);
const mapStateToProps = state => ({
  searchList: state.search.searchList,
  currentItemIndex: state.map.currentItemIndex,
});

// SearchListScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, { setItemIndex })(SearchResultScreen);
