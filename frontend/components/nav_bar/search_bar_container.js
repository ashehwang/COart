import { connect } from "react-redux";
import SearchBar from "./search_bar";
import { clearSearch, fetchSearchResult } from '../../actions/search_actions';

const mSTP = (state) => ({
  users: Object.values(state.entities.search),
});

const mDTP = (dispatch) => ({
  clearSearch: () => dispatch(clearSearch()),
  fetchSearchResult: (filter) => dispatch(fetchSearchResult(filter)),
});

export default connect(mSTP, mDTP)(SearchBar);