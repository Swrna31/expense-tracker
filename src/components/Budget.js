import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'
import Alert from '@mui/material/Alert'

const Budget = () => {

	const {budget} = useContext(AppContext)
	
	return (
		<div>
			<Alert icon={false} severity="info">Budget: ${budget}</Alert>
		</div>
	);
};

export default Budget;