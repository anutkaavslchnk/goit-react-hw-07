import { useEffect, useState } from 'react';
import ContactForm from '../ContactForm/ContactForm';
import ContactList from '../ContactList/ContactList';
import SearchBox from '../SearchBox/SearchBox';
import firstVal from './values.json';
import { nanoid } from 'nanoid';
import s from '../App/App.module.css'

const App = () => {


  return (
    <>
   
    
    <div className={s.container}>
      
      <h1 className={s.main}>My Contacts</h1>
      <SearchBox />
     
   
      <ContactList/>
      <ContactForm  />
    </div>
    </>
    
  );
};

export default App;
