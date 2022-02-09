const User = (props) => {
  return (
    <li>
      <span>{props.userName}</span>
      <span>({props.Age} years old)</span>
    </li>
  );
};
export default User
