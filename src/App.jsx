import { useEffect, useState } from "react";
function App() {
  const [todos, setTodos] = useState([]);

  useEffect((_) => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    setTodos(data);
  };

  return (
    <section>
      <table>
        <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Completed</th>
        </tr>
        </thead>
        <tbody>
        {todos.map((todo) => (
          <tr key={todo.id}>
            <td>{todo.id}</td>
            <td>{todo.title}</td>
            <td>{todo.completed ? <p>Yes</p>: <p className="none">No</p>}</td>
          </tr>
        ))}
        </tbody>
      </table>
    </section>
  );
}
export default App;
