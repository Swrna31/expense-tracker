import React from 'react'
import { Container, Grid, Typography } from "@mui/material";
import Budget from "../components/Budget";
import Remaining from "../components/Remaining";
import ExpenseTotal from "../components/ExpenseTotal";
import ExpenseList from "../components/ExpenseList";
import AddExpenseForm from "../components/AddExpenseForm";
import { AppProvider } from "../context/AppContext";

const Home = () => {
  return (
    <AppProvider>
    <Container>
      <Typography variant="h1" className="mt-3">
        My Expense Tracker{" "}
      </Typography>
      <Grid container spacing={3} className="mt-3">
        <Grid item xs={12} sm={4}>
          <Budget />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Remaining />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ExpenseTotal />
        </Grid>
      </Grid>

      <Typography variant="h3" className="mt-3">
        Expenses
      </Typography>
      <Grid container spacing={3} className="mt-3">
        <Grid item xs={12}>
          <ExpenseList />
        </Grid>
      </Grid>

      <Typography variant="h3" className="mt-3">
        Add Expense
      </Typography>
      <Grid container spacing={3} className="mt-3">
        <Grid item xs={12}>
          <AddExpenseForm />
        </Grid>
      </Grid>
      
    </Container>
  </AppProvider>
  )
}

export default Home