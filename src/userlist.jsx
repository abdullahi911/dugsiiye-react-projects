import React, { useState } from 'react';
const UserList = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'tood', email: 'tood@example.com' },
{ id: 2, name: 'sharafdiin', email: 'sharafdiin@example.com' },
    { id: 3, name: 'abdullahi', email: 'abdullahi@example.com' }
  ]);
  return (
    <>
    <h1>user lists</h1>
    <ul>
      {users.map(user => (
        <li key={user.id}>
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
    </>

  )
}
export default UserList;