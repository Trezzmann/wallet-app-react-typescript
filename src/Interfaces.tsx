import { Dispatch } from "react";

export interface AppStateInterface {
  transactions: { id: number; text: string; amount: number }[];
  addTransaction: (item: Transaction) => void;
  dispatch?: Dispatch<any>;
}

export interface Action {
  type: string;
  payload: any;
}

export interface Transaction {
  id: number;
  text: string;
  amount: number;
}
