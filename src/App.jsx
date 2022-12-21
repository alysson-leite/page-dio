import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { Home } from "./pages/home"
import { Login } from "./pages/login"
import { Register } from './pages/register';
import { Feed } from "./pages/feed"
import { GlobalStyle } from './styles/global'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/register" element={ <Register /> } />
        <Route path="/login" element={ <Login /> }/>
        <Route path="/feed" element={ <Feed /> }/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
