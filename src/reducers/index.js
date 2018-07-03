import { LOAD_STORIES } from "../actions/index";
import { CLEAR_STORIES } from "../actions/index";

const items = [
  {
    title: "abc"
  },
  {
    title: "abc"
  },
  {
    title: "abc"
  }
];

const initialState = {
  items: []
};

export default function storiesReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STORIES:
      return {
        items: [...items]
      };
    case CLEAR_STORIES:
      return { ...initialState };
    default:
      return state;
  }
}
