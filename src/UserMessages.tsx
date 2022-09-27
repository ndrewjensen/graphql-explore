/** UserMessages Component */

import { useQuery, gql } from "@apollo/client";

const HARDCODED_USER = "0";


interface IMessage {
    body: string
    id: number
}

function UserMessages() {
  const getUserMessages = gql`
    query getUserMessages {
      user(username: "${HARDCODED_USER}") {
        username
        messages {
            body
            id
        }
      }
    }
  `;

  const { loading, error, data } = useQuery(getUserMessages);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

    let results:IMessage[] = data.user.messages

  return <div className="UserMessages">
    <h2>UserMessages</h2>
    <ul>
        {results.map((m) =>
            <li key={m.id}>{m.body}</li>
        )}
    </ul>


  </div>;
}

export default UserMessages;
