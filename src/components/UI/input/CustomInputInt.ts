import { ActionCreatorWithPayload } from '@reduxjs/toolkit';
import { ChangeEvent } from 'react';

export interface CustomInputProps {
  placeholder?: string;
  type: string;
  value: string;
  onChange: any;
  customClasses?: string[];
  onBlur?: any;
  styles?: any;
}
