export interface AppStateInterface {
  transactions: {
    id: number;
    text: string;
    amount: number;
  }[];
}

export interface Action {
  type: string;
  payload: number | { id: number; text: string; amount: number };
}
