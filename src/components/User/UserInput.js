import Card from "../UI/Card";
import Button from "../UI/Button";
import styles from "./UserInput.module.css";
import { Fragment, useState } from "react";
import ErrorModel from "../UI/Error";

const UserInput = (props) => {
  const [userInput, setUserInput] = useState({
    userName: "",
    age: "",
  });
  const [errorData, setError] = useState({
    title: '',
    message: ''
  })
  const [isModelVisible, setModelVisibility] = useState(false)
  const onSubmitHandler = (even) => {
    even.preventDefault();
    if (
      !userInput.userName.trim().length ||
      !userInput.age ||
      userInput.age < 1
    ) {
      updateErrorModel()
      toggleErrorModel()
      return;
    }
    props.onAddingUser({
      ...userInput,
      id: Math.random().toString(),
    });
    setUserInput({
      userName: "",
      age: "",
    });
  };
  const updateErrorModel = () => {
    if (!userInput.userName.trim().length && (!userInput.age ||
      userInput.age < 1)) {
        setError({
          title: 'Invalid username and age',
          message: 'Please enter a valid username and age (non-empty values).'
        })
      } else if (!userInput.userName.trim().length) {
        setError({
          title: 'Invalid username',
          message: 'Please enter a valid username (non-empty values).'
        })
      } else if (!userInput.age || userInput.age < 1) {
        setError({
          title: 'Invalid age',
          message: 'Please enter a valid age greater than 1.'
        })
      }
  }
  const onChangeForm = (eve) => {
    const data = {};
    data[eve.target.name] = eve.target.value;
    setUserInput((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
  };
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
            value={userInput.userName}
            name="userName"
            onChange={onChangeForm}
            type="text"
          />
          <label htmlFor="age">Age years</label>
          <input
            id="age"
            value={userInput.age}
            name="age"
            onChange={onChangeForm}
            min="1"
            step="1"
            type="number"
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </Fragment>
  );
};
export default UserInput;
