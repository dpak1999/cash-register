/** @format */

import { useState } from 'react';
import CashTable from './CashTable';

const FormInput = () => {
  const [billAmount, setBillAmount] = useState(undefined);
  const [cashGiven, setCashGiven] = useState(undefined);
  const [showCash, setShowCash] = useState(false);
  const [showButton, setShowButton] = useState(true);
  const [status, setStatus] = useState(false);
  const [error, setError] = useState(false);
  const [denomination, setDenomination] = useState([]);
  const [number, setNumber] = useState([]);

  const availableNotes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
  const amountToBeReturned = cashGiven - billAmount;

  function calculateChange(amount) {
    const number = [];
    const denomination = [];

    for (let i = 0; i < availableNotes.length; i++) {
      const numberOfNotes = Math.trunc(amount / availableNotes[i]);
      amount = amount % availableNotes[i];
      denomination.push(availableNotes[i]);
      number.push(numberOfNotes);
    }

    if (amountToBeReturned > 0) {
      setDenomination(denomination);
      setNumber(number);
      setStatus(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  return (
    <>
      <div className="text-center mt-6">
        <h5>Please enter the bill amount</h5>
        <input
          type="number"
          value={billAmount}
          onChange={(e) => setBillAmount(e.target.value)}
          placeholder="Enter the total bill amount"
          className="w-72 h-6 mt-2 p-5 outline-none rounded border border-purple-500"
        />
        <br />
        {showButton && (
          <button
            onClick={() => {
              setShowCash(true);
              setShowButton(false);
            }}
            className="mt-4 border border-purple-600 rounded px-4 py-1 hover:bg-purple-500 hover:text-white"
          >
            Next
          </button>
        )}
      </div>

      {showCash && (
        <div className="text-center mt-6">
          <h5>Please enter the cash received</h5>
          <input
            type="number"
            value={cashGiven}
            onChange={(e) => setCashGiven(e.target.value)}
            placeholder="Enter the cash given by customer"
            className="w-72 h-6 mt-2 p-5 outline-none rounded border border-purple-500"
          />
          <br />
          <button
            onClick={() => calculateChange(amountToBeReturned)}
            className="mt-4 border border-purple-600 rounded px-4 py-1 hover:bg-purple-500 hover:text-white"
          >
            Check
          </button>
        </div>
      )}

      {error ? (
        <p className="text-center rounded py-5 max-w-xl mx-auto border border-indigo-500 mt-5 text-2xl">
          The customer needs to pay more cash to you
        </p>
      ) : (
        <CashTable
          number={number}
          denomination={denomination}
          status={status}
        />
      )}
    </>
  );
};

export default FormInput;
