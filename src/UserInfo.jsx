import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import { getUser, getUserTodos } from './users'

export class UserInfo extends Component {
  state = {
    user: null,
    todos: [],
  }

  // componentDidMount() {
  //   getUser(this.props.userId)
  //     .then(user => {
  //       this.setState({ user });
  //     })
  // }

  async componentDidMount() {
    const user = await getUser(this.props.userId);
    const todos = await getUserTodos(this.props.userId);
    this.setState({ user, todos });
  }

  render() {
    const {todos, user} = this.state;

    if (!user) {
      return <FontAwesomeIcon icon={faSpinner} spin />
    }

    return(
      <div className="card">
        <div className="card-content">
          <div className="media">
            <div className="media-content">
              <p className="title is-4">{user.name}</p>
              <p className="subtitle is-6">{user.email}</p>
            </div>
          </div>

          <div className="content">
            <p className="title is-5">Todos:</p>

            <ul>
              {todos.map(todo => (
                <li key="todo.id">
                  <label className="checkbox">
                    <input
                      type="checkbox"
                      checked={todo.completed}
                    />
                    &nbsp;{todo.title}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}