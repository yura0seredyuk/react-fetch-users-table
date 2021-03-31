import React, { Component } from "react";
import "./style.css";
import 'bulma';
import '@fortawesome/react-fontawesome';
import { UsersTable } from './UsersTable';
import { UserInfo } from './UserInfo';
import { getUsers } from './users';

class App extends Component {
  state = {
    users: [
      // {id: 1, name: 'Yura', email: 'yura@gmail.com'},
    ],
    userId: 0,
  };

  // componentDidMount() {
  //   getUsers()
  //     .then(users => {
  //       this.setState({ users });
  //     })
  // }

  async componentDidMount() {
    const users = await getUsers();

    this.setState({ users });
  }

  render () {
    const { users, userId } = this.state;

    return (
      <section className="section">
        <div className="container" >
          <h1 className="title">Example</h1>
          <div className="columns">
            {users.length > 0 && (
              <div className="column">
                <p className="subtitle">Users table</p>
                <UsersTable
                  users={users}
                  selectUserId={userId}
                  selectUser={(userId) => {
                    this.setState({ userId })
                  }}
                />

                {userId !== 0 && (
                  <div className="column">
                    <UserInfo userId={userId} />
                  </div>
                )}
            </div>
            )}
          </div>
        </div>
      </section>
    );
  };
};

export default App;