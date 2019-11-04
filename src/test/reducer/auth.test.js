import authReducer from "../../reducers/auth";

test("should change state correctly when logged in", () => {
    const action = {
        type: "LOGIN",
        uid: "abc"
    }

    const state = authReducer(undefined, action);

    expect(state).toEqual({uid: "abc"})
})

test("should change state correctly when logged out", () => {
    const action = {
        type: "LOGOUT"
    }

    const state = authReducer({uid:"abc"}, action);

    expect(state).toEqual({})
})