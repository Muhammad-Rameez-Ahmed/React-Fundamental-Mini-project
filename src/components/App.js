import React from 'react';
import './App.css';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import ContactCard from './ContactCard';

function App() {

  const contacts=[
    {
      id:"1",
      name:"rameez",
      email:"ahmed@gmail.com"
    },
    {
      id:"2",
      name:"Abdullah",
      email:"abdullah@gmail.com"
    }
  ]


  return (
    <>
    <div className="ui container">
      <Header/>
      <AddContact/>
      <ContactList contacts={contacts}/>
      

    </div>
    </>

    
  );
}

export default App;
