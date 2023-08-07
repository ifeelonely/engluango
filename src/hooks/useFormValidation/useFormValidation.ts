import { useState } from "react";

// export const useFormValidation = () => {
//   const [isFormValid, setIsFormValid] = useState<boolean>(false);
//   return (

//   )
// }

export const useInput = (initialValue: string) => {
  const [inputValue, setInputValue] = useState<string>(initialValue);
  const [isVisited, setIsVisited] = useState<boolean>(false);

  const onBlurHandler = () => setIsVisited(true);
  

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(inputVal => e.target.value);

  return {
    inputValue, 
    onBlurHandler, 
    onChangeHandler
  }
}