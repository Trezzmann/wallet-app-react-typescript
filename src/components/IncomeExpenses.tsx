import { useContext } from "react";
import { AppContext } from "../context/AppState";

export default function IncomeExpenses() {
  const { transactions } = useContext(AppContext);

  const income = transactions
    .filter((x) => x.amount > 0)
    .reduce((acc, val) => acc + val.amount, 0)
    .toFixed(2);

  const expense = transactions
    .filter((x) => x.amount < 0)
    .reduce((acc, val) => acc + val.amount * -1, 0)
    .toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +${income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          -${expense}
        </p>
      </div>
    </div>
  );
}
