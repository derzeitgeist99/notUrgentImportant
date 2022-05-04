import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UpdateList from './Pages/UpdateList';
import TaskList from "./Pages/TaskList"
import { GlobalStyle } from './Styled/GlobalStyle';
import Navbar from './Components/Navbar';

function App() {
  return (

    <BrowserRouter>
      <GlobalStyle />
      <Navbar />

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/updatelist" element={<UpdateList />} />
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
