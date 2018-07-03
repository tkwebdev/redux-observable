import React from "react";
import { connect } from "react-redux";

import StoryList from "./StoryList";
import { loadStories } from "../actions/index";
import { clear } from "../actions/index";

const Stories = props => (
  <div>
    <button type="button" onClick={props.loadStories}>
      Load Stories
    </button>
    <button type="button" onClick={props.clear}>
      Clear
    </button>
    <StoryList {...props} />
  </div>
);

function mapState(state) {
  return state;
}

function mapDispatch(dispatch) {
  return {
    loadStories: () => dispatch(loadStories()),
    clear: () => dispatch(clear())
  };
}

export default connect(mapState, mapDispatch)(Stories);
