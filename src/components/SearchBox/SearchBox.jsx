import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Select } from 'antd';
import SeacrhResultCard from '../SeacrhResultCard/SearchResultCard';
import { fetchLocations as fetchLocationsAction } from '../../actions/index';
import 'antd/dist/antd.css';
import styles from './SearchBoxStyles.module.scss';

const { Option } = Select

class SearchInput extends Component {

  handleSearch = value => {
    if(value.length === 0 || value.length === 0) {
      return;
    }
    this.props.searchInput(value)
  }

  testFunc = () => {
    console.log('called')
  }


  setValue = () => {
    this.setState({
      value: 'selected'
    });
  }

  render() {
    const options = this.props.locations.map(location => (
        <Option
          className={styles.DropdownItem}
          value="Yiminghe">
          {<SeacrhResultCard location={location}/>}
        </Option>
      )
    );
    return (
      <Select
        showSearch
        placeholder="city, airport, station, region, district..."
        className={styles.SearchBox}
        defaultActiveFirstOption={false}
        showArrow={false}
        filterOption={false}
        onSearch={this.handleSearch}
        onChange={this.handleChange}
        notFoundContent={null}
        onSelect={this.setValue}
        loading={this.props.isLoading}
      >
        {options}
      </Select>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  searchInput: searchTerm => dispatch(fetchLocationsAction(searchTerm)),
});

const mapStateToProps = state => ({
  isLoading: state.loactionsData.isLoading,
  locations: state.loactionsData.locations,
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchInput);