import { useContext } from "react";
import { AppContext } from "../context/AppState";

export default function Balance() {
  const { transactions } = useContext(AppContext);
  const total = transactions
    .map((x) => x.amount)
    .reduce((acc, val) => acc + val, 0)
    .toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${total}</h1>
    </>
  );
}
