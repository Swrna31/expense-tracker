import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button, Grid } from "@mui/material";
import { AppContext } from "../context/AppContext";

const AddExpenseForm = (addExpense) => {
  const { dispatch } = useContext(AppContext);

  const [expenseName, setExpenseName] = useState("");
  const [expenseCost, setExpenseCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate and handle the form submission
    if (expenseName && expenseCost) {
      const newExpense = {
        id: uuidv4,
        name: expenseName,
        cost: parseFloat(expenseCost),
      };
      // Pass the new expense to the parent component
      addExpense(newExpense);
      // Clear the form fields
      setExpenseName('');
      setExpenseCost('');
    }
  };

  return (
<form onSubmit={handleSubmit}>
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={12} sm={6}>
          <TextField
            label="Expense Name"
            variant="outlined"
            fullWidth
            required
            value={expenseName}
            onChange={(e) => setExpenseName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            label="Expense Cost"
            variant="outlined"
            fullWidth
            required
            type="number"
            value={expenseCost}
            onChange={(e) => setExpenseCost(e.target.value)}
          />
        </Grid>

        {/* Submit Button */}
        <Grid item xs={12} sm={2}>
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Add Expense
          </Button>
        </Grid>
      </Grid>
    </form>
  );
};

export default AddExpenseForm;
