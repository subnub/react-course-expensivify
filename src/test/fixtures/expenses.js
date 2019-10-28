import moment from "moment"

export default [{
    id: "1",
    desc: "Gum",
    note: "",
    amount: 195,
    createdAt: 0
},
{
    id: "2",
    desc: "Rent",
    note: "",
    amount: 190500,
    createdAt: moment(0).subtract(4, "days").valueOf()
},

{
    id: "3",
    desc: "Credit Card",
    note: "",
    amount: 4500,
    createdAt: moment(0).add(4, "days").valueOf()
},

]