import { createContext, useReducer, ReactNode } from "react";
import { AppStateInterface } from "../Interfaces";
import { appReducer } from "./AppReducer";

const initState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 }
  ]
};

export const AppContext = createContext<AppStateInterface>(initState);

export default function AppStateProvider({
  children
}: {
  children: ReactNode;
}) {
  const [state, dispatch] = useReducer(appReducer, initState);
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
}
