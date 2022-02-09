// import styles from './App.module.css';
import { useState } from 'react';
import Wrapper from './components/Helpers/Wrapper';
import UserInput from './components/User/UserInput';
import UserList from './components/User/UserList';

function App() {
  const [users, setUsers] = useState([])
  const getUserData = (data) => {
    setUsers((prevState) => [...users, data])
  }
  return (
    <Wrapper>
      <UserInput onAddingUser={getUserData}/>
      {users.length > 0 &&
        <UserList users={users} />
      }
    </Wrapper>
  );
}

export default App;
