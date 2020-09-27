import React from "react";
import { Link, withRouter } from "react-router-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { filter: "", showSearchResults: false };
    this.updateFilter = this.updateFilter.bind(this);
    this.performSearch = this.performSearch.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  updateFilter(e) {
    e.preventDefault();
    this.setState({ filter: e.target.value }, () => this.performSearch());
  }

  performSearch() {
    if (this.state.filter) {
      this.props.fetchSearchResult({ filter: this.state.filter });
    } else {
      this.props.clearSearch();
    }
  }

  // handleClick(userId) {
  //   this.props.history.push(`/profile/${userId}`);
  //   this.setState({ filter: "" });
  // }

  // showSearchResults() {
  //   if (!this.state.showSearchResults) {
  //     return null;
  //   } else if (!this.state.filter) {
  //     return null;
  //   } else if (this.state.filter && this.props.users.length === 0) {
  //     return (
  //       <div className="search-result-box">
  //         <div className="search-result">No matching user</div>
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div className="search-result-box">
  //         {this.props.users.map((user) => {
  //           return (
  //             <div
  //               className="search-result"
  //               key={user.id}
  //               onMouseDown={(e) => this.handleClick(user.id)}
  //             >
  //               <img
  //                 src={
  //                   user.profilePhotoUrl
  //                     ? user.profilePhotoUrl
  //                     : "https://i.ibb.co/DRTq0KR/5cc28e190d41d2738de6.jpg"
  //                 }
  //                 className="small-profile-pic"
  //               />
  //               <p>
  //                 {user.first_name} {user.last_name}
  //               </p>
  //             </div>
  //           );
  //         })}
  //       </div>
  //     );
  //   }
  // }

  render() {
    return (
      <div className="search-bar-container">
        <div className="searchbar">
          <form className="searchform">
            {/* <Link to="/">
              <i className="fab fa-facebook"></i>
            </Link> */}
            <input
              type="text"
              placeholder="search CoTell"
              onChange={this.updateFilter}
              value={this.state.filter}
              onFocus={(e) => this.setState({ showSearchResults: true })}
              onBlur={(e) => this.setState({ showSearchResults: false })}
            />
          </form>
        </div>
        {/* {this.showSearchResults()} */}
      </div>
    );
  }
}

export default withRouter(SearchBar);
