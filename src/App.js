import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UpdateList from './Pages/UpdateList';
import TaskList from "./Pages/TaskList"
import Settings from './Pages/Settings';
import { GlobalStyle } from './Styled/GlobalStyle';
import Navbar from './Components/Navbar';
import { Main } from './Styled/main';


function App() {

  return (

    <BrowserRouter>
      <GlobalStyle />
      <Main>
        <Navbar />
      <Routes>
          <Route path="/" element={<UpdateList />} />
          <Route path="/settings" element={<Settings />} />
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
