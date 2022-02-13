import Transaction from "./Transaction";
import { useContext } from "react";
import { AppContext } from "../context/AppState";

export default function TransactionList() {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        <Transaction />
      </ul>
    </>
  );
}
