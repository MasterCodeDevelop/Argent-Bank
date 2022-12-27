import React from 'react';
import Feature from '../components/Feature';
import iconChat from '../assets/img/icon-chat.png';
import iconMoney from '../assets/img/icon-money.png';
import iconSecurity from '../assets/img/icon-security.png';

export default function Home() {
  return (
    <main id="home" className="home">
      <section className="home-hero">
        <div className="home-hero__content">
          <h2 className="sr-only">Promoted Content</h2>
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </div>
      </section>
      <section className="features">
        <Feature
          name="Chat"
          icon={iconChat}
          title="You are our #1 priority"
          description="Need to talk to a representative? You can get in touch through our
            24/7 chat or through a phone call in less than 5 minutes."
        />
        <Feature
          icon={iconMoney}
          name="Money"
          title="More savings means higher rates"
          description="The more you save with us, the higher your interest rate will be!"
        />
        <Feature
          icon={iconSecurity}
          name="Security"
          title="Security you can trust"
          description="We use top of the line encryption to make sure your data and money
          is always safe."
        />
      </section>
    </main>
  );
}
