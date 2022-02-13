import { ChangeEvent, SyntheticEvent, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../context/AppState";

export default function AddTransaction() {
  const { addTransaction } = useContext(AppContext);

  const [text, setText] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);
  function handleSubmit(e: SyntheticEvent) {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount
    };
    addTransaction(newTransaction);
    setAmount(0);
    setText("");
  }
  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setText(e.target.value)
            }
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            value={amount}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              if (e.target.value) setAmount(e.target.valueAsNumber);
            }}
            type="number"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
}
