import React, {useState} from "react";

import './ExpenseForm.css'
function ExpenseForm(props) {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const titleChangeHandle = (e) =>{
        setEnteredTitle(e.target.value);
    }

    const amountChangeHandle = (e) =>{
        setEnteredAmount(e.target.value);
    };

    const dateChangeHandle = (e) => {
        setEnteredDate(e.target.value);
    };

    const submitHandle = (e) =>{
        e.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        };

        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setEnteredDate("");
        setEnteredAmount("");
    }

    return(
        <form onSubmit={submitHandle}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min='0.01' step='0.1'onChange={amountChangeHandle}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandle}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add</button>
            </div>
        </form>
    )
}

export default ExpenseForm;