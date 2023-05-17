import { useState, useEffect } from 'react';
import Link from 'next/link';
import MainContainer from '../components/MainContainer';

const Users = ({ users }) => {
  // const [users, setUsers] = useState([
  //   { id: 1, name: 'vasya' },
  //   { id: 2, name: 'kolya' },
  // ]);

  // useEffect(async () => {
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users');
  //   const data = await response.json();
  //   setUsers(data);
  // }, []);

  return (
    <MainContainer keywords={'userpage'}>
      <h2>Список пользователей</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <Link href={`/users/${user.id}`}>
              <div>{user.name}</div>
            </Link>
          </li>
        ))}
      </ul>
    </MainContainer>
  );
};

export default Users;

export async function getStaticProps(context) {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await response.json();
  return {
    props: { users }, // will be passed to the page component as props
  };
}
