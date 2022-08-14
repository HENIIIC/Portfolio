import { BrowserRouter, Route, } from 'react-router-dom'

import NavBar from "./components/NavBar";
import Contact from "./pages/Contact"
import Projects from './pages/Projects'
import Home from './pages/Home'
import Skills from './pages/Skills'
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Route exact path= '/' component={Home}/>
        <Route path= '/projects' component={Projects}/>
        <Route path= '/skills' component={Skills}/>
        <Route path= '/contact' component={Contact}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
