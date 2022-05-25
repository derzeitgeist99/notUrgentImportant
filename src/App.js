import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainList from './Pages/MainList';
import Settings from './Pages/Settings';
import { GlobalStyle } from './Styled/GlobalStyle';
import Navbar from './Components/Navbar/Navbar';
import { Main } from './Styled/main';
import { About } from './Pages/About';
import { FAQ } from './Pages/FAQ';


function App() {

  return (

    <BrowserRouter>
      <GlobalStyle />
      <Main>
        <Navbar />
      <Routes>
          <Route path="/" element={<MainList />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
      </Routes>
      </Main>
    </BrowserRouter>
  );
}

export default App;
