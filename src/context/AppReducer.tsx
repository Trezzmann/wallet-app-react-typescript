import { AppStateInterface, Action } from "../Interfaces";

export function appReducer(state: AppStateInterface, action: Action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      console.log("reduce fired");
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };

    default:
      return state;
  }
}
