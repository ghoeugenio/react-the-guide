import React, {useState} from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
	const [enteredTitle, setEnteredTitle] = useState("");
	const [enteredAmount, setEnteredAmount] = useState("");
	const [enteredData, setEnteredData] = useState("");

	const submitHandle = (event) => {
		event.preventDefault();

		const expenseData = {
			id: Math.random * 100,
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredData),
		};
		props.onSaveExpenseData(expenseData);
		setEnteredTitle("");
		setEnteredAmount("");
		setEnteredData("");
	};

	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
	};

	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
	};

	const dataChangeHandler = (event) => {
		setEnteredData(event.target.value);
	};

	return (
		<form onSubmit={submitHandle}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='text'
						onChange={titleChangeHandler}
						value={enteredTitle}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						type='number'
						min='0.01'
						step='0.01'
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						value={enteredData}
						onChange={dataChangeHandler}
					/>
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='button' onClick={props.onCancel}>
					Cancel
				</button>
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
