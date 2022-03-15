import React from "react";
import "./ExpenseItem.css";
import { MdCancel, MdEdit } from "react-icons/md";

const ExpenseItem = (props) => {
  const { expenseTitle, expenseDate, expenseAmount } = props?.data;
  return (
    <div className="expense-item">
      <div className="expense-item__description">
        <div className="expense-item__column">
          <h2  className="expense-item__title">{expenseTitle}</h2>
          <p className="expense-item__date">{expenseDate}</p>
        </div>
        <div className="expense-item__right">
          <div className="expense-item__buttons">
            <MdCancel className="expense-item__button_delete" size={30} />
            <MdEdit className="expense-item__button_edit" size={30} />
          </div>
          <p className="expense-item__price ">$ {expenseAmount}</p>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
