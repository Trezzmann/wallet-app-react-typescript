import { Transaction } from "../Interfaces";
import { useContext } from "react";
import { AppContext } from "../context/AppState";

export default function TransactionItem({
  transaction
}: {
  transaction: Transaction;
}) {
  const { deleteTransaction } = useContext(AppContext);
  const sign = transaction.amount < 0 ? "-" : "+";
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
}
