import * as SearchApiUtil from "../util/search_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const CLEAR_SEARCH = "CLEAR_SEARCH";

const receiveSearchResults = (payload) => ({
  type: RECEIVE_SEARCH_RESULTS,
  payload,
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});

export const fetchSearchResult = (filter) => (dispatch) =>
  SearchApiUtil.fetchSearchResult(filter).then((payload) =>
    dispatch(receiveSearchResults(payload))
  );