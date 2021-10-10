import { useContext } from "react";
import { UserContext } from "./UserContext";

export const User2 = () => {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    // if (userContext) {
    //   userContext.setUser({
    //     name: "Alan Wang",
    //     email: "wangyueleng@gmail.com",
    //   });
    // }
    userContext.setUser({
      name: "Alan Wang",
      email: "wangyueleng@gmail.com",
    });
  };
  const handleLogout = () => {
    // if (userContext) {
    //   userContext.setUser(null);
    // }
    userContext.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {userContext.user?.name}</div>
      <div>Email name is {userContext.user?.email}</div>
    </div>
  );
};
