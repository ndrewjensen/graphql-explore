import React from 'react';

import './App.css';
import AddMessageForm from './AddMessageForm';
import AddUserForm from './AddUserForm';
import Users from './Users';
import UserMessages from './UserMessages';




function App() {
  return (
    <div className="App">
     <Users/>
     <UserMessages/>
     <AddUserForm/>
     <AddMessageForm/>
    </div>
  );
}

export default App;
