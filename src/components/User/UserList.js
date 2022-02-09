import Card from "../UI/Card";
import User from "./User";
import classes from './UserList.module.css'

const UserList = (props) => {
  return (
    <Card classname={classes.users}>
      <ul>
        {props.users.map((user) => (
          <User key={user.id} userName={user.userName} Age={user.age} />
        ))}
      </ul>
    </Card>
  );
};
export default UserList;
