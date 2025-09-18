import React, { useState } from "react";
import "./styles.css";

export default function BillingCounter() {
  const [initialized, setInitialized] = useState(false);
  const [counterInput, setCounterInput] = useState("");
  const [counters, setCounters] = useState([]);
  const [quantityInput, setQuantityInput] = useState("");
  const [assignmentMsg, setAssignmentMsg] = useState("");

  function handleSetCounters() {
    const n = parseInt(counterInput, 10)
    if (isNaN(n) || n <= 0) return

    const initcounter = Array.from({ length: n }).map(() => ({ customers: [], total: 0 }))
    setCounters(initcounter)
    setInitialized(true)


  }
  function handleAddCustomer() {
    const q = Number(quantityInput);
    if (isNaN(q) || q <= 0) return
    let minindex = 0;
    let mintotal = counters[0].total;
    for (let i = 0; i < counters.length; i++) {
      if (counters[i].total < mintotal) {
        mintotal = counters[i].total;
        minindex = i;
      }
    }
    const newcounter = counters.map((c, idx) => (idx === minindex ? { customers: [...c.customers, q], total: c.total + q } : c))
    setCounters(newcounter)
    setAssignmentMsg(`Customer assigned to Counter ${minindex + 1}`)
    setQuantityInput("")

  }

  return (
    <div className="billing-container" data-testid="billing-container">
      <h2 data-testid="heading">Billing Counter System</h2>

      {!initialized && (<div className="input-section" data-testid="counter-input-section">
        <input
          data-testid="counter-input"
          type="number"
          placeholder="Number of counters"
          onChange={(e) => setCounterInput(e.target.value)}
          value={counterInput}
        />
        <button data-testid="set-counter-button" onClick={() => handleSetCounters()}>
          Set Counters
        </button>
      </div>)

      }
      {initialized && (
        <>
          <div className="input-section">
            <input
              data-testid="quantity-input"
              type="number"
              placeholder="Enter quantity"
              value={quantityInput}
              onChange={(e) => setQuantityInput(e.target.value)}
            />
            <button
              data-testid="add-customer-button"
              onClick={() => handleAddCustomer()}
            >
              Add Customer
            </button>
          </div>

          <div className="assigned-msg" data-testid="assignment-msg">
            {assignmentMsg}
          </div>

          <div className="counter-wrapper">
            {counters.map((counter, idx) => (<div key={idx}
              className="counter"
              data-testid={`counter-${idx + 1}`}>
              <h4 data-testid="counter-heading">
                Counter {idx + 1}

              </h4>
              <div className="queue" data-testid={`queue-${idx + 1}`}>
                { (
                  counter.customers.map((qty, cIdx) => (
                    <div
                      key={cIdx}
                      className="customer-box"
                      data-testid="customer-box"
                    >{qty}
                    </div>
                  )))}
              </div>

            </div>))}
          </div>
        </>

      )

      }

    </div>
  );
}
