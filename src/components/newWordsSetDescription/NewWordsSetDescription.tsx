'use client';
import { useState } from 'react';
import { CustomInput } from '../UI/input/CustomInput';
import { CustomButton } from '../UI/button/CustomButton';
import classes from './NewWordsSetDescription.module.css';
import {
  newSetNameStyle,
  studyPlaceInfoStyle,
  descriptionTextAreaStyle,
} from './CustomStyles';
import CustomTextArea from '../UI/textArea/CustomTextArea';

const NewWordsSetDescription = (): JSX.Element => {
  const [newSetName, setNewSetName] = useState<string>('');
  const [newSetDescription, setNewSetDescription] = useState<string>('');
  const [newSetStudyPlace, setNewSetStudyPlace] = useState<string>('');
  const [newSetSubject, setNewSetSubject] = useState<string>('');

  const handleOnCreate = () => console.log('create set');

  return (
    <div className={classes.createSet}>
      <div className={classes.createSetHeading}>
        <h2>Create new study module</h2>
        <CustomButton text="Create" onClick={handleOnCreate} />
      </div>

      <div className={classes.createSetDescription}>
        <CustomInput
          type="text"
          value={newSetName}
          onChange={setNewSetName}
          placeholder="New set name"
          styles={newSetNameStyle}
        />
        <div className={classes.createSetDescriptionInner}>
          <CustomTextArea
            value={newSetDescription}
            onChange={setNewSetDescription}
            placeholder="Set description"
            rows={3}
            styles={descriptionTextAreaStyle}
          />
          <div className={classes.createSetPlaceAndSubject}>
            <CustomInput
              value={newSetStudyPlace}
              onChange={setNewSetStudyPlace}
              type="text"
              styles={studyPlaceInfoStyle}
              placeholder="Study place name"
            />
            <CustomInput
              value={newSetSubject}
              onChange={setNewSetSubject}
              type="text"
              styles={studyPlaceInfoStyle}
              placeholder="Subject"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewWordsSetDescription;
