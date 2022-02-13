export interface AppStateInterface {
  transactions: Transaction[];
}

export interface Action {
  type: string;
  payload: number | { id: number; text: string; amount: number };
}

export interface Transaction {
  id: number;
  text: string;
  amount: number;
}
