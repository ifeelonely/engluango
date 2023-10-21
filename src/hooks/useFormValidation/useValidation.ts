import { useEffect, useState } from 'react';
import {
  PASSWORD_REGULAR_EXP,
  EMAIL_REGULAR_EXP,
} from '@/constants/validation';

export const useValidation = (initialValue: string, type: string) => {
  const [isVisited, setIsVisited] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(false);

  const onBlurHandler = () => setIsVisited(true);

  useEffect(() => {
    switch (type) {
      case 'password':
        setIsValid(PASSWORD_REGULAR_EXP.test(initialValue));
        break;
      case 'email':
        setIsValid(EMAIL_REGULAR_EXP.test(initialValue));
        break;
      default:
        throw new Error('Unknown input type!');
    }
  }, [initialValue, type]);

  return {
    onBlurHandler,
    isVisited,
    isValid,
  };
};
