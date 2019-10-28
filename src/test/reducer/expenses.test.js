import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses"

test("should set default state", () => {

    const state = expensesReducer(undefined, {type:"@@INIT"});

    expect(state).toEqual([])
})

test("should remove expense by id", () => {

    const action = {
        type: "REMOVE_EXPENSE",
        id: expenses[1].id
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual([expenses[0], expenses[2]])
})

test("should not remove expenses if id not found", () => {

    const action = {
        type: "REMOVE_EXPENSE",
        id: -1
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses)
})

test("should add an expense", () => {

    const expense = {
        id: "5",
        desc: "Garden",
        note: "",
        amount: 105,
        createdAt: 100
    }

    const action = {
        type: "ADD_EXPENSE", 
        expense
    }

    const state = expensesReducer(expenses, action)

    expect(state[3]).toEqual(expense)
})

test("should edit an expense", () => {

    const updates = {
        desc: "new desc"
    }

    const action = {
        type: "EDIT_EXPENSE",
        id: expenses[0].id,
        updates
    }

    const state = expensesReducer(expenses, action);

    expect(state[0].desc).toBe("new desc")
})

test("should not edit an expense if no match", () => {

    const updates = {
        desc: "new desc"
    }

    const action = {
        type: "EDIT_EXPENSE",
        id: -1,
        updates
    }

    const state = expensesReducer(expenses, action);

    expect(state).toEqual(expenses)
})