import Transaction from "./Transaction";
import { useContext } from "react";
import { AppContext } from "../context/AppState";

export default function TransactionList() {
  const { transactions } = useContext(AppContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((x) => (
          <Transaction key={x.id} transaction={x} />
        ))}
      </ul>
    </>
  );
}
