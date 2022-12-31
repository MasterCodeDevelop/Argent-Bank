import React from 'react';
import { useSelector } from 'react-redux';
import AccountCard from '../components/AccountCard';
import Loading from '../components/Loading';
import Welcome from '../components/Welcome';

export default function Profile() {
  const { user } = useSelector((state) => state.user);
  const dataAccounts = [
    {
      title: 'Checking (x8349)',
      amount: '$2,082.79',
      description: 'Available',
    },
    {
      title: 'Savings (x6712)',
      amount: '$10,928.42',
      description: 'Available',
    },
    {
      title: 'Credit Card (x8349)',
      amount: '$184.30',
      description: 'Current',
    },
  ];
  return (
    <main id="profile" className="profile">
      {!user ? (
        <Loading />
      ) : (
        <>
          <Welcome firstName={user.firstName} lastName={user.lastName} />
          {dataAccounts.map((account, index) => (
            <AccountCard
              key={index}
              title={account.title}
              amount={account.amount}
              description={account.description}
            />
          ))}
        </>
      )}
    </main>
  );
}
