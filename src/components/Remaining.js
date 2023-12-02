import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Alert from '@mui/material/Alert'

const Remaining = () => {

	const {expenses,budget} = useContext(AppContext)
	
	const totalExpenses = expenses.reduce((total,item) => {
		return ( total += item.cost)
	},0)
	
	const alertType = totalExpenses > budget ? 'error' : 'success'
	
	return (
		<div>
			<Alert icon={false} severity={alertType}>Remaining: $ {budget - totalExpenses}</Alert>
		</div>
	);
};

export default Remaining;