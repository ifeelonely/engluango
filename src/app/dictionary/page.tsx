'use client';
import DictionaryInner from '@/app/dictionary/components/dictionaryInner/DictionaryInner';

import React from 'react';
import classes from './Page.module.css';

const page = () => {
  return (
    <section className={classes.dictionaryPage}>
      <DictionaryInner />
    </section>
  );
};

export default page;
