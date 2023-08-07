'use client';
import { CustomButton } from '../UI/button/CustomButton';
import { CustomInput } from '../UI/input/CustomInput';
import { AuthFormProps } from './AuthFormInt';
import classes from './AuthForm.module.css';
import ToggleBtn from '../UI/toggleBtn/ToggleBtn';
import CheckBoxInt from '../UI/checkbox/CheckBox';
import { useAppSelector, useAppDispatch } from '@/store/Hooks';
import { setLogin, setEmail, setPassword } from '@/store/slices/userAuthSlice';

export function AuthForm({ authType }: AuthFormProps): JSX.Element {
  const signType: string = authType === 'signIn' ? 'Sign In' : 'Sign Up';
  const { login, email, password } = useAppSelector(
    (state) => state.UserAuthSlice
  );
  const dispatch = useAppDispatch();

  return (
    <form className={classes.form}>
      <h1 className={classes.formTitle}>{signType}</h1>
      {signType === 'Sign Up' ? (
        <CustomInput placeholder="Enter your login" type="text" value={login} onChange={dispatch(setLogin)} />
      ) : null}
      <CustomInput placeholder="Enter your email" type="email" value={email} onChange={(e )=> dispatch(setEmail(e.target.value))} />
      <CustomInput
        placeholder="Enter your password"
        type="password"
        value={password} onChange={dispatch(setPassword)} 
      />
      <CheckBoxInt labelText="Remember me" />
      <CustomButton text={signType} />
    </form>
  );
}
