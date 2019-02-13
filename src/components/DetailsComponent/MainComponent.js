import React, { Component } from 'react';
import MapComponent from './MapComponent';
import ListComponent from './ListComponent';
import { getDistance } from '../Map/MapUtils';

class MainComponent extends Component {
  constructor(props) {
    super();
    this.state = {
      componentType: props.componentType,
      singleItemSelected: null,
      items: props.items,
    };
  }


  componentDidMount() {
    const { currentEveryHundredMeterPosition, items } = this.props;
    console.log('componentDidMount');
    console.log('this.props', this.props);

    this.setDistanceToItems(currentEveryHundredMeterPosition, items);
  }

  componentWillReceiveProps(nextProps) {
    const { currentEveryHundredMeterPosition, items } = nextProps;
    console.log('nextProps', nextProps);

    this.setDistanceToItems(currentEveryHundredMeterPosition, items);

    // if (currentEveryHundredMeterPosition && currentEveryHundredMeterPosition.latitude) {
    //   const { latitude, longitude } = currentEveryHundredMeterPosition;
    //   const itemsWithDistance = items.map(item => ({
    //     ...item,
    //     distanceToUser: getDistance(item.lat, item.lng, latitude, longitude),
    //   }));
    //   this.setState({
    //     items: itemsWithDistance,
    //   });
    // } else {
    //   this.setState({
    //     items,
    //   });
    // }
  }

  setDistanceToItems = (currentEveryHundredMeterPosition, items) => {
    console.log('currentEveryHundredMeterPosition', currentEveryHundredMeterPosition);

    if (currentEveryHundredMeterPosition && currentEveryHundredMeterPosition.latitude) {
      const { latitude, longitude } = currentEveryHundredMeterPosition;
      const itemsWithDistance = items.map(item => ({
        ...item,
        distanceToUser: getDistance(item.lat, item.lng, latitude, longitude),
      }));
      this.setState({
        items: itemsWithDistance,
      });
    } else {
      this.setState({
        items,
      });
    }
  }

  changeComponent = (type, singleItemSelected = null) => {
    this.setState({
      componentType: type,
      singleItemSelected,
    });
  }

  render() {
    const { componentType, singleItemSelected, items } = this.state;
    console.log('MainComponent');

    const Comp = (componentType === 'map')
      ? (
        <MapComponent
          changeComponent={this.changeComponent}
          singleItemSelected={singleItemSelected}
          {...this.props}
          items={items}

        />
      )
      : (
        <ListComponent
          changeComponent={this.changeComponent}
          singleItemSelected={singleItemSelected}
          setIndex={this.setIndex}
          {...this.props}
          items={items}
        />
      );

    return Comp;
  }
}
export default MainComponent;
