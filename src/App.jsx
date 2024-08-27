import { useEffect, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/users');
        const data = await response.json();

        // Verifica si la propiedad 'payload' existe y es un array
        if (data && Array.isArray(data.payload)) {
          setUsers(data.payload);
        } else {
          // Si no es un array, muestra un mensaje de error
          setError('Datos de usuario no válidos');
        }
      } catch (error) {
        setError('Error al cargar los usuarios');
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount(count => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        {users.length > 0 ? (
          users.map((user, i) => (
            <li key={i}>{user.username}</li> // Usa la propiedad correcta
          ))
        ) : (
          <p>No users found</p>
        )}
      </ul>
    </>
  );
}

export default App;

