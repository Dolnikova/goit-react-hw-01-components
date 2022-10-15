import React from 'react';
import { default as PropTypes } from 'prop-types';
import {
  BoxContent,
  BoxTitle,
  TitleTransaction,
  Transaction,
} from 'styles/transactions.style';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table className="transaction-history">
      <BoxTitle>
        <tr>
          <TitleTransaction>Type</TitleTransaction>
          <TitleTransaction>Amount</TitleTransaction>
          <TitleTransaction>Currency</TitleTransaction>
        </tr>
      </BoxTitle>

      <BoxContent className="currencies">
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <Transaction>{type}</Transaction>
              <Transaction>{amount}</Transaction>
              <Transaction>{currency}</Transaction>
            </tr>
          );
        })}
      </BoxContent>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
