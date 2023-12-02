import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Alert from '@mui/material/Alert'

const ExpenseTotal = () => {

	const { expenses } = useContext(AppContext)

	const totalExpenses = expenses.reduce((total,item) => {
		return (total+= item.cost)
	},0)

	return (
		<div>
			<Alert icon={false} severity='warning'>Spent so far: $ {totalExpenses}</Alert>
		</div>
	);
};

export default ExpenseTotal;