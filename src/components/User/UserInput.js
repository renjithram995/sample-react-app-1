import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./UserInput.module.css";
import { Fragment, useRef, useState } from "react";
import ErrorModel from "../UI/Error";

const UserInput = (props) => {
  const userNameRef = useRef()
  const ageRef = useRef()
  const [errorData, setError] = useState({
    title: '',
    message: ''
  })
  const [isModelVisible, setModelVisibility] = useState(false)
  const onSubmitHandler = (even) => {
    even.preventDefault();
    const userName = userNameRef.current.value || '';
    const age = ageRef.current.value || '';
    if (
      !userName.trim().length ||
      !age||
      age< 1
    ) {
      updateErrorModel(userNameRef.current.value, age)
      toggleErrorModel()
      return;
    }
    props.onAddingUser({
      userName: userName,
      age: age,
      id: Math.random().toString(),
    });
    userNameRef.current.value = ageRef.current.value = '';
  };
  const updateErrorModel = (userName, age) => {
    if (!userName.trim().length && (!age ||
      age < 1)) {
        setError({
          title: 'Invalid username and age',
          message: 'Please enter a valid username and age (non-empty values).'
        })
      } else if (!userName.trim().length) {
        setError({
          title: 'Invalid username',
          message: 'Please enter a valid username (non-empty values).'
        })
      } else if (!age || age < 1) {
        setError({
          title: 'Invalid age',
          message: 'Please enter a valid age greater than 1.'
        })
      }
  }
  const toggleErrorModel = () => {
    if (isModelVisible) {
      setError({
        title: '',
        message: ''
      })
    }
    setModelVisibility(!isModelVisible)
  }
  return (
    <Fragment>
      {isModelVisible && <ErrorModel title={errorData.title} message={errorData.message} onOkayButtonClick={toggleErrorModel} />}
      <Card classname={styles.input}>
        <form onSubmit={onSubmitHandler}>
          <label htmlFor="userName">Username</label>
          <input
            id="userName"
            name="userName"
            type="text"
            ref={userNameRef}
          />
          <label htmlFor="age">Age years</label>
          <input
            id="age"
            name="age"
            min="1"
            step="1"
            type="number"
            ref={ageRef}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Fragment>
  );
};
export default UserInput;
