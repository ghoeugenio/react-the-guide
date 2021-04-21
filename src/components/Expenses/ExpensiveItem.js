import React from "react";
import "./ExpensiveItem.css";
import ExpensiveDate from "./ExpensiveDate";
import Card from "../UI/Card";

export default function ExpensiveItem(props) {
	return (
		<Card className='expense-item'>
			<ExpensiveDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
		</Card>
	);
}
