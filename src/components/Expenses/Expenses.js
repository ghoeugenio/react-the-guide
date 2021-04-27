import React, {useState} from "react";
import ExpensiveItem from "./ExpensiveItem";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

export default function Expenses(props) {
	const [year, setYear] = useState(2022);

	const yearHandle = (newYear) => {
		setYear(+newYear);
	};

	const showExpenses = () => {
		const expenses = props.item.filter((item) => {
			return item.date.getFullYear() === year ? (
				<ExpensiveItem
					key={item.id}
					title={item.title}
					amount={item.amount}
					date={item.date}
				/>
			) : null;
		});
		return expenses;
	};

	const emptyExpenses = () => {
		return <p>No expenses found</p>;
	};

	return (
		<Card className='expenses'>
			<ExpensesFilter onYearOption={yearHandle} />
			{console.log(showExpenses())}
			{showExpenses() ? showExpenses() : emptyExpenses()}
		</Card>
	);
}
