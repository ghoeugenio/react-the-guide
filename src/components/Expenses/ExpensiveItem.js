import React, {useState} from "react";
import "./ExpensiveItem.css";
import ExpensiveDate from "./ExpensiveDate";
import Card from "../UI/Card";

const ExpensiveItem = (props) => {
	const [title, setTitle] = useState(props.title);

	function clickHandle() {
		setTitle("Uptade");
	}

	return (
		<Card className='expense-item'>
			<ExpensiveDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{title}</h2>
				<div className='expense-item__price'>${props.amount}</div>
			</div>
			<button onClick={clickHandle}>Update</button>
		</Card>
	);
};

export default ExpensiveItem;
