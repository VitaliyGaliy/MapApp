import React from 'react';
import { connect } from 'react-redux';
import { setItemIndex } from '../../models/map';

import MainComponent from '../../components/DetailsComponent/MainComponent';

const SearchResultScreen = ({
  searchList, currentEveryHundredMeterPosition, ...props
}) => (
  <MainComponent
      items={searchList.items}
      currentEveryHundredMeterPosition={currentEveryHundredMeterPosition}
      {...props}
    />
);
const mapStateToProps = state => ({
  searchList: state.search.searchList,
  currentItemIndex: state.map.currentItemIndex,
  currentEveryHundredMeterPosition: state.map.currentEveryHundredMeterPosition,
});

// SearchListScreen.propTypes = {
//     navigation: PropTypes.object.isRequired,
// };
export default connect(mapStateToProps, { setItemIndex })(SearchResultScreen);
