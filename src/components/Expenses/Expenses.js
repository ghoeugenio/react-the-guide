import React from "react";
import ExpensiveItem from "./ExpensiveItem";
import "./Expenses.css";
import Card from "../UI/Card";

export default function Expenses(props) {
	return (
		<Card className='expenses'>
			<ExpensiveItem
				title={props.data[0].title}
				amount={props.data[0].amount}
				date={props.data[0].date}
			/>
			<ExpensiveItem
				title={props.data[1].title}
				amount={props.data[1].amount}
				date={props.data[1].date}
			/>
			<ExpensiveItem
				title={props.data[2].title}
				amount={props.data[2].amount}
				date={props.data[2].date}
			/>
			<ExpensiveItem
				title={props.data[3].title}
				amount={props.data[3].amount}
				date={props.data[3].date}
			/>
		</Card>
	);
}