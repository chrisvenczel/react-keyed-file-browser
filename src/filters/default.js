import PropTypes from 'prop-types'
import React from 'react'

class Filter extends React.Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    updateFilter: PropTypes.func,
    //browserType: PropTypes.string
  }

  handleFilterChange = (event) => {
    const newValue = event.target.value
    this.props.updateFilter(newValue)
  }

  render() {
    return (
      <input
        type="search"
        placeholder={`Search ${/*this.props.browserType === 'sensor' ? 'Sensors' : this.props.browserType === 'sample' ? */'Samples' /*: ''*/}`}
        value={this.props.value}
        onChange={this.handleFilterChange}
      />
    )
  }
}

export default Filter
