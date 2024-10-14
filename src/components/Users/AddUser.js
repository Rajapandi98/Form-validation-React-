
import React, { useState, useRef } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';
import ErrorModal from '../UI/ErrorModal'
 
const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef=useRef();

  const [error,setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
   // console.log(nameInputRef)
   const entredName=nameInputRef.current.value;
   const enteredUserAge= ageInputRef.current.value;
    if (entredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "Please Enter Valid Name and Age"
      })
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "invalid Age",
        message: "Please Enter Valid Age (>0)"
      })
      return;
    }
    props.onAddUser(entredName, enteredUserAge);
    nameInputRef.current.value='';
    ageInputRef.current.value='';
  };


  function errorHandler(){
    setError(null);
  }

  return (
    <div>
    {error && <ErrorModal title= {error.title} message={error.message} onConfirm={errorHandler} />}
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          ref={nameInputRef}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          ref ={ageInputRef}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
    </div>
  );
};

export default AddUser;