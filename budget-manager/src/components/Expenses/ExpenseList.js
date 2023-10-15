import React from 'react'
import './ExpenseList.css'
import ExpenseItem from './expense-item'
function ExpenseList(props) {
    let expenseContent = <p>No expenses found</p>
    if (props.items.length > 0) {
        expenseContent = props.items.map(expense =>
            <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
            />
        )
    }
}

export default ExpenseList