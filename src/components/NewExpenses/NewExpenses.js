import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpenses.css";

const NewExpenses = (props) => {
	const saveExpenseDataHandler = (enteredExpenseData) => {
		const ExpenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};
		console.log(ExpenseData);
		props.onAddExpense(ExpenseData);
	};

	return (
		<div className='new-expense'>
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};

export default NewExpenses;
