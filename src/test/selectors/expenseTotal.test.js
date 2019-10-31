import expenseTotal from "../../selectors/expenseTotal";
import expenses from "../fixtures/expenses"


test("should add all expenses", () => {
    const total = expenseTotal(expenses);

    expect(total).toBe(195195);
})

test("should correctly add a single expense", () => {
    const total = expenseTotal([expenses[0]]);

    expect(total).toBe(195)
})

test("should correctly add no expenses", () => {
    const total = expenseTotal([])

    expect(total).toBe(0);
})