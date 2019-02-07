import React, { Component, Fragment } from 'react';
import {
  View, FlatList, Dimensions, Text,
} from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import Slider from '../ScrollList';

import CompanyCard from '../CompanyCard/CompanyCard';
import styles from './styles';
import colors from '../../styles/colors';

class HorizontalSlider extends Component {
  static navigationOptions = {
    title: 'Search',
  }

  constructor(props) {
    super(props);
    const { singleItemSelected } = this.props;

    this.state = {
      items: [],
      singleItemSelected,
      spinner: true,
      autoChangeSlide: false,
      currentIndex: 0,
    };
    this.recyclerRef = React.createRef();
  }

  componentDidMount() {
    const { data, singleItemSelected } = this.props;

    const { spinner } = this.state;
    setTimeout(() => {
      this.setState({
        items: singleItemSelected || data,
        spinner: !spinner,
      });
    }, 100);
  }

  componentWillReceiveProps(nextProps) {
    const { spinner, autoChangeSlide } = this.state;
    const { singleItemSelected } = this.props;

    if (this.props.currentItemIndex !== nextProps.currentItemIndex && !singleItemSelected) {
      this.setState({
        // spinner: !spinner,
        // autoChangeSlide: !autoChangeSlide,
        currentIndex: nextProps.currentItemIndex,
      });
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

  render() {
    const { width } = Dimensions.get('window');

    const {
      items, spinner, autoChangeSlide, currentIndex,
    } = this.state;
    const {
      currentItemIndex, singleItemSelected, isHorizontal, handleLoadMore,
    } = this.props;

    return (
      <View style={[styles.container,
      { flexDirection: 'row' },
      ]}
      >
        <Spinner
          visible={spinner}
          color="black"
          overlayColor={autoChangeSlide ? 'transparent' : 'rgba(0, 0, 0, 0.25)'}
          textContent={!autoChangeSlide && 'Loading...'}
          textStyle={styles.spinnerTextStyle}
        />
        {
          items.length > 1 && (
            <Fragment>
              {/* needs to set height of whole scrollView */}
              <View style={{ width: 0 }}>
                <CompanyCard
                  item={items[0]}
                />
              </View>
              {/* -------------- */}
              <Slider
                currentIndex={currentIndex}
                setRef={this.recyclerRef}
                items={items}
                isHorizontal={isHorizontal}
                handleLoadMore={handleLoadMore}

              />
            </Fragment>
          )
        }
        {
          !!singleItemSelected && (
            <CompanyCard
              item={items[0]}
              customWidth={width}
            />
          )
        }
      </View>
    );
  }
}

export default HorizontalSlider;
