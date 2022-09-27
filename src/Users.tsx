import { useQuery, gql } from "@apollo/client";

/** Users Component */

interface IUser {
    username:string,
    first_name: string,
    last_name:string,
  }

  const getUsers = gql`
  query GetUsers {
    users {
      username
      first_name
      last_name
    }
  }
`;

function Users() {
  const { loading, error, data } = useQuery(getUsers);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
  
      let results = data.users


  return (
    <div className="Users">
      <h2>Users</h2>
      <ul>
        {results.map((u:IUser)  =>
          <li key={u.username}>
            {u.username}, {u.first_name}, {u.last_name}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Users;
