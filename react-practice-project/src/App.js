import { useState } from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = addedUserInfo => {
    setUsersList((prevState) => {
      return [addedUserInfo, ...prevState];
    });
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UserList users={usersList} />
    </div>
  );
}

export default App;
