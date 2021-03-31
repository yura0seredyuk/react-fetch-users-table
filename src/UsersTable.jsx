import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faSpinner } from '@fortawesome/free-solid-svg-icons'

export const UsersTable = ({ users, selectUser, selectUserId }) => {
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
              {selectUserId === user.id ? (
                <button
                  className="button is-link"
                  onClick={() => {
                    selectUser(0)
                  }}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={faEyeSlash} />
                  </span>
                </button>
              ) : (
                <button
                  className="button"
                  onClick={() => {
                    selectUser(user.id)
                  }}
                >
                  <span className="icon">
                    <FontAwesomeIcon icon={faEye} />
                  </span>
                </button>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}