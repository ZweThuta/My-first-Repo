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
  //Data Fetch Function end here

  const [id, setId] = useState("");
  const [error, setError] = useState(false);
  const [todo, setTodo] = useState(undefined);
  const getData = async (e) => {
    e.preventDefault();

    if (id < 1) {
      setError(true);
      setId("");
      return;
    }
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );
    const data = await response.json();
    setError(false);
    setTodo(data);
    setId("");
  };

  return (
    <section>
      <div className="firstbox">
        <form onSubmit={getData}>
          <input
            className="numberbox"
            type="number"
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <button class="button-36" type="Submit">
            Get Data
          </button>
        </form>
        <div>
          {error && <h1>Enter a correct Id please!</h1>}
          {todo && (
            <div className="textdata">
              <h1>Id:&nbsp;&nbsp;{todo.id}</h1>
              <h1>Title:&nbsp;&nbsp;{todo.title}</h1>
              <h1>UserId:&nbsp;&nbsp;{todo.userId}</h1>
              <h1>
                Completed:&nbsp;&nbsp;
                {todo.completed ? <font>Yes</font> : <font>No</font>}
              </h1>
            </div>
          )}
        </div>
      </div>

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
              <td>
                {todo.completed ? <p>Yes</p> : <p className="none">No</p>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
export default App;
