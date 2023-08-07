import { AuthForm } from '@/components/authForm/AuthForm';
import SwapCard from '@/components/swapCard/SwapCard';
import React from 'react';

const page = (): JSX.Element => {
  return (
    
      <SwapCard
        frontContent={<AuthForm authType="signIn" />}
        backContent={<AuthForm authType="signUp" />}
      />
  
  );
};

export default page;
