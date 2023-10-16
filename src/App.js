import { useState } from "react";
import "./App.css";
import UserForm from "./components/UserForm/UserForm";
import UserList from "./components/UserList/UserList";

function App() {
  const [users, setUsers] = useState([
    { name: "emre", email: "emred@gmail.com" },
    { name: "hakan", email: "hakan@gmail.com" },
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div className="container d-flex flex-column gap-3 shadow mt-5 p-3 bg-info rounded">
      <UserForm addUser={addUser} />
      <UserList users={users} />
    </div>
  );
}

export default App;
