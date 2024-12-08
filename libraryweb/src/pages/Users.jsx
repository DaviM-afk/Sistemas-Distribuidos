import UserList from "../components/UserList";
import "../../assets/css/List.css"

const Users = () => {
  return (
    <div>
      <h1 className="generic-h1">leitores cadastrados</h1>
      <UserList />
    </div>
  );
};

export default Users;
