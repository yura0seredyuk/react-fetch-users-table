import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faSpinner} from '@fortawesome/free-solid-svg-icons'

export const UsersTable = ({users}) => {
  return (
    <table className="table is-narrow">
      <thead>
        <tr>
          <th>#</th>
          <th>USER</th>
          <th>EMAIL</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {users.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>
              <button className="button">
                <span className="icon">
                  <FontAwesomeIcon icon={faEye} />
                </span>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}