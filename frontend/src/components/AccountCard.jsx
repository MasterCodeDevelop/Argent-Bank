import React from 'react';
import PropTypes from 'prop-types';

function AccountCard({ title, amount, description }) {
  return (
    <article className="account-card">
      <div>
        <h3 className="account-card__title">Argent Bank {title}</h3>
        <p className="account-card__amount">{amount}</p>
        <p>{description} Balance</p>
      </div>
      <button className="btn btn-secondary">View transactions</button>
    </article>
  );
}

AccountCard.propTypes = {
  title: PropTypes.string,
  amount: PropTypes.string,
  description: PropTypes.string,
};

export default AccountCard;
