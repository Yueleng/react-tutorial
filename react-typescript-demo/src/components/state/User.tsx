import { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

export const User = () => {
  // The initial value type is different from the future value type.
  const [user, setUser] = useState<AuthUser | null>(null);
  const handleLogin = () => {
    setUser({
      name: "Alan",
      email: "alan.wang@example.com",
    });
  };
  const handleLogout = () => {
    setUser(null);
  };

  // Type Assertion
  const [user2, setUser2] = useState<AuthUser>({} as AuthUser);
  const handleLogin2 = () => {
    setUser2({
      name: "Silvia",
      email: "silviaz1021@gmail.com",
    });
  };

  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
};
