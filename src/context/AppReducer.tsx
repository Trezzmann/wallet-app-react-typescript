import { AppStateInterface, Action } from "../Interfaces";

export function appReducer(state: AppStateInterface, action: Action) {
  switch (action.type) {
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload]
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter((x) => x.id !== action.payload)
      };

    default:
      return state;
  }
}
