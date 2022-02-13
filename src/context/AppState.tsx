import { createContext, useReducer, ReactNode } from "react";
import { AppStateInterface, Transaction } from "../Interfaces";
import { appReducer } from "./AppReducer";

const initState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 }
  ],
  addTransaction: () => {},
  deleteTransaction: () => {}
};

export const AppContext = createContext<AppStateInterface>(initState);

export default function AppStateProvider({
  children
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(appReducer, initState);
  function addTransaction(item: Transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: item
    });
  }

  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id
    });
  }

  return (
    <AppContext.Provider
      value={{ ...state, addTransaction, deleteTransaction }}
    >
      {children}
    </AppContext.Provider>
  );
}
