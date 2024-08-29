import { useEffect, useState } from "react";






function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/users')
      .then(response => response.json())
      .then(data => {
        console.log('Datos recibidos:', data); 
        if (Array.isArray(data.payload)) {
          setUsers(data.payload);
        } else {
          
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <ul>
      {users.map((user, index) => (
        <li key={index}>{user.username}</li> 
      ))}
    </ul>
  );
}

export default App;
