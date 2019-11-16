import React from "react";
import {Link} from "react-router-dom"
import moment from "moment"
import numeral from "numeral"

const ExpenseListItem = ({desc, amount, createdAt, id}) => (

        <Link className="list-item" to={`/edit/${id}`}>
        <div>
        <h3 className="list-item__title">{desc}</h3>
        <span className="list-item__subtotal">{numeral(amount / 100).format("$0,0.00")} </span>
        </div>
        
        <h3 className="list-item__data">{moment(createdAt).format("MMMM Do YYYY")}</h3>
        
        </Link>   
  
)

export default ExpenseListItem;