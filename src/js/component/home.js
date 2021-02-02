import React, { useState, Fragment, useEffect } from "react";
import { Item } from "./item.jsx";

//create your first component
export function Home() {
	const [listItems, setListItems] = useState([]);
	const [currentValue, setValue] = useState("");

	const test = e => {
		if (e.key == "Enter") {
			setListItems(listItems => [
				...listItems,
				{
					name: currentValue,
					done: false
				}
			]);
			setValue("");
			console.log(listItems);
		}
	};

	const test2 = e => {
		listItems.splice(e.target.id, 1);
		console.log("hola", listItems);
	};

	let prueba = listItems.map((item, index) => {
		return (
			<Item
				name={item.name}
				key={index}
				id={index}
				onMyClick={e => {
					test2(e);
				}}
			/>
		);
	});

	// const removeTask = id => {
	// 	const removedArr = [...listItems].filter(
	// 		listItems => listItems.id !== id
	// 	);

	// 	setListItems(removedArr);
	// };

	return (
		<Fragment>
			<form
				onSubmit={e => {
					e.preventDefault();
				}}>
				<input
					type="text"
					onChange={e => {
						setValue(e.target.value);
					}}
					onKeyPress={e => {
						test(e);
					}}
					placeholer="Put anotther TODO"
					value={currentValue}
				/>
			</form>
			<div>{prueba}</div>
		</Fragment>
	);
}
