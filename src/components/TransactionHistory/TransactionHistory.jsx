import PropTypes from "prop-types";
import Transaction from "./Transaction/Transaction";
import s from "./Transaction/Transaction.module.css";

const TransactionHistory = ({ items } = {}) => {
  return (
    <table className={s.transactionHistory}>
      <thead className={s.tableTitle}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody className={s.tableBody}>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default TransactionHistory;
