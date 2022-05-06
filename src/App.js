import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import UpdateList from './Pages/UpdateList';
import TaskList from "./Pages/TaskList"
import { GlobalStyle } from './Styled/GlobalStyle';
import Navbar from './Components/Navbar';
import { Main } from './Styled/main';

function App() {
  console.log(process.env.AUTH0_DOMAIN);
  return (

    <BrowserRouter>
      <GlobalStyle />
      <Main>
      <Navbar />

      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/updatelist" element={<UpdateList />} />
        <Route path="/tasklist" element={<TaskList />} />
      </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
