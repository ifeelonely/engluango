
import { useEffect, useState } from 'react';
import { CustomInput } from '../UI/input/CustomInput';
import classes from './NewWordDescription.module.css';
import { NewWordDescriptionProps } from './NewWordDescriptionInt';
import { useAppDispatch, useAppSelector } from '@/store/Hooks';
import { setIsSetCreated, addNewCard } from '@/store/slices/newSetSlice';
import { useRouter } from 'next/router';

const NewWordDescription = ({
  wordNumber,
}: NewWordDescriptionProps): JSX.Element => { 
  const [newWordTerm, setNewWordTerm] = useState<string>('');
  const [newWordDefinition, setNewWordDefinition] = useState<string>('');
  const { isSetCreated } = useAppSelector((state) => state.NewSetSlice);
  const dispatch = useAppDispatch();

  const handleOnTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewWordTerm(e.target.value);
  };

  const handleOnDefinitionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewWordDefinition(e.target.value);
  };

  useEffect(() => {
    if (isSetCreated) {
      dispatch(addNewCard({ newWordTerm, definition: newWordDefinition }));
      dispatch(setIsSetCreated(false));
    }
  }, [isSetCreated]);

  return (
    <div className={classes.newWord}>
      <div className={classes.newWordHeader}>
        <p>{wordNumber}</p>
        <div>Features</div>
      </div>
      <div className={classes.newWordDescription}>
        <CustomInput
          type="text"
          placeholder="Your new word"
          customClasses={[classes.newWordInputs]}
          value={newWordTerm}
          onChange={handleOnTermChange}
        />
        <CustomInput
          type="text"
          placeholder="Definition"
          customClasses={[classes.newWordInputs]}
          value={newWordDefinition}
          onChange={handleOnDefinitionChange}
        />
        <div>Add photo</div>
      </div>
    </div>
  );
};

export default NewWordDescription;
