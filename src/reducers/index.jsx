import { combineReducers } from "redux";

import { sideBarState, dropDownState, topDrawerState } from "./SideBarReducer";
import { tableHeading } from "./tableReducer";

export default combineReducers({
  sideBarState,
  dropDownState,
  tableHeading,
  topDrawerState,
});
