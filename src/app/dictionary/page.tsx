import SearchBar from '@/components/UI/searchBar/SearchBar';
import DictionaryInner from '@/components/dictionaryInner/DictionaryInner';
import SideBar from '@/components/sideBar/SideBar';
import React, { useState } from 'react';
import classes from './Page.module.css';

const page = () => {
  return (
    <section className={classes.dictionaryPage}>
      <DictionaryInner />
    </section>
  );
};

export default page;
