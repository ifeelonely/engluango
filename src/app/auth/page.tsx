import { AuthForm } from '@/components/authForm/AuthForm';
import SwapCard from '@/components/swapCard/SwapCard';
import classes from './Page.module.css';

const page = (): JSX.Element => {
  return (
    <section className={classes.authPage}>
      <SwapCard
        frontContent={<AuthForm authType="signIn" />}
        backContent={<AuthForm authType="signUp" />}
      />
    </section>
  );
};

export default page;
