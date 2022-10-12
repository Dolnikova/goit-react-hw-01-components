import React from 'react';

import {
  BoxContent,
  BoxTitle,
  TitleTransaction,
  Transaction,
} from 'styles/transactions.style';

export const TransactionHistory = ({ transactions }) => {
  return (
    <table class="transaction-history">
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
