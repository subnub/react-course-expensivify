import {addExpense, startAddExpense,editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense} from "../../actions/expenses"
import expenses from "../fixtures/expenses"
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {database} from "../../firebase/firebase"

const createMockStore = configureMockStore([thunk])

const uid = "thisismytestuid"

beforeEach((done) => {

    database.ref().remove();
    
    expenses.forEach(({id, desc, note, amount, createdAt}) => {
        database.ref().child("users").child(uid).child("expenses").child(id).set({
            desc,
            note,
            amount,
            createdAt
        }).then(() => {
            done();
        })
    })
})

test("should set up remove expense action object", () => {
    const action = removeExpense({id: "123abc"})

    expect(action).toEqual({
        type:"REMOVE_EXPENSE",
        id: "123abc"
    })
})

test("should set up edit expense action object", () => {
    const action = editExpense("abc123", {note:"New Note!"})

    expect(action).toEqual({
        type: "EDIT_EXPENSE",
        id: "abc123",
        updates: {
            note: "New Note!"
        }
    })
})

test("should set up add expense action object with provided values", () => {
    

    const action = addExpense(expenses[0])

    expect(action).toEqual({
        type: "ADD_EXPENSE",
        expense: expenses[0]
    })
})

test("should add expense to database and store", (done) => {

    const store = createMockStore({auth: {uid}})
    const expenseData = {
        desc: "Mouse", 
        amount: 3000, 
        note: "mousee",
        createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {
        
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String), 
                ...expenseData
            }
        }); 

        return database.ref().child("users").child(uid).child("expenses").child(actions[0].expense.id).once("value")

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done();
    })
})

test("should add expense to database and store with default data", (done) => {
    
    const store = createMockStore({auth:{uid}})
    const expenseData = {
        desc: "",
        amount: 0,
        createdAt: 0,
        note: ""
    }

    store.dispatch(startAddExpense()).then(() => {
        
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: "ADD_EXPENSE",
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        }); 

        return database.ref().child("users").child(uid).child("expenses").child(actions[0].expense.id).once("value")

    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done();
    })
})

test("should set up set expences action generator", () => {
    const action = setExpenses(expenses);

    expect(action).toEqual({
        type: "SET_EXPENSES", 
        expenses
    })
})

test("should fetch expences array", (done) => {

    const store = createMockStore({auth:{uid}})

    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();

        expect(actions[0]).toEqual({
            type: "SET_EXPENSES", 
            expenses
            
        })

        done()
    })
})

test("should remove an expense from firebase", (done) => {

    const store = createMockStore({auth:{uid}});

    const removedExpense = expenses[0];

    store.dispatch(startRemoveExpense({id:removedExpense.id})).then(() => {

        const actions = store.getActions()

        expect(actions[0]).toEqual({
            type: "REMOVE_EXPENSE", 
            id: removedExpense.id
        })

        return database.ref().child("users").child(uid).child("expenses").child(removedExpense.id).once("value")

        
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy();
        done();
    })
})

// test("Should edit an expense", (done) => {

//     const store = createMockStore({});


//     store.dispatch({})
// })

// test("should set up add expense action object with default values", () => {
    
//     const action = addExpense();

//     expect(action).toEqual({
//         type:"ADD_EXPENSE",
//         expense: {
//             id: expect.any(String),
//             desc: "",
//             amount: 0,
//             createdAt: 0,
//             note: ""
//         }
//     })
// })