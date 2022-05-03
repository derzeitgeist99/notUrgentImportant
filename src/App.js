import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UpdateList from './Pages/UpdateList';
import TaskList from "./Pages/TaskList"

function App() {
  return (

    <BrowserRouter>
      <nav>
        <Link to="/updatelist">Modify your Tasks </Link>
        <Link to="/tasklist">See the list </Link>

      </nav>

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/updatelist" element={<UpdateList />} />
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
