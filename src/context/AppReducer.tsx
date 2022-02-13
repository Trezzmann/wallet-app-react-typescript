import { AppStateInterface, Action } from "../Interfaces";

export function appReducer(state: AppStateInterface, action: Action) {
  switch (action.type) {
    // case "TEST":
    //   break;

    default:
      return state;
  }
}
