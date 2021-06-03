import { Fragment } from "react";
import { useSelector } from "react-redux";

import Header from "./components/Header";
import Auth from "./components/Auth";
import Counter from "./components/CounterFunctional";
import UserProfile from "./components/UserProfile";

// import Counter from './components/CounterComponent';

function App() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />
      {!isAuthenticated && <Auth />}
      {isAuthenticated && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
