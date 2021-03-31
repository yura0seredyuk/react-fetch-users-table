import React, { Component } from "react";
import "./style.css";
import 'bulma';
import '@fortawesome/react-fontawesome';
import { UsersTable } from './UsersTable';
import { getUsers } from './users';

class App extends Component {
  state = {
    users: [
      // {id: 1, name: 'Yura', email: 'yura@gmail.com'},
      // {id: 2, name: 'Yura', email: 'yura@gmail.com'},
      // {id: 3, name: 'Yura', email: 'yura@gmail.com'},
    ],
  };

  componentDidMount() {
    getUsers()
      .then(users => {
        this.setState({ users });
      })
  }

  render () {
    const { users } = this.state;

    return (
      <section className="section">
        <div className="container" >
          <h1 className="title">Example</h1>
          <div className="columns">
            {users.length > 0 && (
              <div className="column">
                <p className="subtitle">Users table</p>
                <UsersTable users={users}/>
            </div>
            )}
          </div>
        </div>
      </section>
    );
  };
};

export default App;