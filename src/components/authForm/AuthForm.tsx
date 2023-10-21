'use client';
import { CustomButton } from '../UI/button/CustomButton';
import { CustomInput } from '../UI/input/CustomInput';
import { AuthFormProps } from './AuthFormInt';
import classes from './AuthForm.module.css';
import CheckBoxInt from '../UI/checkbox/CheckBox';
import { useAppSelector, useAppDispatch } from '@/store/Hooks';
import { setEmail, setPassword } from '@/store/slices/userAuthSlice';
import { useValidation } from '@/hooks/useFormValidation/useValidation';
import { useMemo } from 'react';

export function AuthForm({ authType }: AuthFormProps): JSX.Element {
  const signType: string = authType === 'signIn' ? 'Sign In' : 'Sign Up';
  const { email, password } = useAppSelector((state) => state.UserAuthSlice);
  const dispatch = useAppDispatch();

  const handleEmailChange = (inputValue: string) =>
    dispatch(setEmail(inputValue));

  const handlePasswordChange = (inputValue: string) =>
    dispatch(setPassword(inputValue));

  const handleSignIn = () => {
    console.log('signed in');
  };

  const handleSignUp = () => {
    console.log('signed up');
  };

  const {
    onBlurHandler: emailOnBlur,
    isVisited: isEmailVisited,
    isValid: isEmailValid,
  } = useValidation(email, 'email');

  const {
    onBlurHandler: passwordOnBlur,
    isVisited: isPasswordVisited,
    isValid: isPasswordValid,
  } = useValidation(password, 'password');

  const showEmailError: boolean = !isEmailValid && isEmailVisited;
  const showPasswordError: boolean = !isPasswordValid && isPasswordVisited;
  const isSubmitActive: boolean = isEmailValid && isPasswordValid;

  return (
    <form className={classes.form}>
      <h1 className={classes.formTitle}>{signType}</h1>
      {showEmailError ? (
        <div style={{ color: 'red', fontSize: '1rem' }}>
          Email must contain next symbols: @. and your mail provider
        </div>
      ) : null}
      <CustomInput
        placeholder="Enter your email"
        type="email"
        value={email}
        onChange={handleEmailChange}
        onBlur={emailOnBlur}
      />
      {showPasswordError ? (
        <div style={{ color: 'red', fontSize: '1rem' }}>
          Password must contain 8 characters and at least one number, one letter
          and one unique character such as !#$%&?
        </div>
      ) : null}
      <CustomInput
        placeholder="Enter your password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
        onBlur={passwordOnBlur}
      />
      <CheckBoxInt labelText="Remember me" />
      <CustomButton
        disable={!isSubmitActive}
        text={signType}
        onClick={signType === 'Sign In' ? handleSignIn : handleSignUp}
      />
    </form>
  );
}
