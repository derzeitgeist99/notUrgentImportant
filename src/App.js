import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainList from './Pages/MainList';
import Settings from './Pages/Settings';
import { GlobalStyle } from './Styled/GlobalStyle';
import Navbar from './Components/Navbar/Navbar';
import { Main } from './Styled/main';


function App() {

  return (

    <BrowserRouter>
      <GlobalStyle />
      <Main>
        <Navbar />
      <Routes>
          <Route path="/" element={<MainList />} />
          <Route path="/settings" element={<Settings />} />
      </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
