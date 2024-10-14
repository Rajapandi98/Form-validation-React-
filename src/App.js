import React, { useState, Fragment } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';



function App(props) {

  const[usersList,setUsersList]= useState([])

  function addUserHandler(uname,uAge) {
    setUsersList((prevUserList) =>{
      return[...prevUserList, {name: uname, age: uAge, id: Math.random().toString()}]
    });
  }

  return ( 
    <Fragment>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </Fragment> 
  );
}

export default App;
