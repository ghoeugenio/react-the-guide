import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

export default function Expenses(props) {
	const [year, setYear] = useState(2022);

	const yearHandle = (newYear) => {
		setYear(+newYear);
	};

	const filteredExpenses = props.item.filter((item) => {
		return item.date.getFullYear() === +year;
	});

	return (
		<Card className='expenses'>
			<ExpensesFilter onYearOption={yearHandle} />
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
}
