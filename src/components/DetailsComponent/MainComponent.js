import React, { Component } from 'react';
import MapComponent from './MapComponent';
import ListComponent from './ListComponent';

class MainComponent extends Component {
  state = {
    componentType: this.props.componentType,
    singleItemSelected: null,
  }

  changeComponent = (type, singleItemSelected = null) => {
    this.setState({
      componentType: type,
      singleItemSelected,
    });
  }

  render() {
    const { componentType, singleItemSelected } = this.state;

    const Comp = (componentType === 'map')
      ? (
        <MapComponent
          changeComponent={this.changeComponent}
          singleItemSelected={singleItemSelected}
          {...this.props}
        />
      )
      : (
        <ListComponent
          changeComponent={this.changeComponent}
          singleItemSelected={singleItemSelected}
          setIndex={this.setIndex}
          {...this.props}
        />
      );

    return Comp;
  }
}
export default MainComponent;
