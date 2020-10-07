import React from "react";
import { Link, withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: "", showSearchResults: false };
    this.updateFilter = this.updateFilter.bind(this);
    this.performSearch = this.performSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  updateFilter(e) {
    e.preventDefault();
    this.setState({ filter: e.target.value }, () => this.performSearch());
  }

  performSearch() {
    if (this.state.filter.length > 2) {
      this.props.fetchSearchResult({ filter: this.state.filter });
    } else {
      this.props.clearSearch();
    }
  }

  handleClick(charId) {
    this.props.history.push(`/character/${charId}`);
    this.setState({ filter: "" });
  }

  showSearchResults() {
    if (!this.state.showSearchResults) {
      return null;
    } else if (!this.state.filter) {
      return null;
    } else if (this.state.filter && this.state.filter.length < 3) {
      return (
        <div className="search-result-box">
          <div className="search-result"> minimum 3 characters needed for search</div>
        </div>
      )
    } else if (this.state.filter && this.state.filter.length > 2 && this.props.characters.length === 0) {
      return (
        <div className="search-result-box">
          <div className="search-result">No Matching Character</div>
        </div>
      );
    } else {
      return (
        <div className="search-result-box">
          {this.props.characters.map((character) => {
            return (
              <div
                className="search-result hover"
                key={character.id}
                onMouseDown={(e) => this.handleClick(character.id)}
              >
                <img
                  src={
                    character.headPhotoUrl
                  }
                  className="search-photo"
                />
                <p>
                  {character.first_name} {character.last_name}
                </p>
                <p className="search-creator">
                  {character.creator.nick_name} <span>@{character.creator.user_name}</span>
                </p>
              </div>
            );
          })}
        </div>
      );
    }
  }

  render() {
    return (
      <div className="search-bar-container">
        <div className="searchbar">
          <form className="searchform">
            <input
              type="text"
              placeholder="search Characters.."
              onChange={this.updateFilter}
              value={this.state.filter}
              onFocus={(e) => this.setState({ showSearchResults: true })}
              onBlur={(e) => this.setState({ showSearchResults: false })}
            />
          </form>
        </div>
        {this.showSearchResults()}
      </div>
    );
  }
}

export default withRouter(SearchBar);
