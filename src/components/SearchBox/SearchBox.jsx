import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Select } from 'antd';
import SeacrhResultCard from '../SeacrhResultCard/SearchResultCard';
import {
  fetchLocations as fetchLocationsAction,
  clearLocations as clearLocationsAction,
  setSelectedLocation as setSelectedLocationAction
} from '../../actions/index';
import 'antd/dist/antd.css';
import styles from './SearchBoxStyles.module.scss';

const { Option } = Select

class SearchInput extends Component {

  handleSearch = value => {
    if(value.length === 0) {
      return;
    }
    if(value.length === 1) {
      return this.props.clearDropDown()
    }
    this.props.searchInput(value)
  };

  setValue = selectedValue => {
   this.props.setLocation(selectedValue)
  };

  render() {

    const { isLocationSelected, selectedLocation, noResults } = this.props;
    let selectedOption = null;
    // Render all options
    const options = this.props.locations.map(location => (
        <Option
          key={location.placeKey}
          className={styles.DropdownItem}
          value={location.name}
        >
          {<SeacrhResultCard  location={location}/>}
        </Option>
      )
    );
    // Single Option element to be displayed when we select an option
    if(isLocationSelected) {
       selectedOption = (<Option className={styles.DropdownItem} value={selectedLocation}>{selectedLocation}</Option>);
    };
    return (
      <Fragment>
        <Select
          showSearch
          placeholder="city, airport, station, region, district..."
          className={styles.SearchBox}
          defaultActiveFirstOption={false}
          showArrow={false}
          filterOption={false}
          onSearch={this.handleSearch}
          notFoundContent={null}
          onSelect={(value) => this.setValue(value)}
          loading={this.props.isLoading}
        >
          {isLocationSelected ? selectedOption : options}
        </Select>
        {noResults ? <p className={styles.NoResults}>No results found.</p>: null}
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchInput: searchTerm => dispatch(fetchLocationsAction(searchTerm)),
  clearDropDown: () => dispatch(clearLocationsAction()),
  setLocation: location => dispatch(setSelectedLocationAction(location))
});

const mapStateToProps = state => ({
  isLoading: state.locationsData.isLoading,
  locations: state.locationsData.locations,
  selectedLocation: state.locationsData.selectedLocation,
  isLocationSelected: state.locationsData.isLocationSelected,
  noResults: state.locationsData.noResults,
});

SearchInput.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  locations: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  selectedLocation: PropTypes.string.isRequired,
  isLocationSelected: PropTypes.bool.isRequired,
  searchInput: PropTypes.func.isRequired,
  clearDropDown: PropTypes.func.isRequired,
  setLocation: PropTypes.func.isRequired,
  noResults: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);