import React, { Component } from "react";
import "./style.css";
import 'bulma';
import '@fortawesome/react-fontawesome';
import { UsersTable } from './UsersTable';
import { UserInfo } from './UserInfo';
import { getUsers } from './users';
import { LoadingError } from './LoadingError'
import classnames from 'classnames';

class App extends Component {
  state = {
    users: [
      // {id: 1, name: 'Yura', email: 'yura@gmail.com'},
    ],
    userId: 0,
    loading: false,
    hasLoadingError: false,
    isInitialized: false,
  };

  // componentDidMount() {
  //   getUsers()
  //     .then(users => {
  //       this.setState({ users });
  //     })
  // }

  loadUsers = async () => {
    this.setState({
      loading: true,
      hasLoadingError: false,
    })

    try {
      const users = await getUsers();

      this.setState({
        users,
        loading: false,
        isInitialized: true,
      });
    } catch {
      this.setState({
        hasLoadingError: true,
        loading: false
      })
    }
  }

  render () {
    const {
      users,
      userId,
      loading,
      hasLoadingError,
      isInitialized
    } = this.state;

    return (
      <section className="section">
        <div className="container" >
          <h1 className="title">Example</h1>

          <div className="columns is-mobile">
            <div className="column">
              {!isInitialized ? (
                <button
                  className={classnames(
                    'button', 'is-link',
                    {'is-loading': loading }
                  )}
                  onClick={this.loadUsers}
                >
                  Load users
                </button>
              ) : (
                 users.length > 0 ? (
                  <>
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
                  </>
                 ) : (
                   <p className="subtitle">No user yet</p>
                 )
              )}
            </div>
          </div>

          {hasLoadingError && <LoadingError />}

        </div>
      </section>
    );
  };
};

export default App;