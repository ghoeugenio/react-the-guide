import React from "react";
import Expenses from "./components/Expenses/Expenses";

function App() {
	var data = [
		{
			id: "e1",
			title: "Papel Higienico",
			amount: 220,
			date: new Date(2021, 5, 20),
		},
		{
			id: "e2",
			title: "Tv Nova",
			amount: 890,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e3",
			title: "Celualar",
			amount: 555.55,
			date: new Date(2021, 11, 7),
		},
		{
			id: "e4",
			title: "Conserto do carro",
			amount: 443.37,
			date: new Date(2021, 4, 9),
		},
	];

	return (
		<div>
			<div>Lets Get in</div>
			<Expenses data={data} />
		</div>
	);
}

export default App;
