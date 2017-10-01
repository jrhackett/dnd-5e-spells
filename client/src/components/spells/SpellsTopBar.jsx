import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Icon } from 'react-fa'
import SpellFiltersContainer from '../../containers/spells/filters/SpellFiltersContainer'
import SpellsSearchBar from './SpellsSearchBar'

class SpellsTopBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      shouldShowFilters: false
    }
  }

  toggleFilters() {
    this.setState({
      shouldShowFilters: !this.state.shouldShowFilters
    })
  }

  render() {
    const { title, numberOfSpells, isLoading, onSearchChange } = this.props
    if(isLoading)
      return null

    return (
      <div>
        <div className="container spells-header">
          <div className="spells-header-left">
            <h1>{ title }</h1>
            <span>{ numberOfSpells } total</span>
          </div>
          <div className="spells-header-right">
            <SpellsSearchBar onTermChange={onSearchChange} />
            <a className="btn btn-default btn-filter" onClick={e => {
                e.preventDefault()
                this.toggleFilters()
              }}
            >
              <span>Filter</span> <Icon name="filter"></Icon>
            </a>
          </div>
        </div>
        <SpellFiltersContainer shouldShow={ this.state.shouldShowFilters } />
      </div>
    )
  }
}

SpellsTopBar.propTypes = {
  title: PropTypes.string.isRequired,
  numberOfSpells: PropTypes.number.isRequired,
  isLoading: PropTypes.bool.isRequired,
  onSearchChange: PropTypes.func.isRequired
}

export default SpellsTopBar
