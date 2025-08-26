import Landing from "./Pages/Landing/Landing";
import { Login } from "./Pages/Auth/Login";
import Register from "./Pages/Auth/Register";
import ToDoList from "./Pages/Todo/ToDoList";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login></Login>} />
        <Route path="/register" element={<Register />} />
        <Route path="/to-do-list" element={<ToDoList />} />
      </Routes>
    </div>
  );
}

export default App;
