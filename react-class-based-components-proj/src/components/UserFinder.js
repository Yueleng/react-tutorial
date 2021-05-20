// import { Fragment, useState, useEffect } from "react";
// import Users from "./Users";
// import classes from "../components/UserFinder.module.css";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];

// const UserFinder = () => {
//   const [filteredUsers, setFilteredUsers] = useState(DUMMY_USERS);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     setFilteredUsers(
//       DUMMY_USERS.filter((user) => user.name.includes(searchTerm))
//     );
//   }, [searchTerm]);

//   const searchChangeHandler = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <Fragment>
//       <div className={classes.finder}>
//         <input type="search" onChange={searchChangeHandler} />
//       </div>
//       <Users users={filteredUsers} />
//     </Fragment>
//   );
// };

// export default UserFinder;

import { Component, Fragment } from "react";
import Users from "./Users";
import classes from "../components/UserFinder.module.css";
import UsersContext from "../store/users-context";
import ErrorBoundary from "./ErrorBoundary";

// const DUMMY_USERS = [
//   { id: "u1", name: "Max" },
//   { id: "u2", name: "Manuel" },
//   { id: "u3", name: "Julie" },
// ];

class UserFinder extends Component {
  static contextType = UsersContext;

  constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchItem: "",
    };
  }

  componentDidMount() {
    // Send http request...
    this.setState({ filteredUsers: this.context.users });
  }

  // will execute every time the component update(i.e setState is called)
  componentDidUpdate(prevProps, PrevState) {
    if (PrevState.searchItem !== this.state.searchItem) {
      //   this.setState((curState) => {
      //     return {
      //       filteredUsers: DUMMY_USERS.filter((user) =>
      //         user.name.includes(curState.searchItem)
      //       ),
      //     };
      //   });
      this.setState({
        filteredUsers: this.context.users.filter((user) =>
          user.name.includes(this.state.searchItem)
        ),
      });
    }
  }

  searchChangeHandler(event) {
    this.setState({ searchItem: event.target.value });
  }

  render() {
    return (
      <Fragment>
        <div className={classes.finder}>
          <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        </div>
        <ErrorBoundary>
          <Users users={this.state.filteredUsers} />
        </ErrorBoundary>
      </Fragment>
    );
  }
}
export default UserFinder;
